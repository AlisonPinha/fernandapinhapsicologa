import { useState } from 'react';
import { X } from 'lucide-react';
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
  phone: string;
  motivation: string;
  agreement: boolean;
}

export function LeadCaptureModal({ isOpen, onClose, onSubmit }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    motivation: '',
    agreement: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Digite um número válido com DDD (ex: 11987654321)';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Este campo é obrigatório';
    }

    if (!formData.agreement) {
      newErrors.agreement = 'Você deve concordar com o uso dos seus dados';
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
        phone: '',
        motivation: '',
        agreement: false
      });
      setErrors({});
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = value;
    
    if (value.length >= 2) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length >= 7) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
    
    setFormData(prev => ({ ...prev, phone: formattedValue }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            🧠 Vamos nos conhecer melhor antes de continuar?
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
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              👤 Seu nome:
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
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              📱 WhatsApp (com DDD):
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="(11) 99999-9999"
              maxLength={15}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
              rows={3}
            />
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreement: checked as boolean }))
              }
              className={errors.agreement ? 'border-red-500' : ''}
            />
            <Label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
              Declaro estar de acordo com o uso dos meus dados para contato.
            </Label>
          </div>
          {errors.agreement && <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>}

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