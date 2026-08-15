"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Build with purpose",
    body: "Good software should do more than look good — it should be intuitive, performant, scalable, and genuinely useful.",
  },
  {
    title: "AI-accelerated, not AI-replaced",
    body: "I use tools like ChatGPT and Claude to research, prototype, debug, and move faster — while staying the one who owns and understands the system.",
  },
  {
    title: "Always building, always learning",
    body: "Constantly experimenting with new technologies and better ways to turn ideas into real products, alongside founders, designers, and other developers.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">Who am I?</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink sm:text-[38px]">
            Andrew Adetokunbo — Software Engineer, and the person behind BusandCode.
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">
            I focus on building modern digital products that solve real problems. I specialize in
            full-stack and mobile app development — React, Next.js, TypeScript, React Native,
            Node.js, PostgreSQL, Supabase, and Tailwind CSS — turning ideas, designs, and business
            requirements into clean, responsive, scalable, and reliable products.
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
            Through BusandCode, I build digital solutions for businesses, startups, and individuals —
            web and mobile applications, e-commerce platforms, fintech solutions, healthcare
            products, and business-focused systems.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-md border border-line p-6"
            >
              <div className="mb-3 text-[13px] font-extrabold text-primary">0{i + 1}</div>
              <h3 className="mb-2 text-[16px] font-bold text-ink">{p.title}</h3>
              <p className="text-[14px] leading-relaxed text-ink-soft">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 rounded-md border border-primary/20 bg-primary/5 p-7 sm:p-8"
        >
          <p className="max-w-2xl text-[15.5px] font-medium leading-relaxed text-ink">
            If you&apos;re a founder or startup looking to build a new product, improve an existing
            one, or turn an idea into a working solution — I&apos;d be glad to connect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}