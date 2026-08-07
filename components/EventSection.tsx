import FadeIn from "./FadeIn";
import { Calendar, Clock, MapPin, Palette } from "lucide-react";

const cards = [
  {
    icon: Calendar,
    label: "Date",
    value: "Sunday, 13th September 2026",
    sub: "Mark your calendar",
  },
  {
    icon: Clock,
    label: "Time",
    value: "10:30 AM",
    sub: "Africa/Lagos (WAT, UTC+1)",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "The Apostolic Church",
    sub: "69 Oron Road, Uyo, Akwa Ibom State",
  },
  {
    icon: Palette,
    label: "Event Colours",
    value: "Dark Green · Dark Purple",
    sub: "#06402B · #341539",
    colors: true,
  },
];

export default function EventSection() {
  return (
    <section
      id="event"
      className="py-24 sm:py-32 relative"
      aria-labelledby="event-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 80%, rgba(6,64,43,0.3) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Be There
          </p>
          <h2
            id="event-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Launch Event
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((c, i) => (
            <FadeIn key={c.label} delay={0.1 * i}>
              <div
                className="card-hover glass rounded-2xl p-6 h-full text-center"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}
                >
                  <c.icon className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "Lato, sans-serif" }}>
                  {c.label}
                </p>
                <p className="text-white font-bold text-sm mb-1" style={{ fontFamily: "Cinzel, serif" }}>
                  {c.value}
                </p>
                {c.colors ? (
                  <div className="flex gap-2 justify-center mt-2">
                    <div className="w-5 h-5 rounded-full" style={{ background: "#06402B", border: "1px solid #D4AF37" }} title="Dark Green #06402B" />
                    <div className="w-5 h-5 rounded-full" style={{ background: "#341539", border: "1px solid #D4AF37" }} title="Dark Purple #341539" />
                  </div>
                ) : (
                  <p className="text-white/50 text-xs" style={{ fontFamily: "Lato, sans-serif" }}>{c.sub}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Map placeholder + CTA */}
        <FadeIn delay={0.3}>
          <div className="glass rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
            {/* Map placeholder */}
            <div
              className="h-64 sm:h-80 flex items-center justify-center flex-col gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(6,64,43,0.5), rgba(52,21,57,0.5))",
              }}
              role="img"
              aria-label="Map placeholder for The Apostolic Church, 69 Oron Road, Uyo, Akwa Ibom State"
            >
              <MapPin className="w-12 h-12 text-yellow-400" aria-hidden="true" />
              <div className="text-center">
                <p className="text-white font-semibold">The Apostolic Church</p>
                <p className="text-white/60 text-sm">69 Oron Road, Uyo, Akwa Ibom State</p>
                <p className="text-white/40 text-xs mt-1">Google Map Placeholder</p>
              </div>
            </div>
            <div className="p-6 text-center">
              <a
                href="https://maps.google.com/?q=69+Oron+Road,+Uyo,+Akwa+Ibom+State,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-black tracking-wider transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
