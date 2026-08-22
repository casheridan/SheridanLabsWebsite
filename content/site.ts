export const company = {
  name: "Sheridan Labs",
  domain: "sheridan-labs.com",
  email: "mark@sheridan-labs.com",
  location: "Kansas City, Missouri",
  founded: "2026",
} as const;

export const hero = {
  eyebrow: "Software company · Kansas City, Missouri",
  headline: "Software for work where a wrong answer is expensive.",
  standfirst:
    "We build tools for people doing exacting technical work—the kind of work where a confident guess costs more than no answer at all.",
} as const;

export const products = [
  {
    index: "01",
    name: "FaultNav",
    domain: "Automotive service",
    summary:
      "Guided diagnostics for technicians. It walks a tech through the manufacturer’s own diagnostic procedure, step by step, hands-free—and never tells them what the fault is. The tests do that.",
    detail:
      "Built voice-first, so a technician can work a procedure with both hands in the engine bay.",
  },
  {
    index: "02",
    name: "ControlTrail",
    domain: "Defense contracting",
    summary:
      "CMMC readiness for contractors in the defense industrial base. It tracks evidence against all 110 NIST SP 800-171 controls, so a contractor knows exactly where they stand before an assessor asks.",
    detail:
      "The operational system of record underneath a customer’s SSP—not a certifying body.",
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "We don’t let software guess.",
    body:
      "Our AI decides what to look at next. It never decides what the answer is. When FaultNav explains a test result, those are the manufacturer’s words—quoted exactly and carrying their citation—not a model’s paraphrase.",
  },
  {
    index: "02",
    title: "We’d rather be unhelpful than wrong.",
    body:
      "When our software can’t be certain, it says so and hands you the source it was working from. It never fills the gap with something plausible.",
  },
  {
    index: "03",
    title: "Important rules are enforced by the build.",
    body:
      "ControlTrail isolates each customer’s data in three independent layers. FaultNav’s tests fail the build if the AI is ever handed content it is not permitted to see.",
  },
  {
    index: "04",
    title: "Every significant decision is written down.",
    body:
      "Both products carry a numbered record of architectural decisions and the reasoning behind them—written when the decision was made, not reconstructed later.",
  },
] as const;

export const founders = [
  {
    name: "Mark Sheridan",
    role: "Co-founder · AI and Software Development",
    bio:
      "Mark brings more than two decades of production software experience across identity and access management, multi-tenant SaaS, platform engineering, and AI systems in regulated environments. At Sheridan Labs, he works across the business and technology, with an emphasis on AI, software architecture, and building the software behind our products.",
    photo: "/team/mark-sheridan.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/mark-sheridan-86879b4a",
      github: "https://github.com/marksheridan72",
    },
  },
  {
    name: "Christian Sheridan",
    role: "Co-founder · Product, Infrastructure, and Devices",
    bio:
      "Christian is an industrial automation programmer focused on robotics, smart manufacturing, and practical software systems that connect directly to the production floor. He works across product, technology, and business, with an emphasis on physical devices, infrastructure, UI/UX, and how the products come together.",
    photo: "/team/christian-sheridan.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/christian-sheridan",
      github: "https://github.com/Sevarc",
    },
  },
] as const;

export const about = {
  note:
    "Sheridan Labs is two people—a father and a son—building in Kansas City.",
  identity:
    "We are a software product company. We build and own our products; selective custom development is a secondary line of business, not our primary identity.",
} as const;

export const contact = {
  headline: "Tell us what you’re working on.",
  body:
    "Questions about either product, a partnership, or a build of your own—this reaches both of us.",
  customNote:
    "We also take on custom work selectively, where the problem is hard and correctness matters.",
} as const;
