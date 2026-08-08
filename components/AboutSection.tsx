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
                During his secondary education at Holy Family College, Oku Abak, Abak Local Government Area, being a boarding student limited his availability during school sessions. Nevertheless, his commitment to the ministry of music remained steadfast, as he actively participated in choir activities whenever he returned home on holidays.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                While in Senior Secondary School Two (SS2), he became a member of the renowned Power of Grace Acapella Group, where his vocal dexterity and stage confidence were further refined. He subsequently became the Precursor of the pioneering team of the highly reputable GPrS CREW — a dynamic gospel music Acapella ministry known for impactful ministrations at weddings, child dedications, traditional marriages, burial ceremonies, church services, and numerous other Christian gatherings. Through these platforms, he has touched countless lives with songs of hope, worship, and encouragement.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Beyond music, Inyeneobong Nsubong is academically accomplished. He obtained a Higher National Diploma (HND) in Electrical/Electronic Engineering from Heritage Polytechnic, Ikot Udota, Eket Local Government Area, Akwa Ibom State. His academic background reflects his commitment to excellence, discipline, and continuous personal development, qualities that are evident in both his professional and ministerial life.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                In 2021, Inyeneobong Nsubong joined the Assembly Choir (Main Choir) of The Apostolic Church Nigeria, 69 Oron Road, Uyo, where he continues to serve faithfully as a tenor singer. His dedication, discipline, musical excellence, and spirit of teamwork have contributed immensely to the growth and effectiveness of the choir, all to the glory of God.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Beyond congregational ministry, Inyeneobong Nsubong has continued to establish himself as an emerging gospel music brand with a clear mandate to proclaim the Gospel through inspired music. He is proudly in partnership with Akwa Ibom ARISE Gospel Music, an initiative championed by Dr. Ekerete Jackson BoEkom as its progenitor and supported by the visionary leadership of His Excellency, Pastor Umo Bassey Eno, PhD, the Executive Producer.
              </p>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                Today, Inyeneobong Nsubong stands as a symbol of excellence, humility, consistency, and unwavering devotion to the Kingdom of God. His life and ministry reflect the truth that <em className="text-yellow-400">genuine worship is not merely performed — it is lived.</em> Through his rich tenor voice, inspiring compositions, and Christ-centered ministry, he continues to bless lives, strengthen the Church, and draw many into a deeper experience of God&apos;s presence.
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
