import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"
import { useLeadCapture } from "@/hooks/useLeadCapture"

export function Header() {
  const { openModal } = useLeadCapture();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rute/20 bg-maria/95 backdrop-blur supports-[backdrop-filter]:bg-maria/60">
      <div className="container flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-primary"></div>
          <span className="font-serif text-lg md:text-xl font-bold text-ester">
            Fernanda Pinha
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#inicio" className="text-ester hover:text-rute transition-colors text-sm">
            Início
          </a>
          <a href="#sobre" className="text-ester hover:text-rute transition-colors text-sm">
            Sobre
          </a>
          <a href="#como-ajudo" className="text-ester hover:text-rute transition-colors text-sm">
            Como Ajudo
          </a>
          <a href="#depoimentos" className="text-ester hover:text-rute transition-colors text-sm">
            Depoimentos
          </a>
          <a href="#contato" className="text-ester hover:text-rute transition-colors text-sm">
            Contato
          </a>
        </nav>

        {/* CTA Button */}
        <Button 
          onClick={openModal}
          className={cn(buttonVariants({ variant: "cta", size: "sm" }), "hidden sm:inline-flex")}
        >
          <span className="hidden md:inline">Quero me acolher</span>
          <span className="md:hidden">Acolher</span>
        </Button>
        
        {/* Mobile CTA */}
        <Button 
          onClick={openModal}
          className={cn(buttonVariants({ variant: "cta", size: "sm" }), "sm:hidden")}
        >
          Contato
        </Button>
      </div>
    </header>
  )
}