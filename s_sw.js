/* Clever Scramjet service worker — follows DogeUB's Scramjet 1.x layout. */
if (navigator.userAgent.includes("Firefox")) {
  try { Object.defineProperty(globalThis, "crossOriginIsolated", { value: true, writable: false }); } catch {}
}
importScripts("./z/b.js");
const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

async function handleRequest(event) {
  await scramjet.loadConfig();
  if (scramjet.route(event)) return scramjet.fetch(event);
  return fetch(event.request);
}

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});
