import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero, ReferenceImage, SectionHeading, TechIcon } from "../components";
import { about, company, contact, founders, products } from "../../content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Sheridan Labs is a father-and-son software product company founded in Kansas City by Mark and Christian Sheridan.",
};

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main>
        <PageHero eyebrow="Company / Kansas City, Missouri" title="Two founders. One standard for correctness." body={`${about.note} ${about.identity}`}>
          <div className="about-hero-image">
            <ReferenceImage className="crop-about-hero" label="Industrial engineering and software environment" />
            <div className="about-hero-overlay"><span>Sheridan Labs</span><strong>{company.location}</strong><small>Founded {company.founded}</small></div>
          </div>
        </PageHero>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="Our foundation" title="A product company, not an agency" body="We build and own our software products. Selective custom development remains available, but it is not the company’s primary identity." />
            <div className="foundation-grid">
              <article className="foundation-story">
                <p className="eyebrow">What we make</p>
                <h2>Products for exacting technical work</h2>
                <p>FaultNav and ControlTrail serve unrelated markets, but both are designed for work where a plausible answer is not good enough.</p>
                <div className="about-product-list">
                  {products.map((product) => <div key={product.name}><span>{product.domain}</span><strong>{product.name}</strong></div>)}
                </div>
              </article>
              <article className="foundation-vision">
                <p className="eyebrow">Custom development / Secondary</p>
                <h2>Selective by design</h2>
                <p>{contact.customNote}</p>
                <div className="vision-signal"><TechIcon symbol="◇" /><span>Correctness matters</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="Founders" title="Father, son, co-founders" body="Both founders work across the business and the technology. Their roles overlap, with each naturally spending more time in different parts of the work." align="center" />
          <div className="leadership-grid">
            {founders.map((founder) => (
              <article className="leader-card" key={founder.name}>
                <img className={`leader-photo ${founder.name.startsWith("Christian") ? "leader-photo-christian" : "leader-photo-mark"}`} src={founder.photo} alt={`${founder.name}, ${founder.role}`} width="900" height="1000" loading="lazy" />
                <div className="leader-card-copy">
                  <p className="eyebrow">Co-founder</p>
                  <h3>{founder.name}</h3>
                  <strong>{founder.role}</strong>
                  <p>{founder.bio}</p>
                  <div className="founder-links">
                    <a className="text-link" href={founder.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
                    <a className="text-link" href={founder.links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="shell values-grid">
            <div><p className="eyebrow eyebrow-light">How we work</p><h2>Shared work. Different areas of emphasis.</h2></div>
            <div className="value-list">
              <article><strong>Mark</strong><div><h3>AI and software development</h3><p>Mark works across the business and technology. His emphasis is AI, software architecture, platform engineering, and building the systems behind our products.</p></div></article>
              <article><strong>Christian</strong><div><h3>Devices, infrastructure, and product experience</h3><p>Christian is an industrial automation programmer focused on robotics, smart manufacturing, and practical software systems that connect directly to the production floor. His emphasis at Sheridan Labs is physical devices, infrastructure, UI/UX, and product integration.</p></div></article>
              <article><strong>Together</strong><div><h3>One team, overlapping roles</h3><p>The split is not rigid. Both founders contribute to the products, software, technical direction, and business.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section shell centered-cta">
          <SectionHeading eyebrow="Contact" title={contact.headline} body={contact.body} align="center" />
          <Link className="button button-primary" href="/contact">Contact both founders</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
