import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"
import { Heart, ArrowRight, Clock, Shield } from "lucide-react"

export function CtaSection() {
  const whatsappUrl = "https://wa.me/5571981932301?text=Ol%C3%A1%20Fernanda%2C%20estou%20pronta%20para%20dar%20o%20primeiro%20passo.%20Gostaria%20de%20agendar%20minha%20consulta%20de%20acolhimento."

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-ester relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-maria"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-debora"></div>
        <div className="absolute top-60 right-40 w-16 h-16 rounded-full bg-rute"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-5 md:space-y-6 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maria/20 text-maria">
              <Heart className="h-4 w-4 text-debora" />
              <span className="text-sm font-medium">Sua transformação começa agora</span>
            </div>

            <h2 className="text-3xl md:text-6xl font-serif font-bold text-maria leading-tight">
              Entre a dor e a liberdade,
              <br />
              <span className="text-debora">escolha se acolher.</span>
            </h2>

            <p className="text-lg md:text-xl text-maria/80 leading-relaxed max-w-3xl mx-auto">
              Você não precisa carregar suas feridas sozinha. Não precisa fingir que está tudo bem 
              quando não está. Sua dor é válida, e sua cura também é possível.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-6 md:mb-8">
            <div className="bg-maria/10 backdrop-blur rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-debora/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-debora" />
              </div>
              <h3 className="font-semibold text-maria mb-2">Acolhimento Real</h3>
              <p className="text-sm text-maria/70">Espaço seguro para suas verdades</p>
            </div>

            <div className="bg-maria/10 backdrop-blur rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-debora/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-debora" />
              </div>
              <h3 className="font-semibold text-maria mb-2">Método Científico</h3>
              <p className="text-sm text-maria/70">TCC com resultados comprovados</p>
            </div>

            <div className="bg-maria/10 backdrop-blur rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-debora/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-debora" />
              </div>
              <h3 className="font-semibold text-maria mb-2">Primeira Consulta</h3>
              <p className="text-sm text-maria/70">R$ 150 (valor especial)</p>
            </div>

            <div className="bg-maria/10 backdrop-blur rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-debora/20 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-debora" />
              </div>
              <h3 className="font-semibold text-maria mb-2">Online</h3>
              <p className="text-sm text-maria/70">No conforto da sua casa</p>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-debora/20 backdrop-blur rounded-2xl p-4 md:p-5 mb-5 md:mb-6">
            <p className="text-maria font-medium">
              🕐 <strong>Apenas 3 vagas disponíveis esta semana</strong> para primeiras consultas com desconto especial
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-maria text-ester font-bold text-lg rounded-xl hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
            >
              Garantir minha vaga com desconto
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#depoimentos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-maria text-maria font-semibold text-lg rounded-xl hover:bg-maria hover:text-ester transition-all duration-300"
            >
              Ver mais depoimentos
            </a>
          </div>

          {/* Trust */}
          <p className="text-maria/60 text-sm mt-6">
            ✨ Mais de 200 mulheres já escolheram se acolher • CRP 03/32557 • Atendimento sigiloso e seguro
          </p>
        </div>
      </div>
    </section>
  )
}