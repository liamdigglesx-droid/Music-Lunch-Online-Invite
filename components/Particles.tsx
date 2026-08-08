"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const notes = ["♪", "♫", "♬", "♩"];
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      color: string;
      symbol: string;
      drift: number;
      tilt: number;
      wobble: number;
    }> = [];

    const colors = ["#F1C95A", "#2FA772", "#FFFFFF", "#8B4AA8"];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle(startNearBottom = false) {
      if (!canvas) {
       return {
         x: 0,
         y: 0,
         size: 18,
         speed: 0.5,
         opacity: 0.4,
         color: colors[0],
         symbol: notes[0],
         drift: 0,
         tilt: 0,
         wobble: 0,
       };
      }

      return {
       x: Math.random() * canvas.width,
       y: startNearBottom ? canvas.height + Math.random() * 60 : canvas.height + Math.random() * 220,
       size: Math.random() * 16 + 18,
       speed: Math.random() * 0.55 + 0.28,
       opacity: Math.random() * 0.45 + 0.18,
       color: colors[Math.floor(Math.random() * colors.length)],
       symbol: notes[Math.floor(Math.random() * notes.length)],
       drift: Math.random() * 1.2 + 0.2,
       tilt: (Math.random() - 0.5) * 0.35,
       wobble: Math.random() * Math.PI * 2,
      };
    }

    function spawn() {
      if (!canvas) return;
      particles.length = 0;
      for (let i = 0; i < 46; i++) {
       particles.push(createParticle());
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Iterate in reverse to safely remove dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;
        p.x += Math.sin(p.y * 0.01 + p.wobble) * p.drift;
        if (p.y < -40) {
          // Replace expired particle with a new one
          particles[i] = createParticle(true);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.sin(p.y * 0.008 + p.wobble) * p.tilt);
        ctx.font = `${p.size}px "Georgia", "Times New Roman", serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 14;
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    }

    function handleResize() {
      resize();
      spawn();
    }

    resize();
    spawn();
    draw();
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
