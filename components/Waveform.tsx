"use client";
export default function Waveform() {
  const bars = Array.from({ length: 32 }, (_, i) => i);
  return (
    <div
      className="flex items-end gap-0.5 h-10 opacity-30"
      aria-hidden="true"
    >
      {bars.map((i) => (
        <div
          key={i}
          className="w-1 rounded-full"
          style={{
            backgroundColor: "#D4AF37",
            height: `${30 + Math.sin(i * 0.7) * 20}%`,
            animation: `waveform ${0.8 + (i % 4) * 0.2}s ease-in-out ${(i * 0.07).toFixed(2)}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
