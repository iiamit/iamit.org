# Review fixes — implementation status

Base: latest GitHub `origin/main` 5613a18, re-fetched and confirmed unchanged. Working branch: `codex/site-review`. Changes remain local and unpublished.

## Applied

- Approved homepage sequence: hero → latest writing → About → career → Speaking. Approved hero/About wording, portrait placement, visible talk/article links, and simplified All / AI / Aviation filters are implemented. Duplicated identity fields, repeated company callout, career scale bars, and misleading static-control styling were removed.
- Mobile archive overflow and post-reader column sizing are repaired. Shared contrast, functional type sizes, navigation, headings, skip links, focus targets, touch targets, reduced motion, native disclosures, and native scrollspy with an observer fallback are improved. The reading-progress fill uses a transform rather than a width transition.
- New 1200×627 social card (100,582 bytes) uses the original portrait at a restrained size. Home, blog, privacy, and default article metadata agree; custom article images retain their own metadata behavior.
- Encoding repaired in 125 posts (580 affected lines), plus one stray C1 control character removed. Legacy CRLF was retained. Four caption shortcodes now use figure/figcaption. Six Flash players were removed or replaced; one unsourced podcast shortcode now explains the missing recording. Unverified external media remains flagged in `archive-media-review.md`.
- Thirty-six historical internal links now point to generated routes. Wide WHOIS content has a named, keyboard-scrollable wrapper; article lists retain markers and reader intros retain the intended type size.

## Content approval status

- All mappings in `post-tag-proposal.csv` are approved and applied to 188 posts. Nine Forbes publications are separate from categories. Filters remain All / AI / Aviation and show 188 / 6 / 2.
- “Untitled” at `/blog/1170/` is approved for hiding. It is excluded from home/blog/related lists and sitemap; its direct URL and original image remain. It is text-empty, not entirely empty; the earlier description missed its image.
- Reel captions: the user explicitly requested leaving the reel without captions on 2026-11-23. No caption track or transcript will be added. The incomplete draft artifacts are shelved, excluded from publication, and no longer awaiting approval. This closes the requested caption work; it does not establish caption accessibility conformance.

## Verification

Real Jekyll 4.3.1 build and two Node regression tests pass. Chromium checked six routes at four widths (1440, 1024, 390, 320), with no overflow, broken loaded images, oversized icons, or script errors. Five representative content pages have no automated axe A/AA violations. Keyboard checks pass for skip links, menu dismissal, earlier-role disclosure, reel dismissal, filters, and article navigation including the forced observer fallback. Archive checks: 12 posts × three widths, no overflow; keyboard table scrolling, list markers, reader intro typography, and all 36 repaired internal-link targets pass. A final focused check confirms reading-progress percentage and transform agree. Review scripts and artifacts are excluded from Jekyll output. Diff whitespace check passes with legacy CRLF accounted for.

The final Impeccable detector reports 12 advisory/warning matches: three incumbent-font choices, two em-dash advisories (including career date ranges), four uppercase metadata/label matches, one metadata tracking match, and two false flat-hierarchy matches because it cannot resolve Liquid aviation stylesheet URLs. These were reviewed in rendered context; no ignore rules were added. The modernization scan reports zero matches across its 38 guides/52 rules, approximately 20% of its full corpus. Neither result establishes universal accessibility or modernity.

The earlier critique snapshot is a historical assessment. Its repeated-biography and unlinked-speaking P2 recommendations are now implemented with user approval; the empty filter categories are removed. Its older “not reviewed” archive scope does not describe the subsequent tagging/repair work. No new design score was invented for this implementation pass.

No production deployment, authenticated LinkedIn re-inspection, real-device/screen-reader testing, complete external-link crawl, or field Core Web Vitals measurement was performed. LinkedIn needs the deployed metadata and a fresh inspection before its cached preview can change. All task HTTP servers were stopped.

Hook triage follow-up: persisted narrow shared exceptions in `.impeccable/config.json` through `impeccable hooks ignore-value`: incumbent Inter for home/blog/post/social-card only; uppercase short metadata/labels for blog/post only (raw Liquid inflates character counts); 0.05em publication-date tracking for post layout only. These are reviewed design exceptions, not repaired regressions. The three hook-reported files now return zero detector findings with those exceptions. No website content or behavior changed in this follow-up; earlier raw detector counts remain the unsuppressed baseline.


Tagging approval validation: all 189 article bodies are byte-for-byte preserved after metadata updates, and all 189 direct routes still build. A temporary newest hidden-post fixture verified exclusion from the hero, homepage feed, blog feature/list, related writing, and sitemap without losing direct access; the fixture was removed. Final source counts match the approved mappings: 188 visible posts, 6 AI, 2 Aviation, and 9 publication labels. Jekyll and both Node regressions pass. The homepage uppercase detector exception now also covers topic labels inflated by Liquid source syntax, and the reviewed em-dash advisory is scoped to the homepage career date ranges and retained descriptions.

Tagging browser confirmation: home, blog, and a long-topic article checked at 1440/390/320px (nine viewport checks), no overflow; filters show exactly 188/6/2 visible entries; updated article attribution/topics render correctly; representative article axe checks return zero A/AA violations; no script errors. Unrelated historical third-party resources were blocked for deterministic layout checks after an external request stalled the first run. The check server stopped. Final touched-template detector scan is clear with the documented narrow exceptions; whitespace check passes.
