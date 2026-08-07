"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Heart, Users, Briefcase, Music, Share2 } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineClipboardCopy } from "react-icons/hi";
import { QRCodeSVG } from "qrcode.react";

const WHATSAPP_URL = "https://wa.me/2348068398878";
const ACCOUNT_NUMBER = "2089116861";

const otherCards = [
  {
    icon: Users,
    title: "Become a Ministry Partner",
    desc: "Partner with us in a consistent, prayerful, and financial commitment to sustain the vision of this ministry.",
    action: "Partner With Us",
    href: WHATSAPP_URL,
    isShare: false,
  },
  {
    icon: Briefcase,
    title: "Sponsor Future Projects",
    desc: "Invest in future gospel music projects and become part of a legacy that touches nations.",
    action: "Become a Sponsor",
    href: WHATSAPP_URL,
    isShare: false,
  },
  {
    icon: Music,
    title: "Support Music Ministry",
    desc: "Help fund recording sessions, music videos, live events, and ministerial outreaches.",
    action: "Support",
    href: WHATSAPP_URL,
    isShare: false,
  },
  {
    icon: Share2,
    title: "Share This Release",
    desc: "The simplest act of sharing can carry this message of worship to someone who desperately needs it.",
    action: "Share Now",
    href: "",
    isShare: true,
  },
];

export default function SupportSection() {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = "Check out this new worship release – NO DEMAND by Inyeneobong Nsubong!";

  function getPageUrl() {
    return typeof window !== "undefined" ? window.location.href : "";
  }

  function handleCopyAccount() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(ACCOUNT_NUMBER).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }).catch(() => {});
    }
  }

  function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: "NO DEMAND", text: shareText, url: getPageUrl() }).catch(() => {});
    } else {
      setShareOpen(true);
    }
  }

  function handleCopyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(getPageUrl()).then(() => setShareOpen(false)).catch(() => setShareOpen(false));
    } else {
      setShareOpen(false);
    }
  }

  return (
    <section
      id="support"
      className="py-24 sm:py-32 relative"
      aria-labelledby="support-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(52,21,57,0.3) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Partner With Us
          </p>
          <h2
            id="support-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Support the Ministry
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        {/* Large Donate Box */}
        <FadeIn className="mb-8">
          <article
            className="card-hover glass-dark rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center"
            style={{ border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(6,64,43,0.8), rgba(52,21,57,0.8))",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" aria-hidden="true" />
            </div>
            <h3
              className="text-white font-bold text-2xl sm:text-3xl mb-3"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Donate
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-lg" style={{ fontFamily: "Lato, sans-serif" }}>
              Your generous donation supports the production, promotion, and distribution of this anointed music ministry.
            </p>

            {/* Bank details */}
            <div className="glass rounded-xl p-5 sm:p-6 mb-6 w-full max-w-md space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>Bank Name</span>
                <span className="text-white text-sm font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>UBA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>Account Name</span>
                <span className="text-white text-sm font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>Inyeneobong Nsubong</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>Account Number</span>
                <span className="text-white text-sm font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>{ACCOUNT_NUMBER}</span>
              </div>
            </div>

            {/* QR Code */}
            <div className="mb-6 cursor-pointer" onClick={handleCopyAccount} title="Click to copy account number">
              <div className="bg-white rounded-xl p-3 inline-block">
                <QRCodeSVG value={ACCOUNT_NUMBER} size={140} />
              </div>
              <p className="text-white/50 text-xs mt-2" style={{ fontFamily: "Lato, sans-serif" }}>
                Scan or click QR code to copy account number
              </p>
            </div>

            {/* Give Now button */}
            <button
              className="btn-ripple w-full max-w-xs py-3 rounded-full text-base font-semibold text-black tracking-wider"
              style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}
              type="button"
              onClick={handleCopyAccount}
            >
              Give Now
            </button>

            {/* Copied feedback */}
            {copied && (
              <p className="mt-3 text-yellow-400 text-sm font-semibold animate-pulse">
                Account Number Copied
              </p>
            )}
          </article>
        </FadeIn>

        {/* Other support cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCards.map((c, i) => (
            <FadeIn key={c.title} delay={0.1 * i}>
              <article
                className="card-hover glass-dark rounded-2xl p-6 h-full flex flex-col"
                style={{ border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,64,43,0.8), rgba(52,21,57,0.8))",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <c.icon className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1" style={{ fontFamily: "Lato, sans-serif" }}>
                  {c.desc}
                </p>

                {c.isShare ? (
                  <button
                    className="btn-ripple mt-auto w-full py-2.5 rounded-full text-sm font-semibold text-black tracking-wider"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}
                    type="button"
                    onClick={handleShare}
                  >
                    {c.action}
                  </button>
                ) : (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ripple mt-auto w-full py-2.5 rounded-full text-sm font-semibold text-black tracking-wider text-center block"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #B8860B)" }}
                  >
                    {c.action}
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Share dialog */}
      {shareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShareOpen(false)}>
          <div className="glass-dark rounded-2xl p-6 max-w-sm w-full mx-4" style={{ border: "1px solid rgba(212,175,55,0.3)" }} onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white font-bold text-lg mb-4 text-center" style={{ fontFamily: "Cinzel, serif" }}>Share This Release</h3>
            <div className="grid grid-cols-3 gap-3">
              <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + getPageUrl())}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                <FaWhatsapp className="w-6 h-6 text-white/70" />
                <span className="text-white/70 text-xs">WhatsApp</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getPageUrl())}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                <FaFacebookF className="w-6 h-6 text-white/70" />
                <span className="text-white/70 text-xs">Facebook</span>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(getPageUrl())}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                <FaXTwitter className="w-6 h-6 text-white/70" />
                <span className="text-white/70 text-xs">X</span>
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent(getPageUrl())}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                <FaTelegramPlane className="w-6 h-6 text-white/70" />
                <span className="text-white/70 text-xs">Telegram</span>
              </a>
              <a href={`mailto:?subject=${encodeURIComponent("NO DEMAND – New Worship Release")}&body=${encodeURIComponent(shareText + "\n\n" + getPageUrl())}`} className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                <HiOutlineMail className="w-6 h-6 text-white/70" />
                <span className="text-white/70 text-xs">Email</span>
              </a>
              <button onClick={handleCopyLink} className="flex flex-col items-center gap-1 p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                <HiOutlineClipboardCopy className="w-6 h-6 text-white/70" />
                <span className="text-white/70 text-xs">Copy Link</span>
              </button>
            </div>
            <button onClick={() => setShareOpen(false)} className="mt-4 w-full py-2 rounded-full text-sm text-white/60 hover:text-white transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
