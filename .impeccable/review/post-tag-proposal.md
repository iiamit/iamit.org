# Post tagging mappings — approved and applied

Reviewed all 189 local posts by title and content excerpts, with additional body review for ambiguous subjects. The user approved the mappings on 2026-11-23. All 188 nonempty topic mappings are applied, including the previously flagged rows. The Untitled entry is unlisted. External linked articles and missing media were not treated as reviewed full text.

Use one primary topic and at most one secondary topic. Classify by the substance, rather than a passing mention or the conference where it was presented. Keep publication/source (Forbes, DevOps.com), format (talk, interview, paper), and language separate from topic tags. Avoid a generic `security` tag because it describes almost the whole archive.

| Topic | Primary posts | Including secondary tags |
|---|---:|---:|
| research | 78 | 93 |
| offensive-security | 14 | 22 |
| strategy-risk | 31 | 51 |
| cyber-policy | 23 | 29 |
| community | 28 | 43 |
| personal | 3 | 3 |
| cloud-devops | 3 | 15 |
| ai | 6 | 6 |
| aviation | 2 | 2 |
| Untitled entry, unlisted without a topic | 1 | 1 |

## Before / after examples

| Post | Current | Proposed |
|---|---|---|
| CyberQRM | none | strategy-risk |
| Defining Penetration Testing | none | offensive-security · strategy-risk |
| The Missing Layer In AI-Driven Engineering | forbes · security · devops · ai | ai · cloud-devops; retain Forbes as source |
| Backpacking In Europe | aviation | aviation |
| Picking up the glove — DC9723 | none | community |

## Applied decisions

- All per-post topic mappings in `post-tag-proposal.csv` are approved and applied. The nine originally flagged rows are resolved by that approval; Untitled has no invented topic.
- The approved All / AI / Aviation controls remain. Counts are now 188 / 6 / 2. Three previous AI tags were removed where AI was incidental to the main subject; their approved primary topics are cloud-devops or strategy-risk.
- Untitled at `/blog/1170/` is excluded from homepage/blog lists, related writing, and sitemap, while retaining its direct URL and original image. It has no body text; the earlier description of it as entirely empty was imprecise.
- Existing Jekyll categories hold the topic slugs. Nine Forbes sources use a separate `publication` field, shown as publication attribution on article pages and the featured archive article.
- No additional filter controls or taxonomy dependency were added.
