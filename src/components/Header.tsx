import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

export function Header() {
  const whatsappUrl = "https://wa.me/5571981932301?text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F%20%F0%9F%98%8A"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rute/20 bg-maria/95 backdrop-blur supports-[backdrop-filter]:bg-maria/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
          <span className="font-serif text-xl font-bold text-ester">
            Fernanda Pinha
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-ester hover:text-rute transition-colors">
            Início
          </a>
          <a href="#sobre" className="text-ester hover:text-rute transition-colors">
            Sobre
          </a>
          <a href="#como-ajudo" className="text-ester hover:text-rute transition-colors">
            Como Ajudo
          </a>
          <a href="#depoimentos" className="text-ester hover:text-rute transition-colors">
            Depoimentos
          </a>
          <a href="#contato" className="text-ester hover:text-rute transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "cta", size: "default" }))}
        >
          Quero me acolher
        </a>
      </div>
    </header>
  )
}