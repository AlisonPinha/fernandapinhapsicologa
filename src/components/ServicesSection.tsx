import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Heart, Brain, Users, Shield, ArrowRight } from "lucide-react";
import { useLeadCapture } from "@/hooks/useLeadCapture";
export function ServicesSection() {
  const {
    openModal
  } = useLeadCapture();
  const services = [{
    icon: Heart,
    title: "Ansiedade e Pânico",
    description: "Transforme a ansiedade que te paralisa em tranquilidade que te liberta. Aprenda técnicas comprovadas para recuperar o controle da sua vida.",
    whatsappText: "%20ansiedade%20e%20p%C3%A2nico"
  }, {
    icon: Users,
    title: "Relacionamentos Tóxicos",
    description: "Saia de ciclos que te machucam e construa vínculos saudáveis. Recupere sua autoestima e aprenda a se relacionar com amor próprio.",
    whatsappText: "%20relacionamentos%20t%C3%B3xicos"
  }, {
    icon: Brain,
    title: "Autoestima e Autoconfiança",
    description: "Reconecte-se com sua força interior. Desenvolva uma relação amorosa consigo mesma e conquiste a vida que você merece.",
    whatsappText: "%20autoestima%20e%20autoconfian%C3%A7a"
  }, {
    icon: Shield,
    title: "Depressão e Tristeza Profunda",
    description: "Da escuridão à luz, uma jornada de reconstrução. Encontre esperança, propósito e alegria genuine novamente.",
    whatsappText: "%20depress%C3%A3o%20e%20tristeza"
  }];
  return <section id="como-ajudo" className="py-10 md:py-16 lg:py-20 bg-maria">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-ester mb-4 md:mb-6 text-center">
            Como posso <span className="text-rute">transformar</span> sua vida
          </h2>
          <p className="text-base md:text-lg text-ester/70 leading-relaxed text-center">
            Cada ferida carrega uma lição. Cada cicatriz, uma história de superação. 
            Juntas, vamos transformar sua dor em força e seu medo em coragem para viver plenamente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          {services.map((service, index) => <Card key={index} className="border-rute/20 hover:shadow-soft transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur">
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-ester" />
                  </div>
                  
                  <div className="space-y-3 flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-ester">{service.title}</h3>
                    <p className="text-sm md:text-base text-ester/70 leading-relaxed">{service.description}</p>
                    
                    <Button onClick={openModal} className={cn(buttonVariants({
                  variant: "soft",
                  size: "sm"
                }), "w-full sm:w-auto")}>
                      Quero ajuda com isso
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-soft rounded-3xl p-5 md:p-6 lg:p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-ester mb-3 md:mb-4">Como funcionará nossa jornada juntas</h3>
            <p className="text-sm md:text-base text-ester/70 max-w-2xl mx-auto">
              Um processo cuidadoso e estruturado para sua transformação acontecer de forma natural e duradoura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-debora/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ester">1</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-ester mb-2">Acolhimento Inicial</h4>
              <p className="text-ester/70 text-xs md:text-sm">
                Primeira consulta para nos conhecermos, entender sua história e definir objetivos claros para sua transformação.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-rute/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ester">2</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-ester mb-2">Plano Personalizado</h4>
              <p className="text-ester/70 text-xs md:text-sm">
                Criamos um plano terapêutico único, com técnicas da TCC adaptadas às suas necessidades específicas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sara/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ester">3</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-ester mb-2">Transformação Gradual</h4>
              <p className="text-ester/70 text-xs md:text-sm">
                Sessões regulares com exercícios práticos, reflexões e ferramentas para você aplicar no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}