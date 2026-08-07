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
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(6,64,43,0.8) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(52,21,57,0.8) 0%, transparent 60%), linear-gradient(to bottom, #0a0a0a, #0d1a15, #0a0a0a)",
        }}
        aria-hidden="true"
      />

      {/* Light rays */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 origin-top"
            style={{
              width: "2px",
              height: "60vh",
              background:
                "linear-gradient(to bottom, rgba(212,175,55,0.4), transparent)",
              transform: `rotate(${-30 + i * 15}deg)`,
              animation: `rays ${3 + i * 0.5}s ease-in-out ${i * 0.4}s infinite alternate`,
            }}
          />
        ))}
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
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, #D4AF37 0%, #06402B 50%, transparent 80%)",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
              <div
                className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden glass-dark"
                style={{ border: "2px solid rgba(212,175,55,0.3)" }}
              >
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
              DEMAND
            </h1>

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
