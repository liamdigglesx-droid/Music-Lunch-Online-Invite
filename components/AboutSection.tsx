import FadeIn from "./FadeIn";

const highlights = [
  "Anointed minister of the gospel",
  "Worship leader and recording artist",
  "Music evangelist across West Africa",
  "Founder of Worship Expression Ministry",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            The Artist
          </p>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Inyeneobong Nsubong
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, #06402B, #341539)" }}
                aria-hidden="true"
              />
              <div
                className="relative aspect-square rounded-3xl overflow-hidden glass-dark"
                style={{ border: "1px solid rgba(212,175,55,0.2)", maxWidth: 420, margin: "0 auto" }}
                role="img"
                aria-label="Placeholder for Inyeneobong Nsubong portrait"
              >
                <div
                  className="w-full h-full flex items-center justify-center flex-col gap-4 p-8"
                  style={{ background: "linear-gradient(135deg, rgba(6,64,43,0.5), rgba(52,21,57,0.5))" }}
                >
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.15)", border: "2px solid rgba(212,175,55,0.4)" }}
                  >
                    <span className="text-5xl">🎵</span>
                  </div>
                  <p className="text-yellow-400/70 text-sm tracking-widest uppercase text-center">
                    Artist Portrait
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Inyeneobong Nsubong is a passionate gospel minister, worship leader, and recording
                artist whose music carries the authentic fragrance of the presence of God. Born with a
                gift that transcends musical talent, she has devoted her life and voice to the service
                of the Most High.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Her musical journey began in the local church choir and has grown into a full-time
                ministry of worship evangelism. Deeply rooted in the Word, her songs are not merely
                performances but encounters — altars built with sound, where people meet with God.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Her mission is simple but profound: <em className="text-yellow-400">"To build a bridge between heaven and earth through the vehicle of worship music, so that every soul that encounters these songs finds rest, healing, and transformation in God&apos;s presence."</em>
              </p>

              {/* Highlights */}
              <div className="pt-4">
                <h3 className="text-yellow-400 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
                  Career Highlights
                </h3>
                <ul className="space-y-2" role="list">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-0.5">✦</span>
                      <span className="text-white/70 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Musical style */}
              <div className="glass rounded-xl p-4 mt-4">
                <h3 className="text-yellow-400 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "Lato, sans-serif" }}>
                  Musical Style
                </h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                  Contemporary gospel · Afro-worship · Prophetic praise · Soul-led devotion
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
