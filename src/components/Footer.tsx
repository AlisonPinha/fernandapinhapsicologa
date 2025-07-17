import { Heart, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const whatsappUrl = "https://wa.me/5571981932301"
  const instagramUrl = "https://www.instagram.com/nandapinha"

  return (
    <footer id="contato" className="bg-maria border-t border-rute/20">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
              <span className="font-serif text-xl font-bold text-ester">
                Fernanda Pinha
              </span>
            </div>
            <p className="text-ester/70 text-sm leading-relaxed">
              Psicóloga especializada em TCC, ajudando mulheres a transformarem 
              dor em força e medo em coragem para viver plenamente.
            </p>
            <div className="text-ester font-medium">
              CRP 03/32557
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ester">Navegação</h3>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-4">
            <h3 className="font-semibold text-ester">Especialidades</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-ester/70">Ansiedade e Pânico</li>
              <li className="text-ester/70">Relacionamentos Tóxicos</li>
              <li className="text-ester/70">Autoestima e Autoconfiança</li>
              <li className="text-ester/70">Depressão e Tristeza</li>
              <li className="text-ester/70">Terapia para Adolescentes</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ester">Contato</h3>
            <div className="space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ester/70 hover:text-rute transition-colors text-sm"
              >
                <div className="w-4 h-4 rounded bg-rute/20 flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                (71) 98193-2301
              </a>
              
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ester/70 hover:text-rute transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                @nandapinha
              </a>

              <div className="text-ester/70 text-sm">
                📍 Atendimento Online
                <br />
                <span className="text-xs">Todo Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-soft rounded-2xl p-4 md:p-6 mb-6 md:mb-8 text-center">
          <p className="text-ester italic font-medium">
            "Entre a dor e a liberdade, existe um lugar: aqui. 
            Um espaço onde você pode se acolher, se reconhecer e se transformar."
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-rute/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-ester/60 text-sm">
            © 2025 Fernanda Pinha - Psicóloga CRP 03/32557. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ester/60 hover:text-rute transition-colors text-sm"
            >
              Política de Privacidade
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ester/60 hover:text-rute transition-colors text-sm"
            >
              Termos de Uso
            </a>
          </div>
        </div>

        {/* Heart */}
        <div className="text-center mt-6 md:mt-8">
          <Heart className="h-6 w-6 text-debora mx-auto" />
        </div>
      </div>
    </footer>
  )
}