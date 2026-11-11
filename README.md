# Clever

Clever is an SVG-entrypoint proxy interface. The application UI lives in `index.svg`; `index.html` simply redirects the GitHub Pages root to that SVG document.

## Deployment

1. Enable GitHub Pages for this repository (Deploy from a branch, `main`, root).
2. Open the site at `https://theexpie.github.io/Clever/` or directly at `https://theexpie.github.io/Clever/index.svg`.
3. Use it from a secure HTTPS origin. Service workers do not work from ordinary insecure HTTP pages.

## Proxy runtime layout

- `index.svg` — HTML-in-SVG shell using the DogeUB-style `foreignObject` + DOM compatibility shim.
- `z/b.js` — Scramjet 1.x controller/runtime bundle.
- `z/c.js` — Scramjet sync worker helper.
- `s_sw.js` — Scramjet service worker, scoped to `/Clever/k/`.
- `y/a.js` — BareMux shared worker.
- Scramjet WASM and the Epoxy transport module are loaded from a pinned DogeUB repository snapshot in jsDelivr. The snapshot is pinned in `index.svg` so the paths do not silently follow a moving branch.

The Wisp endpoint can be changed under **Settings**. The default is the endpoint already configured in the source.

## Notes

- Open the SVG as a document. Do not embed it with an `<img>` tag; scripts inside SVG images are not run.
- The first proxy navigation initializes Scramjet, the BareMux transport, and the service worker.
- A browser may block particular proxied sites or features; a working engine does not guarantee that every website permits every operation.
- Scramjet and Epoxy are third-party projects. Their upstream source and licensing terms apply to their respective components: [Scramjet](https://github.com/MercuryWorkshop/scramjet) and [Epoxy transport](https://github.com/MercuryWorkshop/epoxy-transport). BareMux is provided by [MercuryWorkshop/bare-mux](https://github.com/MercuryWorkshop/bare-mux).
