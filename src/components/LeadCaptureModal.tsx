import { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LeadFormData) => void;
}

export interface LeadFormData {
  name: string;
  motivation: string;
}

export function LeadCaptureModal({ isOpen, onClose, onSubmit }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    motivation: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Este campo é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        name: '',
        motivation: ''
      });
      setErrors({});
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Heart className="h-5 w-5 text-debora" />
            Vamos nos conhecer melhor antes de continuar?
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Preencha abaixo para que a Dra. Fernanda possa entender como te ajudar da melhor forma.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Heart className="h-4 w-4 text-debora" />
              Seu nome:
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Digite seu nome completo"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>


          <div>
            <Label htmlFor="motivation" className="text-sm font-medium text-gray-700">
              💬 O que te motivou a buscar ajuda psicológica?
            </Label>
            <Textarea
              id="motivation"
              value={formData.motivation}
              onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
              placeholder="Conte um pouco sobre o que te trouxe até aqui..."
              className={errors.motivation ? 'border-red-500' : ''}
              rows={4}
            />
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
          </div>


          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-medium transition-colors"
          >
            Quero falar com a Dra. Fernanda no WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}