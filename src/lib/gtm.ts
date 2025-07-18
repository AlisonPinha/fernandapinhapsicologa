// Google Tag Manager utility functions

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

export const gtmPush = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

// GTM Event tracking functions
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  gtmPush({
    event: eventName,
    ...eventData
  });
};

// Specific tracking functions for the therapy website
export const trackModalOpen = (source: string) => {
  trackEvent('modal_open', {
    modal_type: 'lead_capture',
    source: source,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackModalClose = () => {
  trackEvent('modal_close', {
    modal_type: 'lead_capture',
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackFormSubmit = (formData: { name: string; motivation: string }) => {
  trackEvent('form_submit', {
    form_type: 'lead_capture',
    form_name: 'contact_form',
    user_name: formData.name,
    motivation: formData.motivation,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackWhatsAppClick = (formData: { name: string; motivation: string }) => {
  trackEvent('whatsapp_click', {
    source: 'lead_form',
    user_name: formData.name,
    motivation: formData.motivation,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackButtonClick = (buttonText: string, buttonLocation: string) => {
  trackEvent('button_click', {
    button_text: buttonText,
    button_location: buttonLocation,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: document.title,
    page_name: pageName,
    page_location: window.location.href,
    timestamp: new Date().toISOString()
  });
};