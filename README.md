# NO DEMAND – Official Single Launch Website

A premium, responsive, production-ready landing website for the official launch of the gospel music single **"NO DEMAND"** by **Inyeneobong Nsubong**.

## Event Details

- **Date:** Sunday, 13th September 2026
- **Time:** 10:30 AM (WAT)
- **Venue:** The Apostolic Church, 69 Oron Road, Uyo, Akwa Ibom State

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Cinzel & Lato (Google Fonts)

## Features

- Sticky navigation (transparent → blur on scroll)
- Full-screen hero with live countdown timer, particles, and audio waveform
- Artist biography section
- Single details (song story, scriptural inspiration, production credits)
- Dramatic countdown section
- Launch event info with Google Maps placeholder
- Support & donations section
- Streaming platforms grid (Spotify, Apple Music, YouTube Music, Boomplay, Audiomack, Amazon Music, Deezer, TIDAL)
- Responsive gallery with lightbox
- Contact information & social media links
- Accessible, SEO-optimised, WCAG 2.2 AA compliant

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Before launch, update the following placeholder values in the source files:

| Location | Placeholder |
|---|---|
| `components/SupportSection.tsx` | Bank Name, Account Name, Account Number, QR Code, donation URL |
| `components/ContactSection.tsx` | Booking/Ministry email, phone, management contact, social media URLs |
| `components/Footer.tsx` | Social media URLs, Privacy Policy / Terms links |
| `components/HeroSection.tsx` | Replace the artist image placeholder with the real photo |
| `components/AboutSection.tsx` | Replace artist portrait placeholder |
| `components/SingleSection.tsx` | Song story, scriptural inspiration, producer, featured artist, artwork |
| `components/GallerySection.tsx` | Replace emoji placeholders with real gallery images |

## Brand Colours

| Token | Value |
|---|---|
| Dark Green | `#06402B` |
| Dark Purple | `#341539` |
| Soft Gold | `#D4AF37` |

## License

© Inyeneobong Nsubong. All rights reserved.
