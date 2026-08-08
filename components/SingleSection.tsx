import FadeIn from "./FadeIn";
import { BookOpen, Mic2, Music2, Calendar } from "lucide-react";

const details = [
  { icon: Music2, label: "Song Title", value: "NO DEMANDS" },
  { icon: Mic2, label: "Artist", value: "Inyeneobong Nsubong" },
  { icon: BookOpen, label: "Scriptural Inspiration", value: "Romans 5:8" },
  { icon: Mic2, label: "Arranger", value: "JephMUSIC" },
  { icon: Mic2, label: "Producer", value: "Mr. Dehniece" },
  { icon: Mic2, label: "Executive Producer", value: "His Excellency Pastor Umo Bassey Eno (Ph.D)" },
  { icon: Mic2, label: "Progenitor of AKAGOM", value: "Ekerete Jackson BoEKOM" },
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
                  src="https://github.com/user-attachments/assets/298fe4b9-ac40-4f0a-b551-7e93ae9505bb"
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
                  There comes a moment when you pause looking at the cross as just a story and begin to see it as the greatest expression of love ever shown. That realization inspired &ldquo;NO DEMANDS.&rdquo;
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  As I reflected on the suffering, rejection and sacrifice of Jesus Christ, I was overwhelmed by one truth: He gave His life freely for humanity. He endured the cross, carried our sins and paid the price we could never pay—not because we deserved it, but because He loved us.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  The title &ldquo;NO DEMANDS&rdquo; captures the wonder of God&apos;s grace. Jesus did not ask us to earn His sacrifice before He went to Calvary. His suffering, death, burial, resurrection, ascension and glorification opened the way for everyone to receive forgiveness and new life through faith.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  This song is an invitation to pause and remember the depth of Christ&apos;s love. It is a call to respond with gratitude, worship and a life surrendered to Him.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  My prayer is that everyone who hears &ldquo;NO DEMANDS&rdquo; will be reminded that the cross stands as the ultimate proof of God&apos;s mercy, grace and unfailing love.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  May this song encourage hearts, strengthen faith and point many people to Jesus Christ—the One who gave everything so that we might have eternal life. Amen!
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
                  God&apos;s love is not based on what we have done but on who He is &amp; what He has done for us. Through Jesus Christ, we have forgiveness, hope and eternal life. &ldquo;NO DEMANDS&rdquo; is a song that points every heart back to the immeasurable love revealed at Calvary. ROM 5:8
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {details.map((d, i) => (
                <FadeIn key={d.label} direction="right" delay={0.05 * i} className="h-full">
                  <div
                    className="card-hover glass rounded-xl p-4 h-full"
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
