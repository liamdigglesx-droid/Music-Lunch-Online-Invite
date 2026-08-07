import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SingleSection from "@/components/SingleSection";
import CountdownSection from "@/components/CountdownSection";
import EventSection from "@/components/EventSection";
import SupportSection from "@/components/SupportSection";
import StreamingSection from "@/components/StreamingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SingleSection />
        <CountdownSection />
        <EventSection />
        <SupportSection />
        <StreamingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
