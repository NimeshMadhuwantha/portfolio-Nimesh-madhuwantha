"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { ActionButton } from "@/components/ui/ActionButton";

export function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= top - 160) {
          current = section.id;
        }
      });

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="text-2xl font-black italic tracking-tight">
          <span className="text-cyan-300">N</span>
          <span className="text-white">M.</span>
        </a>

        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.15em] md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeId}`;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <ActionButton href="#contact" className="hidden md:inline-flex">
          Contact Me
        </ActionButton>
      </div>
    </nav>
  );
}
