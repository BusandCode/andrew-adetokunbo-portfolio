"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Own the whole stack", body: "Comfortable owning a feature from Figma through the database schema, not just the UI layer." },
  { title: "Ship production, not demos", body: "Every project listed is live, used by real people — not a tutorial clone." },
  { title: "Move fast with AI tools", body: "Uses Claude Code and ChatGPT daily as active development tools for coding, debugging, and review." },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24">
      <div className="container grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">About</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink sm:text-[38px]">
            A developer who ships the whole product, solo when needed.
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">
            I'm Andrew Adetokunbo, a full-stack developer based in Lagos, Nigeria. My work spans
            React, Next.js, and React Native on the frontend, and Node.js, Express, and PostgreSQL
            on the backend — with basic Python scripting on the side. I've been sole full-stack owner
            on a fintech product, built healthcare and e-commerce platforms, and taught frontend
            development to students along the way.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-md border border-line p-6"
            >
              <div className="mb-3 text-[13px] font-extrabold text-primary">0{i + 1}</div>
              <h3 className="mb-2 text-[16px] font-bold text-ink">{v.title}</h3>
              <p className="text-[14px] leading-relaxed text-ink-soft">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
