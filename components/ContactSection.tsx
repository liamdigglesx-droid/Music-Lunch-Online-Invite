import FadeIn from "./FadeIn";
import { Mail, Phone, User } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaSpotify, FaApple, FaMusic } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiAudiomack } from "react-icons/si";
import type { IconType } from "react-icons";

const contacts = [
  { icon: Mail, label: "Booking Email", value: "inyeneobongjoshua@gmail.com", href: "mailto:inyeneobongjoshua@gmail.com" },
  { icon: Mail, label: "Management Email", value: "inyeneobongjoshua@gmail.com", href: "mailto:inyeneobongjoshua@gmail.com" },
  { icon: Phone, label: "Phone Number", value: "+234 806 839 8878", href: "tel:+2348068398878" },
  { icon: User, label: "Contact Email", value: "inyeneobongjoshua@gmail.com", href: "mailto:inyeneobongjoshua@gmail.com" },
];

const socials: { name: string; icon: IconType; href: string; label: string }[] = [
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/princeinyeneobongnsubong?igsh=MTcxdnFtdHhieTY4dA==", label: "Follow on Instagram" },
  { name: "Facebook", icon: FaFacebookF, href: "#", label: "Follow on Facebook" },
  { name: "TikTok", icon: FaTiktok, href: "#", label: "Follow on TikTok" },
  { name: "YouTube", icon: FaYoutube, href: "#", label: "Subscribe on YouTube" },
  { name: "X", icon: FaXTwitter, href: "https://x.com/Engr_Richjtom", label: "Follow on X" },
  { name: "Spotify", icon: FaSpotify, href: "#", label: "Follow on Spotify" },
  { name: "Apple Music", icon: FaApple, href: "#", label: "Listen on Apple Music" },
  { name: "Boomplay", icon: FaMusic, href: "#", label: "Follow on Boomplay" },
  { name: "Audiomack", icon: SiAudiomack, href: "#", label: "Follow on Audiomack" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 70%, rgba(52,21,57,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Contact
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((c, i) => (
            <FadeIn key={c.label} delay={0.1 * i}>
              <a
                href={c.href}
                className="card-hover glass rounded-2xl p-5 flex items-start gap-4 group"
                style={{ border: "1px solid rgba(212,175,55,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}
                >
                  <c.icon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "Lato, sans-serif" }}>
                    {c.label}
                  </p>
                  <p className="text-white text-sm font-semibold group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "Lato, sans-serif" }}>
                    {c.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Social icons */}
        <FadeIn delay={0.4}>
          <div className="text-center">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
              Follow & Connect
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  className="card-hover glass rounded-xl p-3 flex flex-col items-center gap-1.5 w-16 group"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon className="w-6 h-6 text-white/70 group-hover:scale-110 group-hover:text-yellow-400 transition-all" />
                  <span className="text-white/50 text-[9px] group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "Lato, sans-serif" }}>
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
