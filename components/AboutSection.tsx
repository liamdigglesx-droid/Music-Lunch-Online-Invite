import FadeIn from "./FadeIn";

const highlights = [
  "Choir member since 1992 — Children's Choir (Band of Hope)",
  "Member, Power of Grace Acapella Group (SS2)",
  "Precursor, pioneering team of GPrS CREW gospel Acapella ministry",
  "Tenor singer, Assembly Choir — The Apostolic Church Nigeria, Uyo (2021–present)",
  "Partner, Akwa Ibom ARISE Gospel Music",
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
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github.com/user-attachments/assets/01531b54-b201-429e-b377-c48e50833682"
                  alt="Inyeneobong Nsubong portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Inyeneobong Nsubong is a passionate Gospel music minister, dedicated tenor vocalist, songwriter, and worshipper whose musical journey has been marked by consistency, growth, and unwavering commitment to the service of God through music.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                His musical engagement began in 1992 as a member of the Children&apos;s Choir (Band of Hope), where his passion for worship first blossomed. He later progressed to the Sunday School Choir, distinguishing himself as an outstanding tenor singer with a remarkable blend of vocal excellence and spiritual sensitivity.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                While in Senior Secondary School Two (SS2), he became a member of the renowned Power of Grace Acapella Group. He subsequently became the Precursor of the pioneering team of the highly reputable GPrS CREW — a dynamic gospel music Acapella ministry known for impactful ministrations at weddings, child dedications, traditional marriages, burial ceremonies, church services, and numerous other Christian gatherings.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                In 2021, Inyeneobong Nsubong joined the Assembly Choir of The Apostolic Church Nigeria, 69 Oron Road, Uyo, where he continues to serve faithfully as a tenor singer. He is proudly in partnership with Akwa Ibom ARISE Gospel Music, an initiative championed by Dr. Ekerete Jackson BoEkom and supported by His Excellency, Pastor Umo Bassey Eno, PhD, the Executive Producer.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Today, Inyeneobong Nsubong stands as a symbol of excellence, humility, consistency, and unwavering devotion to the Kingdom of God. His life and ministry reflect the truth that <em className="text-yellow-400">genuine worship is not merely performed — it is lived.</em>
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
