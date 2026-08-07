"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { X } from "lucide-react";

const items = [
  { id: 1, label: "Artist Portrait", emoji: "👤", desc: "Official portrait" },
  { id: 2, label: "Worship Session", emoji: "🙌", desc: "Live worship moment" },
  { id: 3, label: "Live Ministry", emoji: "🎤", desc: "Ministry in action" },
  { id: 4, label: "Behind the Scenes", emoji: "🎬", desc: "Recording session" },
  { id: 5, label: "Single Artwork", emoji: "🎼", desc: "NO DEMAND artwork" },
  { id: 6, label: "Artist Portrait 2", emoji: "✨", desc: "Studio portrait" },
];

export default function GallerySection() {
  const [active, setActive] = useState<(typeof items)[0] | null>(null);

  return (
    <section
      className="py-24 sm:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Visual Journey
          </p>
          <h2
            id="gallery-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Gallery
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.id} delay={0.07 * i}>
              <button
                className="card-hover glass rounded-2xl overflow-hidden aspect-square w-full flex items-center justify-center flex-col gap-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{
                  border: "1px solid rgba(212,175,55,0.1)",
                  background: "linear-gradient(135deg, rgba(6,64,43,0.3), rgba(52,21,57,0.3))",
                }}
                onClick={() => setActive(item)}
                aria-label={`Open lightbox: ${item.label}`}
                type="button"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <span className="text-white/60 text-xs tracking-wider" style={{ fontFamily: "Lato, sans-serif" }}>
                  {item.label}
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${active.label}`}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setActive(null)}
            aria-label="Close lightbox"
            type="button"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="glass rounded-3xl p-12 flex flex-col items-center gap-4 max-w-sm w-full"
            style={{ border: "1px solid rgba(212,175,55,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-8xl">{active.emoji}</span>
            <h3 className="text-white text-xl font-bold" style={{ fontFamily: "Cinzel, serif" }}>
              {active.label}
            </h3>
            <p className="text-white/60 text-sm text-center" style={{ fontFamily: "Lato, sans-serif" }}>
              {active.desc}
            </p>
            <p className="text-yellow-400/50 text-xs">Image placeholder – replace with actual photo</p>
          </div>
        </div>
      )}
    </section>
  );
}
