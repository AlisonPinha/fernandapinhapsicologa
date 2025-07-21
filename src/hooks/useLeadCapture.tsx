import { createContext, useContext, useState, ReactNode } from 'react';
import { LeadFormData } from '@/components/LeadCaptureModal';
import { trackModalOpen, trackModalClose, trackFormSubmit, trackWhatsAppClick } from '@/lib/gtm';

interface LeadCaptureContextType {
  isModalOpen: boolean;
  openModal: () => void;
  openModalWithSource: (source: string) => void;
  closeModal: () => void;
  handleWhatsAppRedirect: (data: LeadFormData) => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    trackModalOpen('default');
  };

  const openModalWithSource = (source: string) => {
    setIsModalOpen(true);
    trackModalOpen(source);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    trackModalClose();
  };

  const handleWhatsAppRedirect = (data: LeadFormData) => {
    // Track form submission
    trackFormSubmit(data);
    
    // Format the message to send to WhatsApp
    const message = `Olá, Dra. Fernanda! Acabei de preencher o formulário da sua página.\n\nNome: ${data.name}\nMotivo: ${data.motivation}\n\nGostaria de conversar sobre atendimento psicológico.`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with the formatted message
    const whatsappUrl = `https://wa.me/5571981932301?text=${encodedMessage}`;
    
    // Track WhatsApp click
    trackWhatsAppClick(data);
    
    // Abrir WhatsApp e fechar modal imediatamente
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  return (
    <LeadCaptureContext.Provider value={{
      isModalOpen,
      openModal,
      openModalWithSource,
      closeModal,
      handleWhatsAppRedirect
    }}>
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext);
  if (context === undefined) {
    throw new Error('useLeadCapture must be used within a LeadCaptureProvider');
  }
  return context;
}