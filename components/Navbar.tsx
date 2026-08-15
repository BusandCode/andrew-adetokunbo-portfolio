"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { a } from "framer-motion/client";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route/hash change or resize back to desktop
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || menuOpen ? "bg-white/90 backdrop-blur border-b border-line" : "bg-transparent"
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

        <div className="hidden md:block">
          <Button size="sm" onClick={() => (window.location.href = "#contact")}>
            Contact
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center text-ink md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-white/95 backdrop-blur md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2.5 text-[15px] font-semibold text-ink/80 transition-colors hover:bg-surface hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "#contact";
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}