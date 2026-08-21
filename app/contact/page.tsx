import type { Metadata } from "next";
import { Footer, Header, PageHero, SectionHeading, TechIcon } from "../components";

export const metadata: Metadata = {
  title: "Contact Sheridan Labs",
  description: "Talk with Sheridan Labs about industrial AI, edge devices, predictive maintenance, or custom software.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <PageHero
          eyebrow="Contact / Engineering intake"
          title="Start with the operating problem."
          body="Tell us where uptime, quality, safety, or latency is limiting performance. Our engineering team will help define a practical path forward."
        >
          <div className="contact-hero-diagram">
            <div><span>01</span><strong>Signal</strong></div><i />
            <div><span>02</span><strong>Model</strong></div><i />
            <div><span>03</span><strong>Action</strong></div>
          </div>
        </PageHero>

        <section className="section shell contact-grid">
          <div className="contact-intro">
            <SectionHeading eyebrow="Project inquiry" title="Speak with an engineer" body="Share the essential context. We use it to connect you with the right technical lead." />
            <div className="contact-detail"><TechIcon symbol="@" /><div><span>Email</span><a href="mailto:hello@sheridanlabs.ai">hello@sheridanlabs.ai</a></div></div>
            <div className="contact-detail"><TechIcon symbol="⌖" /><div><span>Operations</span><p>United States / Global programs</p></div></div>
            <div className="contact-detail"><TechIcon symbol="◷" /><div><span>Initial response</span><p>Within two business days</p></div></div>
          </div>

          <form className="contact-form" action="mailto:hello@sheridanlabs.ai" method="post" encType="text/plain">
            <div className="form-row">
              <label>First name<input name="First name" autoComplete="given-name" required /></label>
              <label>Last name<input name="Last name" autoComplete="family-name" required /></label>
            </div>
            <label>Work email<input type="email" name="Email" autoComplete="email" required /></label>
            <label>Company<input name="Company" autoComplete="organization" required /></label>
            <label>Area of interest
              <select name="Area of interest" defaultValue="">
                <option value="" disabled>Select a capability</option>
                <option>Industrial AI implementation</option>
                <option>Predictive maintenance</option>
                <option>Edge AI hardware</option>
                <option>Automotive software</option>
                <option>Machine vision</option>
              </select>
            </label>
            <label>What operating problem are you solving?<textarea name="Project context" rows={5} required /></label>
            <button className="button button-primary" type="submit">Send project brief</button>
            <p className="form-note">Submitting opens your email client with this project brief.</p>
          </form>
        </section>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="How it begins" title="A focused first conversation" align="center" />
            <div className="three-up contact-steps">
              <article><span>01</span><h3>Context</h3><p>We understand the asset, environment, constraint, and desired outcome.</p></article>
              <article><span>02</span><h3>Feasibility</h3><p>We assess data, integration paths, risks, and where a pilot can prove value.</p></article>
              <article><span>03</span><h3>Plan</h3><p>You receive a clear technical next step, with success criteria and ownership.</p></article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
