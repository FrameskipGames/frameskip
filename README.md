# Frameskip Games

Marketing site for Frameskip Games. Static HTML, no build step, no dependencies.

## Structure

```
index.html              Home: hero, games list, footer links
privacy-policy.html     Privacy policy (restyle content here, not in a CMS)
terms-of-service.html   Terms of service
404.html                GitHub Pages 404
assets/styles.css       Shared stylesheet — all pages
assets/site.js          Theme toggle + legal-page table of contents
assets/favicon.svg      Favicon
CNAME                   Custom domain (frameskip.io)
sitemap.xml             Search engine sitemap — update lastmod when pages change
robots.txt              Crawler directives
```

## Adding a game

Edit the `<!-- ADDING A GAME -->` comment block in `index.html`. Each entry is an
`<li class="game-row">` with an index number, title, description, and tags.
Copy an existing row and bump the index.

## Adding a page

1. Copy the header/footer from any existing page.
2. Give each prose `<section>` an `id` — `site.js` builds the table of contents
   from those ids automatically.
3. Add the page to `sitemap.xml`.

## Deploying

Pushes to `main` build automatically (Pages source is `main` / root).

The custom domain is set through repository settings, **not** through the `CNAME`
file alone:

- `Settings → Pages → Custom domain` must be set to `frameskip.io`
- `Settings → Pages → Enforce HTTPS` should be on

If `https://frameskip.io/` shows GitHub's "Site not found" page while
`https://frameskipgames.github.io/frameskip/` redirects correctly, the custom
domain has not been registered. DNS already points at GitHub Pages.

## Legal pages

`privacy-policy.html` and `terms-of-service.html` are templates, not legal advice.
Review both with a qualified lawyer before launch, and update the "Last updated"
date whenever you edit them.
