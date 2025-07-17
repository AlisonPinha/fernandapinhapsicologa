import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LeadCaptureProvider } from "@/hooks/useLeadCapture";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { useLeadCapture } from "@/hooks/useLeadCapture";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isModalOpen, closeModal, handleWhatsAppRedirect } = useLeadCapture();
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={handleWhatsAppRedirect} 
      />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LeadCaptureProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </LeadCaptureProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
