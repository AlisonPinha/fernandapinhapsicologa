import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { AnimatedSection } from "@/components/ui/animated-section"
import { LazyImage } from "@/components/ui/lazy-image"
import { cn } from "@/lib/utils"
import { GraduationCap, Heart, Award, ArrowRight } from "lucide-react"
import { useLeadCapture } from "@/hooks/useLeadCapture"

export function AboutSection() {
  const { openModal } = useLeadCapture();

  return (
    <section id="sobre" className="py-8 md:py-16 lg:py-20 bg-maria">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <AnimatedSection animation="slide-in-left" className="relative order-last lg:order-first">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-elegant">
              <LazyImage 
                src="/lovable-uploads/da809024-c1db-42c6-9e02-7451a68598e6.png"
                alt="Fernanda - Sobre a psicóloga"
                aspectRatio="aspect-[4/5]"
                className="w-full h-full object-cover"
                fallback="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              />
            </div>
            
            {/* Decorative cards */}
            <Card className="absolute -top-4 -right-4 w-32 bg-maria/90 backdrop-blur border-rute/20 z-20">
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 text-debora mx-auto mb-2" />
                <div className="text-xs text-ester">TCC Especialista</div>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-4 -left-4 w-32 bg-maria/90 backdrop-blur border-rute/20 z-20">
              <CardContent className="p-4 text-center">
                <div className="text-lg font-bold text-ester">98%</div>
                <div className="text-xs text-ester/70">Satisfação</div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection animation="slide-in-right" delay={200} className="space-y-4 md:space-y-6 order-first lg:order-last">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-ester leading-tight text-center lg:text-left">
                Então, quem é 
                <span className="text-rute"> Fernanda</span> 
                <span className="text-debora"> Psicóloga?</span>
              </h2>

              <div className="space-y-4 text-sm md:text-base text-ester/80 leading-relaxed text-center lg:text-left">
                <p>
                  Algumas pessoas escolhem a psicologia. 
                  Outras são escolhidas pela missão de acolher o que o mundo insiste em quebrar.
                </p>
                
                <p>
                  Fernanda Pinha é essa segunda história.
                </p>
                
                <p>
                  Antes de ser psicóloga, ela já era refúgio: ouvia com o coração aberto, 
                  ria com a alma leve, enxergava onde poucos conseguiam ver.
                </p>
                
                <p>
                  <strong className="text-rute">Fernanda acredita que cura não acontece apenas no discurso.</strong>{" "}
                  Cura se constrói no detalhe: no silêncio que acolhe, na escuta que respeita, 
                  no olhar que não julga.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-rute/20 bg-gradient-soft">
                <CardContent className="p-4 flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-rute flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-ester">Formação</div>
                    <div className="text-sm text-ester/70">Psicologia - UNIFACS</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-rute/20 bg-gradient-soft">
                <CardContent className="p-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-debora flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-ester">Especialização</div>
                    <div className="text-sm text-ester/70">TCC - Grupo PBE</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Philosophy */}
            <Card className="border-debora/20 bg-gradient-warm">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-ester mb-3">Minha missão</h3>
                <p className="text-ester/80 italic">
                  "Acredito que toda mulher carrega dentro de si a força necessária para se 
                  transformar. Meu papel é ajudá-la a encontrar esse caminho, oferecendo 
                  ferramentas científicas e acolhimento genuíno para que ela floresça."
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <Button 
                onClick={openModal}
                className={cn(buttonVariants({ variant: "cta", size: "lg" }), "w-full sm:w-auto")}
              >
                Quero conhecer a minha nova psicóloga
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a 
                href="#como-ajudo"
                className={cn(buttonVariants({ variant: "elegant", size: "lg" }), "w-full sm:w-auto")}
              >
                <span className="hidden sm:inline">Ver como ela pode me ajudar</span>
                <span className="sm:hidden">Como ela pode ajudar</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}