import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"
import { useLeadCapture } from "@/hooks/useLeadCapture"

export function FaqSection() {
  const { openModal } = useLeadCapture();

  const faqs = [
    {
      question: "Como sei se preciso de terapia?",
      answer: "Se você sente que suas emoções estão te controlando ao invés de você controlá-las, se relacionamentos causam mais dor que alegria, ou se a ansiedade está limitando sua vida - estes são sinais claros. Mas lembre-se: você não precisa estar 'quebrada' para buscar terapia. É um investimento no seu bem-estar e crescimento pessoal."
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "Cada jornada é única. Algumas pessoas sentem alívio significativo em poucas sessões, outras precisam de mais tempo para transformações profundas. Trabalho com metas claras e avaliamos o progresso regularmente. Meu compromisso é te preparar para a autonomia emocional, sem criar dependência."
    },
    {
      question: "Como funciona a terapia online?",
      answer: "Atendo por videoconferência em ambiente seguro e sigiloso. Você precisa apenas de um local privado e conexão estável. A terapia online é regulamentada pelo Conselho Federal de Psicologia e tem a mesma eficácia do atendimento presencial, com a vantagem da comodidade e acessibilidade."
    },
    {
      question: "Como sei se você é a terapeuta certa para mim?",
      answer: "Na primeira consulta, você sentirá se existe conexão e confiança entre nós. Meu compromisso é criar um espaço seguro onde você se sinta acolhida e compreendida. Se não houver identificação, te ajudo a encontrar o melhor caminho para sua jornada."
    },
    {
      question: "Você atende casos de ansiedade severa?",
      answer: "Sim, sou especializada em transtornos de ansiedade, incluindo pânico e fobias. A TCC é uma das abordagens mais eficazes para ansiedade, com resultados comprovados cientificamente. Trabalhamos com técnicas específicas para cada tipo de ansiedade."
    },
    {
      question: "Como é o sigilo profissional?",
      answer: "Seu sigilo é **prioridade**. Tudo que conversamos fica entre nós, protegido pelo Código de Ética da Psicologia. Nossas sessões são criptografadas e jamais gravadas. Você pode se sentir completamente segura para compartilhar o que precisar."
    },
    {
      question: "Você atende adolescentes?",
      answer: "Sim, atendo adolescentes a partir dos 14 anos. Trabalho questões como ansiedade escolar, relacionamentos, autoestima, e transições da adolescência. Para menores de 18 anos, preciso da autorização dos responsáveis."
    },
    {
      question: "E se eu não me sentir confortável?",
      answer: "A relação terapêutica é baseada na confiança. Se em algum momento você não se sentir à vontade, podemos conversar sobre isso abertamente. O importante é que você se sinta acolhida e segura em nossa jornada juntas."
    },
    {
      question: "Posso cancelar uma sessão?",
      answer: "Sim, com antecedência de 24 horas. Entendo que imprevistos acontecem. Minha prioridade é que você se sinta respeitada e compreendida em todos os aspectos do nosso trabalho juntas."
    },
    {
      question: "Qual a diferença da TCC para outras terapias?",
      answer: "A TCC é focada no presente, prática e baseada em evidências científicas. Trabalhamos identificando e modificando padrões de pensamento que causam sofrimento. É uma abordagem objetiva, mas sempre com o cuidado e acolhimento que você merece."
    }
  ]

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-gradient-soft">
      <div className="container max-w-4xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-ester mb-4 md:mb-6 text-center">
            Perguntas que chegam ao 
            <span className="text-rute"> coração</span>
          </h2>
          <p className="text-base md:text-lg text-ester/70 leading-relaxed max-w-2xl mx-auto text-center">
            Sei que dar o primeiro passo pode gerar muitas dúvidas. 
            Aqui estão as respostas para as perguntas mais frequentes que recebo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-6 md:mb-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-rute/20 rounded-2xl px-5 bg-maria/60 backdrop-blur"
              >
                <AccordionTrigger className="text-left text-ester hover:text-rute [&[data-state=open]]:text-rute font-medium text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ester/80 leading-relaxed pt-2 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-warm rounded-3xl p-5 md:p-6 text-center">
          <div className="space-y-4 md:space-y-5">
            <div className="w-16 h-16 rounded-full bg-ester/10 flex items-center justify-center mx-auto">
              <MessageCircle className="h-8 w-8 text-ester" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif font-bold text-ester">
              Ainda tem dúvidas?
            </h3>
            
            <p className="text-ester/70 max-w-md mx-auto text-sm md:text-base">
              Cada pessoa é única, e talvez sua pergunta seja diferente. 
              Estou aqui para esclarecer qualquer dúvida que você tenha.
            </p>

            <Button 
              onClick={openModal}
              className={cn(buttonVariants({ variant: "elegant", size: "lg" }), "w-full sm:w-auto")}
            >
              <span className="hidden sm:inline">Fazer minha pergunta no WhatsApp</span>
              <span className="sm:hidden">Fazer pergunta</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}