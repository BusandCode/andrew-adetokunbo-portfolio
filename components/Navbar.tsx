"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-[15px] font-extrabold tracking-tight text-ink">
          Andrew<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-ink/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <Button size="sm" onClick={() => (window.location.href = "#contact")}>
          Contact
        </Button>
      </div>
    </nav>
  );
}
