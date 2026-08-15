export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface Job {
  title: string;
  company: string;
  dates: string;
  points: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// Static fallback content, sourced from Andrew's résumé.
// Swap for a Sanity query (see sanity/lib/client.ts) once the
// `project` documents are populated in the Sanity Studio.
export const projects: Project[] = [
  {
    slug: "clune",
    name: "Clune",
    tagline: "Fintech & Vehicle Commerce",
    description:
      "Full-stack platform for tricycle and e-bike purchases in Nigeria — buyer mobile app, admin dashboard, and backend API, built and maintained solo. Includes installment financing (Flex Pay), KYC verification, and real-time order tracking.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Paystack"],
  },
  {
    slug: "healthify",
    name: "Healthify",
    tagline: "Healthcare Appointments",
    description:
      "A platform for discovering hospitals and booking appointments online, with hospital search, appointment scheduling, and animated UI transitions for a smoother booking flow.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    link: "https://healthify-umber.vercel.app/",
  },
  {
    slug: "hurkify",
    name: "Hurkify Technology Limited",
    tagline: "Corporate Website",
    description:
      "One-page corporate site with Sanity CMS-driven content, Framer Motion animation, and a validated contact form wired to Resend for email delivery.",
    stack: ["Next.js", "Sanity", "Framer Motion"],
    link: "https://hurkify-technology-limited.vercel.app/",
  },
 {
    slug: "edamaa",
    name: "Edamaa",
    tagline: "Educational Tutoring Platform",
    description:
      "Interactive learning platform combining educational videos, topic-based discussions, and live Q&A with verified tutors — students can ask questions at specific points in a video and get answers directly. Built the responsive, user-friendly frontend, translating product requirements and designs into accessible, usable web experiences.",
    stack: ["React", "TypeScript"],
    link: "https://edamaa.vercel.app/",
  },
];

export const jobs: Job[] = [
  {
    title: "Mobile Application Developer",
    company: "Aurelius Ltd (Silver Group Brand)",
    dates: "May 2026 – Aug 2026",
    points: [
      "Sole full-stack developer on Clune — React Native/Expo app, React/TypeScript admin panel, Node.js/Express backend.",
      "Designed and built the Flex Pay installment financing system end-to-end, including payment-status lifecycle and admin approval workflows.",
      "Integrated Paystack, wallet payments, KYC (Dojah), and push notifications; deployed on Render with EAS-managed builds.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Hurkify Technology Limited",
    dates: "Dec 2025 – Present",
    points: [
      "Translate Figma designs into fully responsive web and mobile interfaces; build reusable UI component systems.",
      "Contribute to Edamaa, a React/TypeScript tutor-facing tutoring platform — UI, animation, and responsiveness.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Crediometer",
    dates: "Apr 2026 – Present",
    points: [
      "Build responsive web interfaces and develop mobile features in Kotlin, including NFC payment and voice payment.",
      "Assist in preparing Software Requirement Specifications (SRS) and technical documentation.",
    ],
  },
  {
    title: "Frontend Developer Instructor",
    company: "CodingKids Academy",
    dates: "Jan 2025 – Mar 2026",
    points: [
      "Taught HTML, CSS, JavaScript, and React to primary and secondary school students through live coding sessions.",
      "Designed coding challenges and mentored students through code review and feedback.",
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "Python (basic)"] },
  { label: "Database", items: ["PostgreSQL", "Prisma", "Supabase"] },
  { label: "Mobile", items: ["React Native (Expo)", "Kotlin"] },
  { label: "Integrations", items: ["Paystack", "KYC (Dojah)", "Firebase Cloud Messaging"] },
  { label: "Tools & Practice", items: ["Git/GitHub", "Figma-to-code", "Claude Code", "ChatGPT"] },
];
