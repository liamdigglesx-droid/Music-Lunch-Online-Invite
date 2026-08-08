"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { X } from "lucide-react";

const items = [
  { id: 1, img: "https://github.com/user-attachments/assets/01531b54-b201-429e-b377-c48e50833682", alt: "Artist portrait 1" },
  { id: 2, img: "https://github.com/user-attachments/assets/298fe4b9-ac40-4f0a-b551-7e93ae9505bb", alt: "Artist portrait 2" },
  { id: 3, img: "https://github.com/user-attachments/assets/2cffc798-0f7a-44fe-ba2b-1cf85433691f", alt: "Live performance 1" },
  { id: 4, img: "https://github.com/user-attachments/assets/a8a3941c-38b4-4527-a550-8e3604e3ebc9", alt: "Live performance 2" },
  { id: 5, img: "https://github.com/user-attachments/assets/bc40e062-6c96-4d43-8c8e-7cf2275d930f", alt: "Gallery image 5" },
  { id: 6, img: "https://github.com/user-attachments/assets/564c9346-6e5a-4073-bcf3-1e142b271a62", alt: "Gallery image 6" },
  { id: 7, img: "https://github.com/user-attachments/assets/01531b54-b201-429e-b377-c48e50833682", alt: "Gallery image 7" },
  { id: 8, img: "https://github.com/user-attachments/assets/298fe4b9-ac40-4f0a-b551-7e93ae9505bb", alt: "Gallery image 8" },
  { id: 9, img: "https://github.com/user-attachments/assets/2cffc798-0f7a-44fe-ba2b-1cf85433691f", alt: "Gallery image 9" },
  { id: 10, img: "https://github.com/user-attachments/assets/a8a3941c-38b4-4527-a550-8e3604e3ebc9", alt: "Gallery image 10" },
  { id: 11, img: "https://github.com/user-attachments/assets/bc40e062-6c96-4d43-8c8e-7cf2275d930f", alt: "Gallery image 11" },
  { id: 12, img: "https://github.com/user-attachments/assets/564c9346-6e5a-4073-bcf3-1e142b271a62", alt: "Gallery image 12" },
  { id: 13, img: "https://github.com/user-attachments/assets/01531b54-b201-429e-b377-c48e50833682", alt: "Gallery image 13" },
  { id: 14, img: "https://github.com/user-attachments/assets/298fe4b9-ac40-4f0a-b551-7e93ae9505bb", alt: "Gallery image 14" },
  { id: 15, img: "https://github.com/user-attachments/assets/2cffc798-0f7a-44fe-ba2b-1cf85433691f", alt: "Gallery image 15" },
  { id: 16, img: "https://github.com/user-attachments/assets/a8a3941c-38b4-4527-a550-8e3604e3ebc9", alt: "Gallery image 16" },
  { id: 17, img: "https://github.com/user-attachments/assets/bc40e062-6c96-4d43-8c8e-7cf2275d930f", alt: "Gallery image 17" },
  { id: 18, img: "https://github.com/user-attachments/assets/564c9346-6e5a-4073-bcf3-1e142b271a62", alt: "Gallery image 18" },
  { id: 19, img: "https://github.com/user-attachments/assets/01531b54-b201-429e-b377-c48e50833682", alt: "Gallery image 19" },
  { id: 20, img: "https://github.com/user-attachments/assets/298fe4b9-ac40-4f0a-b551-7e93ae9505bb", alt: "Gallery image 20" },
  { id: 21, img: "https://github.com/user-attachments/assets/2cffc798-0f7a-44fe-ba2b-1cf85433691f", alt: "Gallery image 21" },
  { id: 22, img: "https://github.com/user-attachments/assets/a8a3941c-38b4-4527-a550-8e3604e3ebc9", alt: "Gallery image 22" },
  { id: 23, img: "https://github.com/user-attachments/assets/bc40e062-6c96-4d43-8c8e-7cf2275d930f", alt: "Gallery image 23" },
  { id: 24, img: "https://github.com/user-attachments/assets/564c9346-6e5a-4073-bcf3-1e142b271a62", alt: "Gallery image 24" },
  { id: 25, img: "https://github.com/user-attachments/assets/01531b54-b201-429e-b377-c48e50833682", alt: "Gallery image 25" },
  { id: 26, img: "https://github.com/user-attachments/assets/298fe4b9-ac40-4f0a-b551-7e93ae9505bb", alt: "Gallery image 26" },
];

export default function GallerySection() {
  const [active, setActive] = useState<(typeof items)[0] | null>(null);

  return (
    <section
      className="py-24 sm:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "Lato, sans-serif" }}>
            Visual Journey
          </p>
          <h2
            id="gallery-heading"
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Gallery
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.id} delay={0.07 * i}>
              <button
                className="card-hover glass rounded-2xl overflow-hidden aspect-square w-full relative cursor-pointer group focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{
                  border: "1px solid rgba(212,175,55,0.1)",
                }}
                onClick={() => setActive(item)}
                aria-label={`Open lightbox: ${item.alt}`}
                type="button"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setActive(null)}
            aria-label="Close lightbox"
            type="button"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="glass rounded-3xl overflow-hidden flex flex-col items-center max-w-lg w-full"
            style={{ border: "1px solid rgba(212,175,55,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.img} alt={active.alt} className="w-full aspect-square object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}
