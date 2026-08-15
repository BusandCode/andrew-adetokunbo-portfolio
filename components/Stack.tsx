"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="border-b border-line py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">Stack</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink sm:text-[38px]">
            What I build with.
          </h2>
        </motion.div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h4 className="mb-4 border-b border-line pb-3 text-[12.5px] font-extrabold uppercase tracking-wide text-ink-faint">
                {group.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line px-3 py-1.5 text-[13px] font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
