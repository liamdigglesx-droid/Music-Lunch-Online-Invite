import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NO DEMAND – Official Single Launch | Inyeneobong Nsubong",
  description:
    "Join us for the official launch of 'NO DEMAND', the new gospel music single by Inyeneobong Nsubong. Sunday, 13th September 2026 at The Apostolic Church, Uyo, Akwa Ibom State.",
  keywords: [
    "NO DEMAND",
    "Inyeneobong Nsubong",
    "gospel music",
    "single launch",
    "worship",
    "Uyo",
    "Akwa Ibom",
  ],
  openGraph: {
    title: "NO DEMAND – Official Single Launch",
    description:
      "An unforgettable atmosphere of worship, praise, and divine encounter. 13th September 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
