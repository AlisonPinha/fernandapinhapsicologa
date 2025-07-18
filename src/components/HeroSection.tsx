import { useState } from "react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { AnimatedSection } from "@/components/ui/animated-section"
import { LazyImage } from "@/components/ui/lazy-image"
import { cn } from "@/lib/utils"
import { Heart, ArrowRight } from "lucide-react"
import { useLeadCapture } from "@/hooks/useLeadCapture"
import { trackButtonClick } from "@/lib/gtm"

export function HeroSection() {
  const { openModalWithSource } = useLeadCapture();
  const [isLoading, setIsLoading] = useState(false);

  const handleCTAClick = async () => {
    setIsLoading(true);
    trackButtonClick("Quero minha consulta de acolhimento", "hero_section");
    
    // Simula um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    openModalWithSource("hero_cta");
    setIsLoading(false);
  };

  return (
    <section id="inicio" className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-ester"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-rute"></div>
        <div className="absolute top-60 right-40 w-16 h-16 rounded-full bg-debora"></div>
      </div>

      <div className="container grid lg:grid-cols-2 gap-4 lg:gap-6 items-center py-2 md:py-3 lg:py-4 px-4 md:px-6">
        {/* Content */}
        <AnimatedSection animation="slide-in-left" className="space-y-3 md:space-y-4 order-last lg:order-first">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-debora/20 text-ester">
            <Heart className="h-4 w-4 text-debora" />
            <span className="text-sm font-medium">Terapia Cognitivo-Comportamental</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ester leading-tight text-center lg:text-left">
              Entre a dor e a 
              <span className="text-rute"> liberdade</span>, 
              existe um lugar:
              <span className="text-debora"> aqui.</span>
            </h1>
            
            <p className="text-base md:text-lg text-ester/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Sou Fernanda, psicóloga especializada em TCC. Ajudo mulheres a transformarem 
              ansiedade em tranquilidade, relacionamentos tóxicos em vínculos saudáveis, 
              e feridas em força para recomeçar.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Atendimento online personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Resultados comprovados cientificamente</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Abordagem científica e humanizada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Transformação real e duradoura</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 md:gap-3 items-center lg:items-start">
            <Button 
              onClick={handleCTAClick}
              loading={isLoading}
              className={cn(buttonVariants({ variant: "cta", size: "lg" }), "w-full sm:w-auto")}
            >
              <span className="hidden sm:inline">Quero minha consulta de acolhimento</span>
              <span className="sm:hidden">Consulta de acolhimento</span>
              {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
            
            <a 
              href="#como-ajudo"
              className={cn(buttonVariants({ variant: "soft", size: "lg" }), "w-full sm:w-auto cursor-pointer scroll-smooth")}
            >
              Como posso te ajudar
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-3 border-t border-rute/20">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-ester">98%</div>
              <div className="text-xs md:text-sm text-ester/60">Taxa de sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-ester">CRP 03/32557</div>
              <div className="text-xs md:text-sm text-ester/60">Registro profissional</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-ester">TCC</div>
              <div className="text-xs md:text-sm text-ester/60">Especialista certificada</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection animation="slide-in-right" delay={200} className="relative order-first lg:order-last max-w-48 mx-auto lg:max-w-sm">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-elegant">
            <LazyImage 
              src="/lovable-uploads/5e891758-c023-42c3-ab83-6e7a5884c33f.png"
              alt="Fernanda - Psicóloga CRP 03/32557"
              aspectRatio="aspect-[3/4] md:aspect-[3/4]"
              className="w-full h-full object-cover"
              fallback="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-debora/20 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-rute/20 -z-10"></div>
        </AnimatedSection>
      </div>
    </section>
  )
}