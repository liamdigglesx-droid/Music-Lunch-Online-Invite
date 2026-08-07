import { Music } from "lucide-react";

const navLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { name: "Instagram", emoji: "📸", href: "#" },
  { name: "Facebook", emoji: "👍", href: "#" },
  { name: "YouTube", emoji: "▶️", href: "#" },
  { name: "Spotify", emoji: "🟢", href: "#" },
  { name: "Apple Music", emoji: "🍎", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(212,175,55,0.1)", background: "rgba(0,0,0,0.5)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #06402B, #341539)" }}
            >
              <Music className="w-5 h-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div>
              <p
                className="text-white font-bold text-sm tracking-widest"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                NO DEMAND
              </p>
              <p className="text-white/40 text-[10px] tracking-widest" style={{ fontFamily: "Lato, sans-serif" }}>
                by Inyeneobong Nsubong
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 justify-center" role="list">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-yellow-400 transition-colors text-xs tracking-widest"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:scale-110 transition-transform"
              >
                {s.emoji}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-white/30 text-xs text-center"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Inyeneobong Nsubong. All rights reserved.
            <br />
            <span className="text-white/20">NO DEMAND – Official Single Launch 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
