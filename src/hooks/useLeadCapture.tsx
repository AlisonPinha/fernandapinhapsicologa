import { createContext, useContext, useState, ReactNode } from 'react';
import { LeadFormData } from '@/components/LeadCaptureModal';

interface LeadCaptureContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleWhatsAppRedirect: (data: LeadFormData) => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWhatsAppRedirect = (data: LeadFormData) => {
    // Format the message to send to WhatsApp
    const message = `Olá, Dra. Fernanda! Acabei de preencher o formulário da sua página.

Nome: ${data.name}
Motivo: ${data.motivation}

Gostaria de conversar sobre atendimento psicológico.`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with the formatted message
    const whatsappUrl = `https://wa.me/5571981932301?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
    
    // Close the modal
    closeModal();
  };

  return (
    <LeadCaptureContext.Provider value={{
      isModalOpen,
      openModal,
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