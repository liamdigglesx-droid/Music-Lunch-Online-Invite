"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "The Single", href: "#single" },
  { label: "Launch Event", href: "#event" },
  { label: "Support", href: "#support" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" aria-label="NO DEMAND – Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github.com/user-attachments/assets/564c9346-6e5a-4073-bcf3-1e142b271a62"
              alt="Logo"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span
              className="font-bold text-sm tracking-widest text-white group-hover:text-yellow-400 transition-colors"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              NO DEMAND
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm tracking-wider text-white/80 hover:text-yellow-400 transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden backdrop-blur-xl bg-black/80 border-t border-white/10"
        >
          <ul className="px-6 py-4 flex flex-col gap-4" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/90 hover:text-yellow-400 transition-colors text-sm tracking-wider block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
