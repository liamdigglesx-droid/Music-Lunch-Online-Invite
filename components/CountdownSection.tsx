"use client";
import FadeIn from "./FadeIn";
import CountdownTimer from "./CountdownTimer";

export default function CountdownSection() {
  return (
    <section
      className="py-28 sm:py-40 relative overflow-hidden text-center"
      aria-labelledby="countdown-heading"
    >
      {/* Dramatic background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,64,43,0.9) 0%, rgba(52,21,57,0.9) 50%, rgba(6,64,43,0.9) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Animated glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-yellow-400/10"
            style={{
              width: `${i * 300}px`,
              height: `${i * 300}px`,
              animation: `pulse-glow ${2 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
            The Moment Approaches
          </p>
          <h2
            id="countdown-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 gold-glow"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The Countdown Has Begun
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-12">
            <CountdownTimer large />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto italic"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            &ldquo;Join us as we unveil &apos;NO DEMAND&apos; in an unforgettable atmosphere of worship,
            praise, and divine encounter.&rdquo;
          </p>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-6" />
        </FadeIn>
      </div>
    </section>
  );
}
