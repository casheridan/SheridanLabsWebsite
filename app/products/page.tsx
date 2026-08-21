import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero, ReferenceImage, SectionHeading, TechIcon } from "../components";

export const metadata: Metadata = {
  title: "Industrial AI Devices",
  description: "Rugged edge compute, telemetry, connectivity, and machine vision hardware for industry.",
};

const compactProducts = [
  { label: "Sensor node", title: "Vibration Telemetry Node", code: "VTN-42", icon: "⌁", body: "Continuous high-frequency monitoring of rotational equipment health." },
  { label: "Gateway", title: "Industrial 5G Gateway", code: "NET-5G", icon: "⌂", body: "Ultra-low-latency data transfer from sensor networks to edge processors." },
];

export default function ProductsPage() {
  return (
    <>
      <Header active="products" />
      <main>
        <PageHero
          eyebrow="Hardware division / Product platform"
          title="Industrial AI devices"
          body="Precision-engineered hardware for seamless sensor integration and high-performance edge computing in demanding industrial environments."
        >
          <div className="device-schematic" aria-label="Edge AI processor module diagram">
            <span className="schematic-label label-a">SL / CORE</span>
            <span className="schematic-label label-b">24 TOPS</span>
            <div className="chip-body"><i /><i /><i /><i /><strong>AI</strong></div>
            <span className="scan-line" />
          </div>
        </PageHero>

        <section className="section shell product-showcase">
          <article className="product-feature">
            <div className="product-photo-wrap">
              <ReferenceImage className="crop-products-server" label="Industrial edge server installed in a factory" />
              <span className="live-badge"><i /> Live AI</span>
            </div>
            <div className="product-feature-copy">
              <div><p className="eyebrow">Flagship edge server</p><span className="product-code">MOD-01A</span></div>
              <h2>SL-Nexus Edge Server</h2>
              <p>High-density localized processing for real-time factory-floor intelligence, with redundant neural cores and reinforced industrial casing.</p>
              <div className="spec-row"><span>24 TOPS</span><span>IP65</span><span>-20—70°C</span></div>
              <Link className="text-link" href="/contact">Request specifications <span>→</span></Link>
            </div>
          </article>

          <div className="product-side-stack">
            {compactProducts.map((product) => (
              <article className="compact-product" key={product.code}>
                <div className="compact-product-icon"><TechIcon symbol={product.icon} /><span>{product.code}</span></div>
                <p className="eyebrow">{product.label}</p>
                <h3>{product.title}</h3>
                <p>{product.body}</p>
                <Link className="text-link" href="/contact">Details <span>→</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell vision-feature">
            <ReferenceImage className="crop-products-vision" label="Precision machine vision equipment" />
            <div className="vision-feature-copy">
              <p className="eyebrow">Optical intelligence / VIS-800X</p>
              <h2>Precision Vision Array</h2>
              <p>Embedded AI inspection for defect detection at full line speed. Autonomous processing keeps quality decisions local, repeatable, and traceable.</p>
              <ul className="check-list">
                <li>Sub-millimeter optical accuracy</li>
                <li>Multi-spectrum sensor fusion</li>
                <li>Inline quality reporting</li>
              </ul>
              <Link className="button button-primary" href="/contact">Configure a system</Link>
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="Platform standard" title="Designed as one connected system" body="Every Sheridan Labs device shares the same deployment, monitoring, and security foundation." align="center" />
          <div className="three-up">
            <article className="mini-feature"><TechIcon symbol="◇" /><h3>Rugged by design</h3><p>Built for vibration, temperature, dust, and round-the-clock operation.</p></article>
            <article className="mini-feature"><TechIcon symbol="⌬" /><h3>Fleet managed</h3><p>Unified telemetry, health reporting, and secure remote configuration.</p></article>
            <article className="mini-feature"><TechIcon symbol="↯" /><h3>Instant inference</h3><p>Decisions happen at the edge without introducing a cloud round trip.</p></article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
