import FadeIn from "./FadeIn";
import { FaSpotify, FaApple, FaYoutube, FaAmazon, FaDeezer, FaMusic } from "react-icons/fa";
import { SiAudiomack, SiTidal } from "react-icons/si";
import type { IconType } from "react-icons";

const platforms: { name: string; icon: IconType; color: string }[] = [
  { name: "Spotify", icon: FaSpotify, color: "#1DB954" },
  { name: "Apple Music", icon: FaApple, color: "#FC3C44" },
  { name: "YouTube Music", icon: FaYoutube, color: "#FF0000" },
  { name: "Boomplay", icon: FaMusic, color: "#FF6600" },
  { name: "Audiomack", icon: SiAudiomack, color: "#FFA500" },
  { name: "Amazon Music", icon: FaAmazon, color: "#00A8E1" },
  { name: "Deezer", icon: FaDeezer, color: "#A238FF" },
  { name: "TIDAL", icon: SiTidal, color: "#00FFFF" },
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
                <p.icon className="w-10 h-10" style={{ color: p.color }} aria-label={p.name} />
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
