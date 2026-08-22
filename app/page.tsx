import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, ReferenceImage, SectionHeading, TechIcon } from "./components";
import { about, contact, hero, principles, products } from "../content/site";

export const metadata: Metadata = {
  title: "Software for Exacting Technical Work",
  description: hero.standfirst,
};

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main>
        <section className="home-hero">
          <div className="shell home-hero-grid">
            <div className="hero-copy">
              <div className="status-chip"><span /> Founded in Kansas City · 2026</div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.headline}</h1>
              <p className="hero-lede">{hero.standfirst}</p>
              <div className="button-row">
                <Link className="button button-primary" href="/products">See our products</Link>
                <Link className="button button-secondary" href="/contact">Contact us</Link>
              </div>
            </div>
            <div className="hero-visual-wrap">
              <ReferenceImage className="crop-home-hero" label="Automated industrial robotics laboratory" />
              <div className="visual-hud visual-hud-top">Sheridan Labs / Kansas City</div>
              <div className="visual-hud visual-hud-bottom">
                <span>Software product company</span><strong>2</strong><small>owned products</small>
              </div>
              <div className="corner-mark corner-mark-a" />
              <div className="corner-mark corner-mark-b" />
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="innovation-grid">
            <div className="innovation-copy">
              <SectionHeading eyebrow="Who we are" title="A software product company." body={about.identity} />
              <p>{about.note}</p>
              <Link className="text-link" href="/about">Meet the founders <span>→</span></Link>
            </div>
            <div className="metric-grid">
              {products.map((product) => (
                <article className="metric-card" key={product.name}>
                  <strong>{product.name}</strong><span>{product.domain}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="Products" title="What we’re building." body="Two products for exacting technical work in two very different markets." />
            <div className="expertise-grid">
              {products.map((product, index) => (
                <article className={`feature-card${index === 0 ? " feature-card-wide" : ""}`} key={product.name}>
                  <div className="card-topline"><TechIcon symbol={product.index} /><span>{product.domain}</span></div>
                  <div><h3>{product.name}</h3><p>{product.summary}</p></div>
                  <p>{product.detail}</p>
                </article>
              ))}
            </div>
            <div className="section-action"><Link className="text-link" href="/products">Read the product details <span>→</span></Link></div>
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-grid">
            <div><p className="eyebrow eyebrow-light">How we build</p><h2>{principles[1].title}</h2><p className="cta-copy">{principles[1].body}</p></div>
            <Link className="button button-light" href="/approach">Why correctness matters</Link>
          </div>
        </section>

        <section className="section shell centered-cta">
          <SectionHeading eyebrow="Contact" title={contact.headline} body={contact.body} align="center" />
          <Link className="button button-primary" href="/contact">Get in touch</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
