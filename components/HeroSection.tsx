"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import Particles from "./Particles";
import Waveform from "./Waveform";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background composition */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 16% 22%, rgba(212,175,55,0.18), transparent 22%), radial-gradient(circle at 82% 20%, rgba(120,54,123,0.18), transparent 24%), radial-gradient(circle at 30% 78%, rgba(7,95,64,0.2), transparent 28%), linear-gradient(135deg, #070707 0%, #0d1713 36%, #101a24 66%, #090909 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 90px), repeating-linear-gradient(0deg, rgba(212,175,55,0.04) 0 1px, transparent 1px 72px)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 92%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -left-24 top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)" }}
        />
        <div
          className="absolute right-[8%] top-[14%] h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(88,34,102,0.28), transparent 72%)" }}
        />
        <div
          className="absolute left-[42%] bottom-[-7rem] h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(7,95,64,0.34), transparent 72%)" }}
        />
      </div>

      {/* Stage beams */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { left: "18%", rotate: -24, delay: "0s" },
          { left: "30%", rotate: -10, delay: "0.5s" },
          { left: "72%", rotate: 14, delay: "0.2s" },
          { left: "84%", rotate: 28, delay: "0.7s" },
        ].map((beam, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 origin-top"
            style={{
              left: beam.left,
              width: "140px",
              height: "72vh",
              background:
                "linear-gradient(to bottom, rgba(255,245,212,0.16), rgba(212,175,55,0.04) 40%, transparent 80%)",
              clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
              filter: "blur(2px)",
              transform: `rotate(${beam.rotate}deg)`,
              animation: `rays ${4 + i * 0.4}s ease-in-out ${beam.delay} infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-[6%] top-[16%] hidden h-56 w-56 rounded-full border border-yellow-400/15 md:block"
          style={{
            background:
              "repeating-radial-gradient(circle at center, rgba(212,175,55,0.1) 0 2px, transparent 2px 12px)",
          }}
        />
        <div
          className="absolute right-[6%] top-[24%] hidden w-[22rem] max-w-[45vw] rounded-[2rem] border border-white/8 bg-black/10 p-8 backdrop-blur-[2px] lg:block"
          style={{ transform: "rotate(-8deg)" }}
        >
          <div className="space-y-5 opacity-80">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative h-px bg-white/12">
                <span
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-400/70"
                  style={{ left: `${18 + i * 13}%` }}
                />
                <span
                  className="absolute top-1/2 h-6 w-px -translate-y-1/2 bg-white/35"
                  style={{ left: `${18 + i * 13 + 2}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Particles */}
      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 sm:py-32">
          {/* Artist image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-10 rounded-full opacity-50"
                style={{
                  background:
                    "repeating-radial-gradient(circle, rgba(255,255,255,0.08) 0 2px, transparent 2px 20px)",
                  transform: "rotate(-14deg)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, #D4AF37 0%, #06402B 50%, transparent 80%)",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
              <div
                className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden glass-dark shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                style={{ border: "2px solid rgba(212,175,55,0.3)" }}
              >
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.08), transparent 24%, transparent 70%, rgba(0,0,0,0.28))",
                  }}
                  aria-hidden="true"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github.com/user-attachments/assets/bc40e062-6c96-4d43-8c8e-7cf2275d930f"
                  alt="Inyeneobong Nsubong artist photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <p
              className="text-yellow-400 text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Official Single Launch
            </p>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-2 gold-glow"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              NO
            </h1>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-yellow-400 leading-none mb-6 gold-glow"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              DEMANDS
            </h1>
            <p className="mt-2 text-white/60 text-sm lowercase tracking-wide" style={{ fontFamily: "Lato, sans-serif" }}>
            ...He went alone
          </p>
            <p
              className="text-white/70 text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              by Inyeneobong Nsubong
            </p>

            {/* Waveform */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Waveform />
            </div>

            {/* Event details */}
            <div className="glass rounded-2xl p-4 sm:p-5 mb-8 inline-block text-left">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white font-semibold text-sm">Sunday, 13th September 2026</p>
                  <p className="text-white/60 text-xs">10:30 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white font-semibold text-sm">The Apostolic Church</p>
                  <p className="text-white/60 text-xs">69 Oron Road, Uyo, Akwa Ibom State</p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex justify-center lg:justify-start mb-8">
              <CountdownTimer />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://calendar.google.com/calendar/r/eventedit?text=NO+DEMAND+Single+Launch&dates=20260913T093000Z/20260913T143000Z&details=Official+Single+Launch+by+Inyeneobong+Nsubong&location=The+Apostolic+Church,+69+Oron+Road,+Uyo,+Akwa+Ibom+State"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black tracking-wider transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Add to Calendar
              </a>
              <a
                href="#support"
                className="btn-ripple inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white tracking-wider border border-yellow-400/50 hover:bg-yellow-400/10 transition-all hover:scale-105"
              >
                Support
              </a>
              <a
                href="https://maps.google.com/?q=69+Oron+Road,+Uyo,+Akwa+Ibom+State,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white tracking-wider border border-yellow-400/50 hover:bg-yellow-400/10 transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
