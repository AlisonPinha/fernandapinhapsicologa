import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"
import { Heart, ArrowRight } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = "https://wa.me/5571981932301?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20dar%20o%20primeiro%20passo%20para%20cuidar%20da%20minha%20sa%C3%BAde%20mental."

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-ester"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-rute"></div>
        <div className="absolute top-60 right-40 w-16 h-16 rounded-full bg-debora"></div>
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Content */}
        <div className="space-y-8">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-debora/20 text-ester">
            <Heart className="h-4 w-4 text-debora" />
            <span className="text-sm font-medium">Terapia Cognitivo-Comportamental</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-ester leading-tight">
              Entre a dor e a 
              <span className="text-rute"> liberdade</span>, 
              existe um lugar:
              <span className="text-debora"> aqui.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-ester/80 leading-relaxed max-w-2xl">
              Sou Fernanda, psicóloga especializada em TCC. Ajudo mulheres a transformarem 
              ansiedade em tranquilidade, relacionamentos tóxicos em vínculos saudáveis, 
              e feridas em força para recomeçar.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Atendimento online personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Primeira consulta com desconto especial</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Abordagem científica e humanizada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-debora"></div>
              <span className="text-ester">Mais de 200 vidas transformadas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "cta", size: "xl" }))}
            >
              Quero minha consulta de acolhimento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#como-ajudo"
              className={cn(buttonVariants({ variant: "soft", size: "xl" }))}
            >
              Como posso te ajudar
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-4 border-t border-rute/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-ester">200+</div>
              <div className="text-sm text-ester/60">Vidas transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ester">CRP 03/32557</div>
              <div className="text-sm text-ester/60">Registro profissional</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ester">TCC</div>
              <div className="text-sm text-ester/60">Especialista certificada</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-elegant">
            <div className="aspect-[4/5] bg-gradient-warm flex items-center justify-center">
              <div className="text-center text-ester">
                <div className="w-32 h-32 rounded-full bg-maria/30 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-ester/60" />
                </div>
                <p className="text-lg font-medium">Foto profissional da Fernanda</p>
                <p className="text-sm opacity-70">Psicóloga CRP 03/32557</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-debora/20 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-rute/20 -z-10"></div>
        </div>
      </div>
    </section>
  )
}