"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line pt-40 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-3xl"
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/5 px-3 py-1.5 text-[12.5px] font-semibold text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Available for select engagements
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-[44px] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[64px]"
        >
          Full-stack developer, <span className="text-primary">building products</span> end to end.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft"
        >
          I design and ship production web and mobile products — from Figma to database schema —
          for fintech, healthcare, and e-commerce platforms based out of Lagos, Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
            View Work <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => (window.location.href = "mailto:adetokunboandrew2@gmail.com")}
          >
            Email Me
          </Button>
          <span className="flex items-center gap-1.5 text-sm font-medium text-ink-faint">
            <MapPin className="h-4 w-4" /> Lagos, Nigeria
          </span>
        </motion.div>
      </div>
    </section>
  );
}
