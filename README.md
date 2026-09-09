# joshday.github.io

[![Deploy](https://github.com/joshday/joshday.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/joshday/joshday.github.io/actions/workflows/deploy.yml)

Personal website built with [Quarto](https://quarto.org). Formerly heyjoshday.com.

Pushes to `master` render the site and deploy it to GitHub Pages via Actions (no `gh-pages` branch). `bookmarks/` is a personal page served at `/bookmarks/` but not linked from the site, listed in the sitemap, or indexed by search.

## Development

```bash
# Preview locally
quarto preview

# Build site
quarto render
```
