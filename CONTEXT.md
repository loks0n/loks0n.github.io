# Domain

Terms this blog is built from. Use these names in code and review.

- **Entry**: one piece of content. A directory under `/content/<collection>/<slug>/index.markdoc` with frontmatter plus a markdoc body. Its `slug` is the directory name.
- **Content Collection**: a set of Entries of one kind. Two exist: **Post** (title, excerpt, date; listed newest-first) and **Project** (name, description, github). Modelled by `collection()` in `src/lib/content.ts`, a deep module: frontmatter is globbed eagerly (lists, feed), the markdoc component lazily (per page). Its interface is `list()`, `slugs()`, `bySlug()`; the glob maps are passed in, so it is testable with in-memory maps.
- **Feed**: the RSS rendering of the Post collection at `/rss.xml`.
