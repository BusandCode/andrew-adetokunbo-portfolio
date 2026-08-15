"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/validations/contact";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[13px] font-bold uppercase tracking-widest text-primary">Contact</span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink sm:text-[38px]">
            Have something to build?
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Send a message and I'll get back to you directly — or reach out on GitHub or LinkedIn.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <Link href="mailto:adetokunboandrew2@gmail.com" className="flex items-center gap-3 text-[14.5px] font-semibold text-ink hover:text-primary">
              <Mail className="h-4 w-4" /> adetokunboandrew2@gmail.com
            </Link>
            <Link
              href="https://github.com/BusandCode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[14.5px] font-semibold text-ink hover:text-primary"
            >
              <Github className="h-4 w-4" /> github.com/BusandCode
            </Link>
            <Link
              href="https://www.linkedin.com/in/andrew-adetokunbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[14.5px] font-semibold text-ink hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/andrew-adetokunbo
            </Link>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <Input placeholder="Full name" {...register("name")} />
            {errors.name && <p className="mt-1.5 text-[12.5px] font-medium text-primary">{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder="Email address" type="email" {...register("email")} />
            {errors.email && <p className="mt-1.5 text-[12.5px] font-medium text-primary">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea placeholder="Tell me about the project" {...register("message")} />
            {errors.message && <p className="mt-1.5 text-[12.5px] font-medium text-primary">{errors.message.message}</p>}
          </div>

          <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>

          {status === "sent" && (
            <p className="flex items-center gap-2 text-[13.5px] font-semibold text-primary">
              <CheckCircle2 className="h-4 w-4" /> Message sent — thanks for reaching out.
            </p>
          )}
          {status === "error" && (
            <p className="text-[13.5px] font-semibold text-primary">
              Something went wrong. Email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}