import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
export function TestimonialsSection() {
  const testimonials = [{
    name: "P.S.S.L",
    text: "Eu cheguei à terapia cheio de dúvidas e inseguranças, mas encontrei um espaço de acolhimento e compreensão. Aos poucos, estou aprendendo a cuidar de mim de verdade.",
    category: "Ansiedade e Autoestima"
  }, {
    name: "A.C.R.R",
    text: "Nunca pensei que pudesse me sentir tão à vontade para falar sobre coisas que sempre guardei comigo. As sessões me ajudam a entender quem eu sou e a lidar com minhas emoções de forma mais leve.",
    category: "Relacionamentos"
  }, {
    name: "R.M.S.F",
    text: "A terapia tem sido um espaço para respirar, refletir e reorganizar minha vida. Tenho um problema de obesidade que não é fácil, mas o cuidado, a atenção e as técnicas aplicadas me fazem sentir que estou no caminho certo.",
    category: "Autoestima e Corpo"
  }, {
    name: "T.F.R",
    text: "Cada sessão tem sido uma oportunidade de me conhecer melhor. Passei por uma perda na minha vida e isso me abalou demais. A forma como sou ouvido e compreendido me dá forças para enfrentar o que antes parecia impossível.",
    category: "Luto e Superação"
  }, {
    name: "G.S.A",
    text: "Eu estava passando por uma fase muito difícil e não sabia por onde começar. Hoje vejo que terapia foi uma das melhores decisões da minha vida. Me sinto mais em paz e preparada para seguir em frente.",
    category: "Depressão e Recomeço"
  }];
  return <section id="depoimentos" className="py-10 md:py-16 lg:py-20 bg-gradient-soft">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-ester mb-4 md:mb-6 text-center">
            Vidas que já se <span className="text-rute">transformaram</span>
          </h2>
          <p className="text-base md:text-lg text-ester/70 leading-relaxed text-center">
            Cada história é única, mas todas compartilham algo em comum: 
            a coragem de buscar ajuda e a força para se transformar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-6 md:mb-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="border-rute/20 hover:shadow-soft transition-all duration-300 bg-maria/80 backdrop-blur">
              <CardContent className="p-5">
                <div className="space-y-3">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-debora text-debora" />)}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="h-8 w-8 text-rute/20 absolute -top-2 -left-2" />
                    <p className="text-sm md:text-base text-ester/80 italic leading-relaxed pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="pt-3 md:pt-4 border-t border-rute/20">
                    <div className="font-semibold text-ester text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-rute">{testimonial.category}</div>
                  </div>
                </div>
              </CardContent>
            </Card>)}

          {/* Special CTA Card */}
          <Card className="border-debora/40 bg-gradient-warm hover:shadow-elegant transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1">
            <CardContent className="p-5 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-ester/10 flex items-center justify-center mx-auto">
                  <Quote className="h-8 w-8 text-ester" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-ester">
                  Sua história pode ser a próxima
                </h3>
                
                <p className="text-ester/70 text-xs md:text-sm">
                  Centenas de mulheres já encontraram seu caminho. 
                  Que tal dar o primeiro passo para escrever sua transformação?
                </p>

                <a href="https://wa.me/5571981932301?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20minha%20jornada%20de%20transforma%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-ester text-maria rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:scale-105 text-sm md:text-base w-full sm:w-auto">
                  <span className="hidden sm:inline">Começar minha jornada</span>
                  <span className="sm:hidden">Começar jornada</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 bg-maria/60 backdrop-blur rounded-2xl p-5 md:p-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-ester mb-2">200+</div>
            <div className="text-sm md:text-base text-ester/70">100+</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-ester mb-2">95%</div>
            <div className="text-sm md:text-base text-ester/70">Satisfação nos atendimentos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-ester mb-2">4 anos</div>
            <div className="text-sm md:text-base text-ester/70">2 anos</div>
          </div>
        </div>
      </div>
    </section>;
}