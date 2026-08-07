"use client";
import { useEffect, useState, useCallback } from "react";

// Launch: 13 September 2026, 10:30 AM Africa/Lagos (UTC+1)
const LAUNCH_DATE = new Date("2026-09-13T09:30:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, LAUNCH_DATE.getTime() - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

interface Props {
  large?: boolean;
}

export default function CountdownTimer({ large = false }: Props) {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const tick = useCallback(() => setTime(getTimeLeft()), []);

  useEffect(() => {
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tick]);

  const boxClass = large
    ? "flex flex-col items-center justify-center glass rounded-2xl p-4 sm:p-6 min-w-[80px] sm:min-w-[110px]"
    : "flex flex-col items-center justify-center glass rounded-xl p-3 sm:p-4 min-w-[64px]";

  const numClass = large
    ? "text-4xl sm:text-6xl font-black text-yellow-400 gold-glow tabular-nums"
    : "text-2xl sm:text-3xl font-black text-yellow-400 gold-glow tabular-nums";

  const labelClass = large
    ? "text-[10px] sm:text-xs tracking-[0.2em] text-white/60 uppercase mt-1"
    : "text-[9px] sm:text-[10px] tracking-[0.15em] text-white/60 uppercase mt-0.5";

  const pads = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="flex gap-3 sm:gap-4"
      role="timer"
      aria-label="Countdown to NO DEMAND launch"
      aria-live="polite"
    >
      {[
        { value: time.days, label: "Days" },
        { value: time.hours, label: "Hours" },
        { value: time.minutes, label: "Minutes" },
        { value: time.seconds, label: "Seconds" },
      ].map(({ value, label }) => (
        <div key={label} className={boxClass}>
          <span className={numClass}>{pads(value)}</span>
          <span className={labelClass}>{label}</span>
        </div>
      ))}
    </div>
  );
}
