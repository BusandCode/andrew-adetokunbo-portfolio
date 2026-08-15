"use client";

import { motion } from "framer-motion";
import { jobs } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">Experience</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink sm:text-[38px]">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="divide-y divide-line border-t border-line">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title + job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid gap-2 py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                <h3 className="text-[17px] font-bold text-ink">
                  {job.title} <span className="font-semibold text-primary">— {job.company}</span>
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point) => (
                    <li key={point} className="text-[14px] leading-relaxed text-ink-soft">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="whitespace-nowrap text-[12.5px] font-bold uppercase tracking-wide text-ink-faint">
                {job.dates}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
