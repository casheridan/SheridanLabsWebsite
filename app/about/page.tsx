import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero, ReferenceImage, SectionHeading, TechIcon } from "../components";

export const metadata: Metadata = {
  title: "About Sheridan Labs",
  description: "Meet the engineering company building reliable intelligence for high-stakes industrial systems.",
};

const leaders = [
  {
    name: "Christian Sheridan",
    title: "Founder & Automation Engineer",
    bio: "Industrial automation programmer focused on robotics, smart manufacturing, and practical software systems that connect directly to the production floor.",
    image: "/team/christian-sheridan.jpg",
    imageClass: "leader-photo-christian",
    linkedin: "https://www.linkedin.com/in/christian-sheridan",
  },
  {
    name: "Mark Sheridan",
    title: "Technology & Platform Advisor",
    bio: "Technology leader with more than 25 years of experience in platform development, modernization, client delivery, and dependable software operations.",
    image: "/team/mark-sheridan.jpg",
    imageClass: "leader-photo-mark",
    linkedin: "https://www.linkedin.com/in/mark-sheridan-86879b4a",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main>
        <PageHero
          eyebrow="Company / Engineering heritage"
          title="Industrial precision through AI."
          body="Sheridan Labs bridges heavy engineering heritage and advanced artificial intelligence, building robust systems for environments where reliability is the requirement—not the aspiration."
        >
          <div className="about-hero-image">
            <ReferenceImage className="crop-about-hero" label="AI-powered industrial engineering facility" />
            <div className="about-hero-overlay"><span>Plant intelligence</span><strong>Operational</strong><small><i />Live</small></div>
          </div>
        </PageHero>

        <section className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="Our foundation" title="Engineering rigor, expanded" body="Rooted in systematic precision and an uncompromising commitment to reliability." />
            <div className="foundation-grid">
              <article className="foundation-story">
                <p className="eyebrow">History / Built from the floor up</p>
                <h2>Decades of engineering excellence</h2>
                <p>Sheridan Labs began with one question: could industrial failure be understood early enough to prevent it? That founding discipline now informs every device, model, and deployment we build.</p>
                <ReferenceImage className="crop-about-history" label="Sheridan Labs engineering history and modern data systems" />
              </article>
              <article className="foundation-vision">
                <p className="eyebrow">Vision / 2035</p>
                <h2>Autonomous reliability</h2>
                <p>We envision industrial systems that continuously understand their own condition, adapt safely, and remove preventable downtime from critical operations.</p>
                <div className="vision-signal"><TechIcon symbol="◎" /><span>AI integration</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="Leadership" title="Built by engineers who know the work" body="Industrial automation experience and long-term platform leadership, united around practical, dependable systems." align="center" />
          <div className="leadership-grid">
            {leaders.map((leader) => (
              <article className="leader-card" key={leader.name}>
                <img className={`leader-photo ${leader.imageClass}`} src={leader.image} alt={`${leader.name}, ${leader.title}`} width="900" height="1000" loading="lazy" />
                <div className="leader-card-copy">
                  <p className="eyebrow">Leadership / Sheridan Labs</p>
                  <h3>{leader.name}</h3>
                  <strong>{leader.title}</strong>
                  <p>{leader.bio}</p>
                  <a className="text-link" href={leader.linkedin} target="_blank" rel="noreferrer">LinkedIn profile <span>↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="shell values-grid">
            <div><p className="eyebrow eyebrow-light">What guides us</p><h2>Precision is a way of working.</h2></div>
            <div className="value-list">
              <article><strong>01</strong><div><h3>Evidence over assumption</h3><p>We measure, validate, and communicate what the system actually knows.</p></div></article>
              <article><strong>02</strong><div><h3>Reliability by design</h3><p>Safety and resilience are architectural decisions from day one.</p></div></article>
              <article><strong>03</strong><div><h3>Partnership on the floor</h3><p>We design with the operators and engineers who keep production moving.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section shell centered-cta">
          <SectionHeading eyebrow="Work with us" title="Bring intelligence closer to the work" body="Explore a partnership with an engineering team fluent in both physical systems and applied AI." align="center" />
          <Link className="button button-primary" href="/contact">Meet with our team</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
