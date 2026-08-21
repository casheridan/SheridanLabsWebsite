import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, NumberTag, PageHero, ReferenceImage, SectionHeading, TechIcon } from "../components";

export const metadata: Metadata = {
  title: "Industrial Precision Services",
  description: "AI implementation, predictive maintenance, and automotive software engineering services.",
};

const phases = [
  ["01", "Audit & analysis", "Map infrastructure, data fidelity, failure modes, and operating constraints."],
  ["02", "Architecture design", "Define the edge, model, integration, and validation architecture."],
  ["03", "Deployment", "Roll out in controlled phases with shadow-mode validation and operator training."],
  ["04", "Optimization", "Continuously refine performance, reliability, and system hardening."],
];

export default function ServicesPage() {
  return (
    <>
      <Header active="services" />
      <main>
        <PageHero
          dark
          eyebrow="Engineering services / Applied AI"
          title="Industrial precision services"
          body="We bridge heavy engineering and advanced intelligence with implementation programs built around safety, uptime, and measurable operational impact."
        >
          <div className="service-signal" aria-label="Live industrial signal visualization">
            <div className="signal-grid" />
            <div className="signal-wave"><i /><i /><i /><i /><i /><i /><i /></div>
            <span>INPUT / 48 KHZ</span><strong>0.024</strong><small>anomaly index</small>
          </div>
        </PageHero>

        <section className="service-dark-section">
          <div className="shell service-grid">
            <article className="service-card service-card-primary">
              <div className="card-topline"><span className="eyebrow">Core offering</span><TechIcon symbol="▦" /></div>
              <h2>AI implementation services</h2>
              <p>End-to-end integration of machine learning into existing industrial workflows—from data auditing and custom modeling to deployment and continuous monitoring.</p>
              <div className="service-tags"><span><i />Live monitoring</span><span><i />Custom modeling</span><span><i />Operator-ready</span></div>
            </article>
            <article className="service-card service-card-predictive">
              <div className="card-topline"><span className="eyebrow">Consulting</span><TechIcon symbol="⌁" /></div>
              <h2>Predictive maintenance</h2>
              <p>Turn IoT sensor streams into reliable forecasts of equipment failure and remaining useful life.</p>
              <ReferenceImage className="crop-services-dashboard" label="Predictive maintenance monitoring dashboard" />
            </article>
            <article className="service-card service-card-automotive">
              <div className="service-card-copy">
                <p className="eyebrow">Specialized engineering</p>
                <h2>Custom automotive software</h2>
                <p>Robust embedded diagnostics, powertrain intelligence, and safety-critical automation for modern vehicle platforms.</p>
                <Link className="button button-secondary" href="/contact">Explore capabilities</Link>
              </div>
              <ReferenceImage className="crop-services-car" label="Automotive software system blueprint" />
            </article>
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="Method / Controlled delivery" title="Systematic implementation process" body="A clear technical path from current-state audit to hardened production performance." align="center" />
            <div className="process-grid">
              {phases.map(([number, title, body], index) => (
                <article className={`process-card${index === 2 ? " process-card-active" : ""}`} key={number}>
                  <NumberTag>{number}.</NumberTag><h3>{title}</h3><p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell service-outcomes">
          <SectionHeading eyebrow="Program outcomes" title="Built for the realities of production" />
          <div className="outcome-list">
            <div><strong>01</strong><h3>Minimal disruption</h3><p>Shadow deployments prove value before control is handed to the model.</p></div>
            <div><strong>02</strong><h3>Operator confidence</h3><p>Interfaces and alerts are designed around clear, actionable decisions.</p></div>
            <div><strong>03</strong><h3>Measured efficacy</h3><p>Every program is tied to uptime, quality, throughput, or safety outcomes.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
