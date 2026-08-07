import FadeIn from "./FadeIn";
import { Heart, Users, Briefcase, Music, Share2 } from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "Donate",
    desc: "Your generous donation supports the production, promotion, and distribution of this anointed music ministry.",
    action: "Give Now",
    detail: [
      { label: "Bank Name", value: "UBA" },
      { label: "Account Name", value: "Inyeneobong Nsubong" },
      { label: "Account Number", value: "2089116861" },
    ],
  },
  {
    icon: Users,
    title: "Become a Ministry Partner",
    desc: "Partner with us in a consistent, prayerful, and financial commitment to sustain the vision of this ministry.",
    action: "Partner With Us",
    detail: [],
  },
  {
    icon: Briefcase,
    title: "Sponsor Future Projects",
    desc: "Invest in future gospel music projects and become part of a legacy that touches nations.",
    action: "Become a Sponsor",
    detail: [],
  },
  {
    icon: Music,
    title: "Support Music Ministry",
    desc: "Help fund recording sessions, music videos, live events, and ministerial outreaches.",
    action: "Support",
    detail: [],
  },
  {
    icon: Share2,
    title: "Share This Release",
    desc: "The simplest act of sharing can carry this message of worship to someone who desperately needs it.",
    action: "Share Now",
    detail: [],
  },
];

export default function SupportSection() {
  return (
    <section
      id="support"
      className="py-24 sm:py-32 relative"
      aria-labelledby="support-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(52,21,57,0.3) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Partner With Us
          </p>
          <h2
            id="support-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Support the Ministry
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={0.1 * i}>
              <article
                className="card-hover glass-dark rounded-2xl p-6 h-full flex flex-col"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,64,43,0.8), rgba(52,21,57,0.8))",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <c.icon className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1" style={{ fontFamily: "Lato, sans-serif" }}>
                  {c.desc}
                </p>

                {/* Bank details for donate card */}
                {c.detail.length > 0 && (
                  <div className="glass rounded-xl p-3 mb-4 space-y-1.5">
                    {c.detail.map((d) => (
                      <div key={d.label} className="flex justify-between items-center">
                        <span className="text-white/40 text-xs" style={{ fontFamily: "Lato, sans-serif" }}>{d.label}</span>
                        <span className="text-white text-xs font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>{d.value}</span>
                      </div>
                    ))}
                    <div className="pt-2 mt-2 border-t border-white/10 text-center">
                      <span className="text-white/40 text-xs">QR Code Placeholder</span>
                    </div>
                  </div>
                )}

                <button
                  className="btn-ripple mt-auto w-full py-2.5 rounded-full text-sm font-semibold text-black tracking-wider"
                  style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}
                  type="button"
                >
                  {c.action}
                </button>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Online donation link placeholder */}
        <FadeIn delay={0.5} className="mt-10 text-center">
          <p className="text-white/50 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
            Online donation link:{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              Placeholder – configure donation URL
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
