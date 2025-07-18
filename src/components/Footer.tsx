import { Heart, Instagram, Linkedin } from "lucide-react"
import { useLeadCapture } from "@/hooks/useLeadCapture"

export function Footer() {
  const { openModal } = useLeadCapture();
  const whatsappUrl = "https://wa.me/5571981932301"
  const instagramUrl = "https://www.instagram.com/nandapinha"

  return (
    <footer id="contato" className="bg-maria border-t border-rute/20">
      <div className="container py-10 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-6 md:mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/6e7ea10b-0594-4ca3-a154-79efa330f888.png" 
                alt="Fernanda Pinha Logo" 
                className="h-24 w-24 object-contain"
              />
              <span className="font-serif text-lg md:text-xl font-bold text-ester">
                Fernanda Pinha
              </span>
            </div>
            <p className="text-ester/70 text-xs md:text-sm leading-relaxed">
              Psicóloga especializada em TCC, ajudando mulheres a transformarem 
              dor em força e medo em coragem para viver plenamente.
            </p>
            <div className="text-ester font-medium text-sm md:text-base">
              CRP 03/32557
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-ester text-base md:text-lg">Navegação</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#inicio" className="text-ester/70 hover:text-rute transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-ester/70 hover:text-rute transition-colors">
                  Sobre Fernanda
                </a>
              </li>
              <li>
                <a href="#como-ajudo" className="text-ester/70 hover:text-rute transition-colors">
                  Como Posso Ajudar
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-ester/70 hover:text-rute transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-ester text-base md:text-lg">Especialidades</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li className="text-ester/70">Ansiedade e Pânico</li>
              <li className="text-ester/70">Relacionamentos Tóxicos</li>
              <li className="text-ester/70">Autoestima e Autoconfiança</li>
              <li className="text-ester/70">Depressão e Tristeza</li>
              <li className="text-ester/70">Terapia para Adolescentes</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-ester text-base md:text-lg">Contato</h3>
            <div className="space-y-2">
              <button 
                onClick={openModal}
                className="flex items-center gap-2 text-ester/70 hover:text-rute transition-colors text-sm"
              >
                <div className="w-4 h-4 rounded bg-rute/20 flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                (71) 98193-2301
              </button>
              
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ester/70 hover:text-rute transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                @nandapinha
              </a>

              <div className="text-ester/70 text-xs md:text-sm">
                📍 Atendimento Online
                <br />
                <span className="text-xs">Todo Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-soft rounded-2xl p-4 md:p-5 mb-5 md:mb-6 text-center">
          <p className="text-ester italic font-medium text-sm md:text-base text-center">
            "Entre a dor e a liberdade, existe um lugar: aqui. 
            Um espaço onde você pode se acolher, se reconhecer e se transformar."
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-rute/20 pt-5 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-ester/60 text-xs md:text-sm text-center md:text-left">
            © 2025 Fernanda Pinha - Psicóloga CRP 03/32557. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ester/60 hover:text-rute transition-colors text-xs md:text-sm"
            >
              Política de Privacidade
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ester/60 hover:text-rute transition-colors text-xs md:text-sm"
            >
              Termos de Uso
            </a>
          </div>
        </div>

        {/* Heart */}
        <div className="text-center mt-5 md:mt-6">
          <Heart className="h-6 w-6 text-debora mx-auto" />
        </div>
      </div>
    </footer>
  )
}