import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero, SectionHeading, TechIcon } from "../components";
import { principles, products } from "../../content/site";

export const metadata: Metadata = {
  title: "Products",
  description: "FaultNav and ControlTrail: software for exacting technical work where a wrong answer is expensive.",
};

const boundaries = {
  FaultNav: "The AI orders the path. Licensed manufacturer data defines what test results mean.",
  ControlTrail: "The operational system of record underneath a customer’s SSP—not a certifying body.",
} as const;

export default function ProductsPage() {
  return (
    <>
      <Header active="products" />
      <main>
        <PageHero
          eyebrow="Products / Sheridan Labs"
          title="What we’re building."
          body="Two owned software products for exacting technical work. They serve different markets, but both are built around authoritative sources and explicit boundaries."
        >
          <div className="device-schematic" aria-label="Sheridan Labs product system diagram">
            <span className="schematic-label label-a">FaultNav</span>
            <span className="schematic-label label-b">ControlTrail</span>
            <div className="chip-body"><i /><i /><i /><i /><strong>SL</strong></div>
            <span className="scan-line" />
          </div>
        </PageHero>

        <section className="section shell">
          <SectionHeading eyebrow="Owned products" title="Built for work where correctness matters" body="The company site names both products without making availability claims. Each product will speak to its own market on its own property." />
          <div className="owned-products-grid">
            {products.map((product) => (
              <article className="owned-product-card" id={`product-${product.name.toLowerCase()}`} key={product.name}>
                <div className="card-topline"><TechIcon symbol={product.index} /><span>{product.domain}</span></div>
                <h2>{product.name}</h2>
                <p className="owned-product-summary">{product.summary}</p>
                <div className="product-boundary"><span>Design boundary</span><p>{boundaries[product.name]}</p></div>
                <p className="owned-product-detail">{product.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell product-market-layout">
            <SectionHeading eyebrow="Company structure" title="Separate markets. Shared standards." body="FaultNav serves automotive technicians. ControlTrail serves contractors in the Defense Industrial Base. Their audiences do not overlap, so each product gets its own language while Sheridan Labs remains the company behind both." />
            <div className="product-market-list">
              {products.map((product) => (
                <article key={product.name}><span>{product.domain}</span><h3>{product.name}</h3><p>{product.detail}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="Shared engineering discipline" title="The same constraints follow both products" align="center" />
          <div className="three-up">
            {principles.slice(0, 3).map((principle) => (
              <article className="mini-feature" key={principle.index}><TechIcon symbol={principle.index} /><h3>{principle.title}</h3><p>{principle.body}</p></article>
            ))}
          </div>
          <div className="section-action section-action-center"><Link className="button button-primary" href="/approach">Read how we build</Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
