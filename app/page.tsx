import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, ReferenceImage, SectionHeading, TechIcon } from "./components";

export const metadata: Metadata = {
  title: "Precision AI for Industrial Excellence",
  description:
    "Industrial AI systems, edge hardware, and engineering services built for high-stakes operations.",
};

const metrics = [
  ["99.9%", "Uptime reliability"],
  ["<50ms", "Inference latency"],
  ["12M+", "Sensors monitored"],
  ["Tier 1", "Automotive partner"],
];

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main>
        <section className="home-hero">
          <div className="shell home-hero-grid">
            <div className="hero-copy">
              <div className="status-chip"><span /> System status: optimal</div>
              <p className="eyebrow">Industrial intelligence / 01</p>
              <h1>Precision AI for industrial excellence.</h1>
              <p className="hero-lede">
                Sheridan Labs engineers dependable artificial intelligence for heavy industry and
                automotive systems—where every signal, decision, and millisecond matters.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/services">Explore solutions</Link>
                <Link className="button button-secondary" href="/contact">Contact engineering</Link>
              </div>
            </div>
            <div className="hero-visual-wrap">
              <ReferenceImage className="crop-home-hero" label="Automated industrial robotics laboratory" />
              <div className="visual-hud visual-hud-top"><span className="live-dot" /> Live plant model</div>
              <div className="visual-hud visual-hud-bottom">
                <span>Cell 04</span><strong>98.7%</strong><small>model confidence</small>
              </div>
              <div className="corner-mark corner-mark-a" />
              <div className="corner-mark corner-mark-b" />
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="innovation-grid">
            <div className="innovation-copy">
              <SectionHeading
                eyebrow="Operating principle"
                title="Stability through innovation"
                body="In high-stakes environments, uncertainty is not an option. We unite physical infrastructure with cognitive systems to make operations safer, more reliable, and measurably more productive."
              />
              <p>
                Our models are framed by systematic precision and deployed close to the work—keeping
                critical interfaces legible, fast, and dependable under real operating pressure.
              </p>
              <Link className="text-link" href="/about">How we engineer reliability <span>→</span></Link>
            </div>
            <div className="metric-grid">
              {metrics.map(([value, label]) => (
                <article className="metric-card" key={label}>
                  <strong>{value}</strong><span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading
              eyebrow="Our expertise"
              title="Advanced AI devices & services"
              body="A connected portfolio built from the factory floor outward."
            />
            <div className="expertise-grid">
              <article className="feature-card feature-card-wide">
                <div className="card-topline"><TechIcon symbol="▦" /><span>Hardware / Edge</span></div>
                <div>
                  <h3>Edge processing units</h3>
                  <p>Industrial compute designed for extreme environments, delivering local inference with no cloud dependency.</p>
                </div>
                <Link className="text-link" href="/products">View hardware <span>→</span></Link>
              </article>
              <article className="feature-card">
                <div className="card-topline"><TechIcon symbol="⌁" /><span>Service / Predict</span></div>
                <div>
                  <h3>Predictive maintenance</h3>
                  <p>Forecast failure before it occurs and turn unplanned downtime into scheduled action.</p>
                </div>
                <Link className="text-link" href="/services">View service <span>→</span></Link>
              </article>
              <article className="feature-card">
                <div className="card-topline"><TechIcon symbol="◎" /><span>Vision / Inspect</span></div>
                <div>
                  <h3>Autonomous quality control</h3>
                  <p>Machine vision systems capable of finding microscopic defects at production-line speed.</p>
                </div>
                <Link className="text-link" href="/products">View devices <span>→</span></Link>
              </article>
              <article className="feature-card feature-card-visual">
                <div className="analytics-copy">
                  <div className="card-topline"><TechIcon symbol="⌬" /><span>Analytics / Live</span></div>
                  <h3>Fleet telemetry analytics</h3>
                  <p>Real-time operational intelligence across factories, fleets, and autonomous logistics.</p>
                  <Link className="text-link" href="/services">Explore analytics <span>→</span></Link>
                </div>
                <ReferenceImage className="crop-home-analytics" label="Industrial fleet analytics dashboard" />
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-grid">
            <div><p className="eyebrow eyebrow-light">Start a technical conversation</p><h2>Build reliability into every decision.</h2></div>
            <Link className="button button-light" href="/contact">Talk to our engineers</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
