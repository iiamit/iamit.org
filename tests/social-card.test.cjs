const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

test('the landscape social image and all default sharing metadata agree', () => {
    const root = join(__dirname, '..');
    const image = readFileSync(join(root, 'assets/images/og-ian-amit-card.png'));
    assert.equal(image.subarray(1, 4).toString(), 'PNG');
    assert.equal(image.readUInt32BE(16), 1200);
    assert.equal(image.readUInt32BE(20), 627);
    assert.ok(image.length < 5_000_000);
    for (const file of ['index.html', 'blog.html', 'privacy.html', '_layouts/post.html']) {
        const html = readFileSync(join(root, file), 'utf8');
        assert.match(html, /og-ian-amit-card\.png/);
        assert.match(html, /property="og:image:width" content="1200"/);
        assert.match(html, /property="og:image:height" content="627"/);
        assert.match(html, /property="og:image:alt"/);
        assert.match(html, /name="twitter:card" content="summary_large_image"/);
    }
});
