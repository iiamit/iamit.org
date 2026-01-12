document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#mobile-menu');
  const navLinks = document.querySelector('#primary-navigation');
  const showBtn = document.getElementById('btn-show-more');
  const hiddenExp = document.getElementById('experience-hidden');

  // Mobile menu toggle (accessible)
  if (menu && navLinks) {
    menu.addEventListener('click', function () {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', (!expanded).toString());
      menu.classList.toggle('is-active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(n => n.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-active');
      navLinks.classList.remove('active');
    }));
  }

  // Experience toggle (accessible)
  if (showBtn && hiddenExp) {
    showBtn.addEventListener('click', function () {
      const expanded = showBtn.getAttribute('aria-expanded') === 'true';
      showBtn.setAttribute('aria-expanded', (!expanded).toString());
      hiddenExp.classList.toggle('visually-hidden');
      hiddenExp.setAttribute('aria-hidden', (!expanded).toString());
      showBtn.innerHTML = expanded ? '<i class="fas fa-chevron-down"></i> Show Earlier Roles' : '<i class="fas fa-chevron-up"></i> Show Less';
    });
  }

  // Ensure external target="_blank" links have safe rel attributes
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    const rel = a.getAttribute('rel') || '';
    if (!/noopener/i.test(rel) || !/noreferrer/i.test(rel)) {
      a.setAttribute('rel', (rel + ' noopener noreferrer').trim());
    }
  });

  // Optional: Image fallback for profile if onerror didn't run (e.g., network error)
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      if (!this.dataset.fallbackApplied) {
        this.dataset.fallbackApplied = '1';
        this.onerror = null;
        this.src = 'https://ui-avatars.com/api/?name=Ian+Amit&background=10b981&color=fff&size=512&font-size=0.3';
      }
    });
  });

  // Progressive "Load more" implementation (uses server-side pagination pages)
  const loadMoreBtn = document.getElementById('load-more');
  const postsList = document.querySelector('.posts-list');
  const paginationNav = document.querySelector('.pagination');

  async function loadNextPage(nextPath) {
    if (!nextPath || !loadMoreBtn) return null;

    // UI: disable + show spinner
    loadMoreBtn.disabled = true;
    loadMoreBtn.setAttribute('aria-busy', 'true');
    const btnText = loadMoreBtn.querySelector('.btn-text');
    const spinner = loadMoreBtn.querySelector('.spinner');
    if (btnText) btnText.textContent = 'Loading...';
    if (spinner) spinner.removeAttribute('hidden');

    try {
      const resp = await fetch(nextPath, { credentials: 'same-origin' });
      if (!resp.ok) throw new Error('Network error');
      const html = await resp.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Append new posts
      const newPosts = doc.querySelectorAll('.posts-list .post-preview');
      newPosts.forEach(p => postsList.appendChild(p.cloneNode(true)));

      // Update pagination nav (replace inner contents)
      const remotePagination = doc.querySelector('.pagination');
      if (remotePagination && paginationNav) {
        paginationNav.innerHTML = remotePagination.innerHTML;
        // Remove the numbered pages navigation so the "Load more" UX is primary
        const pagesEl = paginationNav.querySelector('.pagination-pages');
        if (pagesEl) pagesEl.remove();
      }

      // Update load-more next attribute, or remove the button if there is no next page
      const remoteNext = doc.querySelector('.pagination .pagination-next');
      if (remoteNext) {
        const newNext = remoteNext.getAttribute('href');
        loadMoreBtn.dataset.next = newNext;

        // Update browser URL using History API to reflect the page we just loaded
        // Parse page number if present
        try {
          const pageMatch = nextPath.match(/page\/(\d+)\/?/);
          const pageNum = pageMatch ? Number(pageMatch[1]) : 1;
          history.pushState({ page: pageNum, path: nextPath }, '', nextPath);
        } catch (err) {
          // non-fatal: ignore history issues
          console.warn('history push failed', err);
        }

        loadMoreBtn.disabled = false;
        loadMoreBtn.setAttribute('aria-busy', 'false');
        if (btnText) btnText.textContent = 'Load more posts';
        if (spinner) spinner.setAttribute('hidden', '');
      } else {
        // No next page -> remove the button
        loadMoreBtn.remove();
      }
    } catch (e) {
      console.error('Failed to load next page:', e);
      loadMoreBtn.disabled = false;
      loadMoreBtn.setAttribute('aria-busy', 'false');
      if (btnText) btnText.textContent = 'Load more posts';
      if (spinner) spinner.setAttribute('hidden', '');
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
      const next = loadMoreBtn.dataset.next;
      if (next) loadNextPage(next);
    });
  }

  // Keep history behavior simple & reliable: on back/forward, reload to server-rendered state
  window.addEventListener('popstate', function (e) {
    if (e.state && e.state.path) {
      // navigate to the saved path to restore server-side content and avoid complex DOM diffs
      window.location.href = e.state.path;
    } else {
      // fallback to the main blog index
      window.location.href = '/blog/';
    }
  });
});