const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');

test('topic filters include the featured entry, expose state, and recover from empty or invalid topics', () => {
    const source = readFileSync(new URL('../blog.html', `file://${__filename}`), 'utf8');
    const script = [...source.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];
    const rows = ['ai,security', 'ai,cloud', 'leadership'].map(tags => ({
        dataset: { tags }, style: {}
    }));
    const filters = ['all', 'ai', 'aviation'].map(filter => ({
        dataset: { filter }, attributes: {}, classList: { toggle() {} },
        setAttribute(key, value) { this.attributes[key] = value; },
        addEventListener() {}
    }));
    const nodes = Object.fromEntries(['filter-status', ...filters.map(f => 'count-' + f.dataset.filter)]
        .map(id => [id, { textContent: '' }]));
    const context = {
        document: {
            querySelectorAll(selector) {
                return selector === '.filter' ? filters : selector === '[data-tags]' ? rows : [];
            },
            getElementById(id) { return nodes[id]; }
        },
        location: 'https://www.iamit.org/blog/?topic=unknown',
        URL, URLSearchParams,
        history: { replaceState(_state, _title, url) { context.location = String(url); } }
    };
    runInNewContext(script, context);
    assert.equal(nodes['count-all'].textContent, 3);
    assert.equal(nodes['count-ai'].textContent, 2);
    assert.equal(filters[0].attributes['aria-pressed'], 'true');
    assert.equal(new URL(context.location).search, '');

    context.applyFilter('ai');
    assert.deepEqual(rows.map(r => r.style.display), ['', '', 'none']);
    assert.equal(filters[1].attributes['aria-pressed'], 'true');
    assert.equal(filters[0].attributes['aria-pressed'], 'false');
    assert.equal(nodes['filter-status'].textContent, '2 entries · ai');

    context.applyFilter('aviation');
    assert.ok(rows.every(r => r.style.display === 'none'));
    assert.match(nodes['filter-status'].textContent, /Choose All/);
    context.applyFilter('all');
    assert.ok(rows.every(r => r.style.display === ''));
});
