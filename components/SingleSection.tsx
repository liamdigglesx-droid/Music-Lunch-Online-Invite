import FadeIn from "./FadeIn";
import { BookOpen, Mic2, Music2, Calendar } from "lucide-react";

const details = [
  { icon: Music2, label: "Song Title", value: "NO DEMAND" },
  { icon: Mic2, label: "Artist", value: "Inyeneobong Nsubong" },
  { icon: BookOpen, label: "Scriptural Inspiration", value: "Placeholder – e.g. Psalm 46:10" },
  { icon: Mic2, label: "Producer", value: "Placeholder – Producer Name" },
  { icon: Mic2, label: "Songwriter", value: "Inyeneobong Nsubong" },

  { icon: Calendar, label: "Release Date", value: "13th September 2026" },
];

export default function SingleSection() {
  return (
    <section
      id="single"
      className="py-24 sm:py-32 relative"
      aria-labelledby="single-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(52,21,57,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            New Release
          </p>
          <h2
            id="single-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The Single
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Artwork + story */}
          <div className="space-y-6">
            <FadeIn direction="left">
              {/* Artwork */}
              <div
                className="card-hover aspect-square rounded-3xl overflow-hidden glass-dark"
                style={{
                  border: "1px solid rgba(212,175,55,0.3)",
                  maxWidth: 380,
                  margin: "0 auto",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github.com/user-attachments/assets/bc40e062-6c96-4d43-8c8e-7cf2275d930f"
                  alt="NO DEMAND single artwork"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-yellow-400 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  Story Behind the Song
                </h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                  Placeholder – Share the divine inspiration, personal journey, or moment of revelation
                  that gave birth to &quot;NO DEMAND&quot;. This is the story that connects every listener to the
                  heart of this worship anthem.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Details cards */}
          <div className="space-y-4">
            <FadeIn direction="right">
              <div className="glass rounded-2xl p-6 mb-4">
                <h3 className="text-yellow-400 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  Message of the Song
                </h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                  Placeholder – Describe the spiritual message and the transformation this song carries.
                  What does God want every listener to receive when they hear &quot;NO DEMAND&quot;?
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {details.map((d, i) => (
                <FadeIn key={d.label} direction="right" delay={0.05 * i}>
                  <div
                    className="card-hover glass rounded-xl p-4"
                    style={{ border: "1px solid rgba(212,175,55,0.1)" }}
                  >
                    <d.icon className="w-5 h-5 text-yellow-400 mb-2" aria-hidden="true" />
                    <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "Lato, sans-serif" }}>
                      {d.label}
                    </p>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>
                      {d.value}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
