import FadeIn from "./FadeIn";

const platforms = [
  { name: "Spotify", emoji: "🟢", color: "#1DB954" },
  { name: "Apple Music", emoji: "🍎", color: "#FC3C44" },
  { name: "YouTube Music", emoji: "▶️", color: "#FF0000" },
  { name: "Boomplay", emoji: "🎵", color: "#FF6600" },
  { name: "Audiomack", emoji: "🎶", color: "#FFA500" },
  { name: "Amazon Music", emoji: "🛒", color: "#00A8E1" },
  { name: "Deezer", emoji: "🎧", color: "#A238FF" },
  { name: "TIDAL", emoji: "🌊", color: "#00FFFF" },
];

export default function StreamingSection() {
  return (
    <section
      className="py-24 sm:py-32 relative"
      aria-labelledby="streaming-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(6,64,43,0.2) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <FadeIn>
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Streaming
          </p>
          <h2
            id="streaming-heading"
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Available on All Digital Platforms
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-16" />
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {platforms.map((p, i) => (
            <FadeIn key={p.name} delay={0.07 * i}>
              <div
                className="card-hover glass rounded-2xl p-5 flex flex-col items-center gap-3"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-4xl" role="img" aria-label={p.name}>{p.emoji}</span>
                <span
                  className="text-white text-xs font-semibold tracking-wider"
                  style={{ fontFamily: "Lato, sans-serif", color: p.color }}
                >
                  {p.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p
            className="text-white/60 text-sm sm:text-base leading-relaxed italic max-w-2xl mx-auto"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            &ldquo;NO DEMAND will be available worldwide on all major streaming platforms immediately
            after the official launch.&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
