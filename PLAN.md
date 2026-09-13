# PLAN.md - Static HTML Rendering Refactor for Full Crawlability

## Overview

Groundwork is an Astro 5 + React 19 content site (71 pre-rendered pages: 45
software reviews, 11 categories, 7 problem hubs, 6 business guides, home,
about) driven by data files in `src/data/`. Deployed at
`https://groundworkforgrowth.vercel.app/`.

The problem: although Astro pre-renders a page shell, every page passes its
entire React page component with `client:load`. The component ships as a
serialized prop inside `<astro-island>` and renders ONLY in the browser.
Measured on the current build (words in served HTML, scripts stripped):

- `/review/pipedrive`: 6 static words vs 856 inside JS islands
- `/` (home): 7 static vs 1,535 in islands
- `/category/crm`: 10 static vs 1,026 in islands

Google therefore sees near-empty pages on first crawl and must rely on its
slower JS-rendering pass. This is the leading suspect for 9 of 71 pages
indexed. The goal: 100% of content words present in the served HTML, matching
what currently renders client-side, with React kept only for genuinely
interactive widgets. It IS a rendering refactor; it is NOT a content rewrite,
design change, or URL change (all routes, data, and visual output stay the
same). Pure hand-written HTML was considered and rejected: the data-driven
templating must remain single-source (see Decisions).

## Decisions

- 2026-09-13 - Production URL is `https://groundworkforgrowth.vercel.app`.
- 2026-09-13 - Approach: port React page components to native `.astro`
  components (fully rendered to HTML at build time). Pure-HTML rewrite and
  client-side-prerender hacks were rejected; Astro static output is identical
  to hand-written HTML while keeping the data files as single source of truth.
- 2026-09-13 - React islands remain ONLY for interactive widgets:
  `QuizWidget` (and any nav dropdown/mobile menu behavior that needs JS).
  No `client:load`/`client:visible` on whole page components after the
  refactor.
- 2026-09-13 - Definition of done (per page type): crawler-visible static
  word count in built HTML is >= 90% of the words currently rendered
  client-side (measured with the island-stripping script below), all visual
  output unchanged, `astro build` passes, and links/URLs unchanged.
- 2026-09-13 - JSX -> Astro conversion rules: `className` -> `class`; inline
  conditional rendering `{cond && <X/>}` -> Astro `if`/ternaries in template;
  `.map()` -> `{items.map(...)}` still works but prefer Astro syntax; map over
  data in the frontmatter `---` block; keep Tailwind classes exactly as-is;
  `<a href>` stays; any `useState`/`useEffect`/event handlers move into a
  small React island, not the static template.
- 2026-09-13 - Layout.astro keeps its existing head (canonical, og, JSON-LD
  via `jsonLd` prop); refactored pages must keep passing the same
  title/description/jsonLd props.

## Done

- 2026-09-13 - Site cloned from `github.com/jonah721/Groundwork` into a local
  `Groundwork/` folder for audit and fixes.
- 2026-09-13 - Comparative SEO audit against the CSV/JSON Column Type Cleaner
  site (same owner). Conclusion: Groundwork already handles most technical SEO
  correctly (Astro pre-render, per-page canonical/title/description, sitemap
  with 71 URLs, robots.txt pointing at sitemap-index.xml, working 404s); the
  shared failure is zero backlinks on a fresh vercel.app subdomain, plus the
  client-rendering problem this plan addresses. No noindex, no deployment
  protection, no robots blocking found on the live site.
- 2026-09-13 - Fix 2 of the audit (commit 2085b7b, pushed to main): og tags,
  site og-image, and JSON-LD structured data.
  - `src/layouts/Layout.astro`: Open Graph + Twitter card meta on every page
    (og:title/description/type/url/site_name/image with 1200x630 dimensions),
    site-wide `WebSite` JSON-LD block, and a new `jsonLd` prop so pages can
    inject per-page structured data.
  - `src/pages/review/[slug].astro` (45 pages): `Product` + `Review` schema
    with rating derived from the score field, pros/cons as `ItemList`s,
    author = Organization Groundwork, plus `BreadcrumbList`
    (Home > Category > Review).
  - `src/pages/category/[slug].astro` (11 pages): `ItemList` of every tool
    with its review URL.
  - `src/pages/hub/[slug].astro` (7 pages): `CollectionPage` + `ItemList` of
    recommended tools. Also fixed a live bug: meta description used
    `hub.intro`, which does not exist in the data model, so all 7 hub pages
    served empty meta descriptions; now uses `hub.description`.
  - `src/pages/business/[slug].astro` (6 pages): `CollectionPage` +
    `ItemList` of all curated tools.
  - `public/og-image.png`: generated 1200x630 branded image.
  - Verified via full production build (71 pages) and inspection of built
    HTML: schema and og tags present in served HTML, e.g. on
    `/review/pipedrive/`.
- 2026-09-13 - Static-rendering refactor implemented on branch
  `feat/static-rendering` (commits cc13f02, 1fa4909, c39fda8, 8bf6a50, plus
  home/about commit): all six page types ported to native Astro templates;
  Footer and DisclosureBanner also made static site-wide; HeaderNav and
  QuizWidget remain React islands (interactive only). Before/after
  crawler-visible word counts (static words in served HTML):

  | Page type | Before (static / in-island) | After (static / in-island) |
  |---|---|---|
  | Review (pipedrive) | 6 / 856 | 835 / 13 |
  | Category (crm) | 10 / 1026 | 999 / 13 |
  | Hub (losing-leads) | - / - | 452 / 13 |
  | Business (restaurant) | - / - | 583 / 13 |
  | Home | 7 / 1535 | 1426 / 110 |
  | About | - / - | 826 / 13 |

  Site-wide across all 71 built pages: 57,110 static words vs 1,020 inside
  islands (the 1,020 are HeaderNav labels + QuizWidget + Analytics, all
  non-content). The residual 13 words per page = HeaderNav island.
- 2026-09-13 - Baseline crawl measurements recorded (table in Overview).
  Measurement script (run from repo root after `npm run build`):

```python
import re, glob
for page in glob.glob('dist/**/*.html', recursive=True):
    html = open(page, encoding='utf-8').read()
    html2 = re.sub(r'<(script|style).*?</\1>', '', html, flags=re.S)
    inside = ''.join(re.findall(r'<astro-island[^>]*>(.*?)</astro-island>', html2, flags=re.S))
    outside = re.sub(r'<astro-island.*?</astro-island>', '', html2, flags=re.S)
    strip = lambda s: len(re.sub(r'<[^>]+>', ' ', s).split())
    print(page, '| static:', strip(outside), '| in-islands:', strip(inside))
```

## In Progress

- Item: refactor all six page types from `client:load` React components to
  static Astro components. Branch: `feat/static-rendering` (create from
  `main`; commit 2085b7b is the current tip).

Order of work (one page type at a time, verifying each before the next; start
with reviews = 45 highest-value pages):

1. **Review pages** (`src/pages/review/[slug].astro` + `src/pages/ReviewPage.tsx`):
   - Read `ReviewPage.tsx` fully. Inventory its React features: state, event
     handlers, conditionals, child component usage
     (`ScorecardBar`, `ProsConsBlock`, `VerdictBox`, `ComparisonTable`,
     `IndexCard`, `Badge`, `Breadcrumbs`, `CriteriaDisclosureBox` are likely
     pure-presentative and port to `.astro`; anything with hooks/handlers
     becomes an island).
   - Create `src/components/static/ReviewContent.astro` (or inline in the
     page). Port the JSX to Astro template syntax per the conversion rules.
     Every text node, list item, table row, and link currently rendered by
     React MUST appear in the output. Keep the exact same DOM structure and
     Tailwind classes so the design does not shift.
   - Interactive fragments (e.g. affiliate CTA hover states, collapsible
     criteria boxes) may remain React islands with `client:visible`, but the
     words inside them must ALSO exist statically (island can hydrate over
     identical static markup, or the static template renders the content and
     the island only adds behavior).
   - Replace `<ReviewPage client:load tool={tool} />` with the static
     component, passing `tool` from frontmatter.
   - Verify: `npm run build`, then the measurement script must show
     `/review/pipedrive` static words >= ~770 (90% of 856) with 0 or
     negligible in-island words; spot-check `/review/hubspot-crm` and one
     non-CRM tool. Diff visual output with `npm run dev` on a rebuilt page vs
     the deployed one.
2. **Category pages** (`CategoryPage.tsx`, 11 pages): same process; target
   >= 90% of ~1,026 words static.
3. **Hub pages** (`ProblemHubPage.tsx`, 7 pages): same; includes the
   `recommendedToolSlugs` links which must be static `<a>` tags.
4. **Business pages** (`BusinessPage.tsx`, 6 pages): same; port
   `BusinessLeadSection`/`BusinessEditorialInsert` rendering fully.
5. **Home page** (`HomePage.tsx`, 1 page): target >= 90% of ~1,535 words.
   `QuizWidget` stays a React island (`client:visible`), but its surrounding
   marketing copy becomes static.
6. **About page** (`AboutPage.tsx`, 1 page): smallest; do last as a sanity
   check of the pattern.

Per-page-type verification gate (do not proceed to the next type until
passed):
- `npm run build` succeeds with 71 pages.
- Measurement script: static words >= 90% of the type's baseline in-island
  count; in-island words drop to near 0 (only true interactive islands).
- `grep -c "client:load"` in `src/pages/` shows no whole-page islands left.
- Spot-check 2 built pages per type: links resolve (`href` targets exist in
  `dist/`), h1 present, JSON-LD blocks still emitted.
- Visual spot-check via `npm run dev` (screenshot or side-by-side) for one
  page per type.

After all six types pass:
- Run the measurement script across ALL of `dist/**` and save the full table
  into PLAN.md Done section (before/after per page type).
- Run `npx tsc --noEmit` (or `astro check` if available) - must pass.
- Open ONE PR `feat/static-rendering` -> `main` with: problem statement, the
  before/after measurement table, and files changed. Merge only after the
  user reviews.

## Backlog

- Backlinks/outreach: review site with zero inbound links will still index
  partially regardless of rendering (on vercel.app subdomain especially).
- Custom domain to shed the disposable-subdomain signal.
- FAQPage schema on hub pages (rich-result eligibility).
- Full copy proofread of visible strings (phrasing, not punctuation).
- Suggest re-running Request Indexing in Search Console AFTER this refactor
  deploys (submitting JS-empty pages wastes the request).

## Status

Refactor not started. Baseline measured (1% of content crawler-visible on
sampled pages). Next action: create branch `feat/static-rendering` and port
ReviewPage.tsx to a static Astro component per step 1, verifying with the
measurement script before moving to category pages.
