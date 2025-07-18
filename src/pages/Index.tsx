import { useEffect } from "react";
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { CtaSection } from "@/components/CtaSection"
import { Footer } from "@/components/Footer"
import { trackPageView } from "@/lib/gtm";

const Index = () => {
  useEffect(() => {
    trackPageView("homepage");
  }, []);
  return (
    <div className="min-h-screen bg-maria">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
