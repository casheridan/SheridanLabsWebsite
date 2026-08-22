import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading, TechIcon } from "../components";
import { company, contact, products } from "../../content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about FaultNav, ControlTrail, a partnership, or selective custom development—contact both Sheridan Labs founders.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <PageHero eyebrow="Contact / Both founders" title={contact.headline} body={contact.body}>
          <div className="contact-hero-diagram" aria-label="Ways to contact Sheridan Labs">
            <div><span>Product</span><strong>FaultNav</strong></div><i />
            <div><span>Product</span><strong>ControlTrail</strong></div><i />
            <div><span>Selective</span><strong>Custom work</strong></div>
          </div>
        </PageHero>

        <section className="section shell contact-grid">
          <div className="contact-intro">
            <SectionHeading eyebrow="Direct contact" title="This reaches both of us" body="Ask about either product, a partnership, or a difficult build where correctness matters." />
            <div className="contact-detail"><TechIcon symbol="@" /><div><span>Email</span><a href={`mailto:${company.email}`}>{company.email}</a></div></div>
            <div className="contact-detail"><TechIcon symbol="⌖" /><div><span>Location</span><p>{company.location}</p></div></div>
            <div className="contact-detail"><TechIcon symbol="◷" /><div><span>Reply</span><p>Usually within a day or two</p></div></div>
          </div>

          <form className="contact-form" action={`mailto:${company.email}`} method="post" encType="text/plain">
            <label>Name<input name="Name" autoComplete="name" required /></label>
            <label>Email<input type="email" name="Email" autoComplete="email" required /></label>
            <label>What is this about?
              <select name="Topic" defaultValue="">
                <option value="" disabled>Select a topic</option>
                {products.map((product) => <option key={product.name}>{product.name}</option>)}
                <option>Partnership</option>
                <option>Selective custom development</option>
                <option>Something else</option>
              </select>
            </label>
            <label>What’s on your mind?<textarea name="Message" rows={6} required /></label>
            <button className="button button-primary" type="submit">Open email draft</button>
            <p className="form-note">Submitting opens your email client with the details above. Nothing is stored by this website.</p>
          </form>
        </section>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="Reasons to write" title="Products, partnerships, and selective custom work" align="center" />
            <div className="three-up contact-steps">
              <article><span>Products</span><h3>FaultNav or ControlTrail</h3><p>Questions about either product reach the people building it.</p></article>
              <article><span>Partnerships</span><h3>Work with Sheridan Labs</h3><p>Tell us what you have in mind and where our products or experience may fit.</p></article>
              <article><span>Custom development</span><h3>Hard problems only</h3><p>{contact.customNote}</p></article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
