"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="border-b border-line bg-surface py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">Selected Work</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink sm:text-[38px]">
            Four products, built end to end.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="flex h-full flex-col p-7 transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(208,2,27,0.25)]">
                <span className="mb-3 text-[12px] font-bold uppercase tracking-wide text-primary">{p.tagline}</span>
                <h3 className="mb-3 text-[21px] font-bold text-ink">{p.name}</h3>
                <p className="mb-6 flex-grow text-[14.5px] leading-relaxed text-ink-soft">{p.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 border-b border-ink/15 pb-0.5 text-[13px] font-bold text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    Live site <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
