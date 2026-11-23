// Site navigation: one list that is a popover menu when narrow and inline when wide,
// plus a scrollspy for in-page section links.
(function () {
  var nav = document.querySelector('[data-site-nav]');
  if (!nav) return;

  var button = nav.querySelector('[popovertarget]');
  var list = button && document.getElementById(button.getAttribute('popovertarget'));
  if (!list) return;

  var wide = window.matchMedia('(min-width: 721px)');
  var nativePopover = Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover');

  function isOpen() {
    return nativePopover ? list.matches(':popover-open') : list.classList.contains(':popover-open');
  }

  function close() {
    if (!isOpen()) return;
    if (nativePopover) {
      list.hidePopover();
    } else {
      list.classList.remove(':popover-open');
      button.setAttribute('aria-expanded', 'false');
    }
  }

  // Keep the list a popover only in the collapsed layout. Use setAttribute, not the popover property.
  function syncLayout() {
    if (wide.matches) {
      close();
      list.removeAttribute('popover');
    } else {
      list.setAttribute('popover', 'auto');
    }
  }

  if (!nativePopover) {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', function () {
      var open = !isOpen();
      list.classList.toggle(':popover-open', open);
      button.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { close(); button.focus(); }
    });
  }

  list.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });

  // Without CSS anchor positioning, place the top-layer menu under the nav bar by hand.
  if (nativePopover && !(window.CSS && CSS.supports('anchor-name: --a'))) {
    list.addEventListener('toggle', function (e) {
      if (e.newState === 'open') list.style.insetBlockStart = nav.getBoundingClientRect().bottom + 'px';
    });
  }

  syncLayout();
  wide.addEventListener('change', syncLayout);

  // Scrollspy: only links that point at a section on this page.
  var links = Array.prototype.filter.call(list.querySelectorAll('a[href*="#"]'), function (a) {
    return a.pathname === location.pathname && a.hash.length > 1 && document.getElementById(a.hash.slice(1));
  });
  if (!links.length) return;

  var nativeSpy = window.CSS && CSS.supports('scroll-target-group: auto');

  function setCurrent(current) {
    links.forEach(function (a) {
      if (!nativeSpy) a.classList.toggle('target-current', a === current);
      if (a === current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  if (nativeSpy) {
    // :target-current drives the visuals; mirror it into aria-current for assistive tech.
    var sync = function () {
      setCurrent(links.filter(function (a) { return a.matches(':target-current'); })[0] || null);
    };
    sync();
    document.addEventListener('scrollend', sync);
  } else if ('IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.hash.slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(byId[entry.target.id]);
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
    Object.keys(byId).forEach(function (id) { observer.observe(document.getElementById(id)); });
  }
})();
