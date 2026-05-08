"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/cv-data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold gradient-text tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Ahmed Nobi homepage"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-text-secondary font-light">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-light/50 transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-surface-light/50 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-5 h-5 text-text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-6 rounded-2xl p-4 animate-fade-in">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-light/50 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
