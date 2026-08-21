import Link from "next/link";

export type NavKey = "home" | "products" | "services" | "about" | "contact";

const navItems: Array<[NavKey, string, string]> = [
  ["home", "Home", "/"],
  ["products", "Products", "/products"],
  ["services", "Services", "/services"],
  ["about", "About", "/about"],
  ["contact", "Contact", "/contact"],
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand-inverse" : ""}`} href="/" aria-label="Sheridan Labs home">
      <span className="brand-logo" aria-hidden="true" />
      <span className="sr-only">Sheridan Labs</span>
    </Link>
  );
}

export function Header({ active }: { active: NavKey }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([key, label, href]) => (
            <Link className={active === key ? "active" : ""} href={href} key={key}>{label}</Link>
          ))}
        </nav>
        <Link className="button button-primary header-cta" href="/contact">Get started</Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span />Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([key, label, href]) => (
              <Link className={active === key ? "active" : ""} href={href} key={key}>{label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand inverse />
          <p>Industrial precision through AI.</p>
          <span>© 2026 Sheridan Labs. All rights reserved.</span>
        </div>
        <div className="footer-column">
          <strong>Explore</strong>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">Company</Link>
        </div>
        <div className="footer-column">
          <strong>Company</strong>
          <Link href="/about">Leadership</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:hello@sheridanlabs.ai">Support</a>
        </div>
        <div className="footer-column">
          <strong>Legal</strong>
          <a href="#privacy">Privacy policy</a>
          <a href="#terms">Terms of service</a>
          <a href="#cookies">Cookie policy</a>
        </div>
      </div>
      <div className="shell footer-base"><span>USA / Global operations</span><span>System status: operational</span></div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "left" }: {
  eyebrow: string; title: string; body?: string; align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function ReferenceImage({ className, label }: { className: string; label: string }) {
  return <div className={`reference-image ${className}`} role="img" aria-label={label} />;
}

export function TechIcon({ symbol }: { symbol: string }) {
  return <span className="tech-icon" aria-hidden="true">{symbol}</span>;
}

export function PageHero({ eyebrow, title, body, children, dark = false }: {
  eyebrow: string; title: string; body: string; children?: React.ReactNode; dark?: boolean;
}) {
  return (
    <section className={`page-hero${dark ? " page-hero-dark" : ""}`}>
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        {children && <div className="page-hero-art">{children}</div>}
      </div>
    </section>
  );
}

export function NumberTag({ children }: { children: React.ReactNode }) {
  return <span className="number-tag">{children}</span>;
}
