import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const pages = [
  ["/", /Software for work where a wrong answer is expensive/i],
  ["/products", /What we’re building/i],
  ["/approach", /We don’t let software guess/i],
  ["/about", /Two founders\. One standard for correctness/i],
  ["/contact", /Tell us what you’re working on/i],
];

const unsupportedClaims = /99\.9%|50ms|12M\+|Tier 1|SL-Nexus|Vibration Telemetry|Industrial 5G|Precision Vision|Predictive Maintenance|Fleet Telemetry/i;

for (const [pathname, expected] of pages) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected);
    assert.match(html, /Sheridan Labs/i);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
    assert.doesNotMatch(html, unsupportedClaims);
  });
}

test("the superseded services route is removed", async () => {
  const response = await render("/services");
  assert.equal(response.status, 404);
});
