import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, NumberTag, PageHero, SectionHeading } from "../components";
import { principles } from "../../content/site";

export const metadata: Metadata = {
  title: "How We Build",
  description: "Four engineering commitments that are enforced in the Sheridan Labs product codebases.",
};

export default function ApproachPage() {
  return (
    <>
      <Header active="approach" />
      <main>
        <PageHero dark eyebrow="Approach / Enforced constraints" title={principles[0].title} body={principles[0].body}>
          <div className="service-signal" aria-label="Authoritative source signal visualization">
            <div className="signal-grid" />
            <div className="signal-wave"><i /><i /><i /><i /><i /><i /><i /></div>
            <span>Source / Authoritative</span><strong>Cited</strong><small>No model paraphrase</small>
          </div>
        </PageHero>

        <section className="service-dark-section">
          <div className="shell">
            <SectionHeading eyebrow="Engineering commitments" title="Rules that show up in the code" body="These are descriptions of decisions already made in the products, not aspirations." />
            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.index}>
                  <NumberTag>{principle.index}</NumberTag><h2>{principle.title}</h2><p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="Enforced in the products" title="The constraint is part of the system" body="Important boundaries are tested and isolated rather than left to memory or good intentions." align="center" />
            <div className="product-proof-grid">
              <article><span>FaultNav</span><h3>Permitted-source tests</h3><p>Its test suite fails the build if the AI is ever handed content it is not permitted to see.</p></article>
              <article><span>ControlTrail</span><h3>Independent data isolation</h3><p>Each customer’s data is isolated in three independent layers, including one inside the database itself.</p></article>
            </div>
          </div>
        </section>

        <section className="section shell centered-cta">
          <SectionHeading eyebrow="Questions" title="Ask us about a product or a hard problem" body="We are happy to explain the boundaries, decisions, and reasoning behind what we build." align="center" />
          <Link className="button button-primary" href="/contact">Contact both founders</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
