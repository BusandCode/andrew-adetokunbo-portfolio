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
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-line sm:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title + job.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-primary bg-white sm:block" />

                <div className="flex flex-col gap-1 border-b border-line pb-8 sm:border-b-0 sm:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-[17px] font-bold text-ink">
                    {job.title} <span className="font-semibold text-primary">— {job.company}</span>
                  </h3>
                  <span className="whitespace-nowrap text-[12.5px] font-bold uppercase tracking-wide text-ink-faint">
                    {job.dates}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5 sm:pb-8">
                  {job.points.map((point) => (
                    <li key={point} className="text-[14px] leading-relaxed text-ink-soft">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}