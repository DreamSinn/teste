import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { 
  CreditCard, 
  Lock, 
  Check, 
  X, 
  Heart, 
  Star,
  Shield,
  Download
} from 'lucide-react';

const ModalCheckout = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: info, 2: payment, 3: success
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      // Analytics tracking
      console.log(`Checkout step ${step + 1}`);
      // dataLayer.push({event: 'checkout_step', step: step + 1});
    }
  };

  const handlePayment = () => {
    // Simular processamento de pagamento
    console.log('Payment processed:', formData);
    // dataLayer.push({event: 'purchase', value: 12.90, currency: 'BRL'});
    setStep(3);
  };

  const resetModal = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: ''
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Step 1: Informações pessoais */}
        {step === 1 && (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-gray-800">
                Quase lá! Vamos finalizar sua compra 🎨
              </DialogTitle>
            </DialogHeader>

            {/* Resumo do produto */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">Pacote Exclusivo Bobbie Goods</h3>
                  <p className="text-gray-600">50 ilustrações para colorir + bônus</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">4.9/5 • 2.300+ downloads</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 line-through">R$ 29,90</div>
                  <div className="text-2xl font-bold text-green-600">R$ 12,90</div>
                </div>
              </div>
            </div>

            {/* Formulário de informações */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-800">Suas informações</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enviaremos o link de download para este e-mail
                </p>
              </div>
            </div>

            {/* Garantias */}
            <div className="grid md:grid-cols-3 gap-4 py-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download imediato</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Garantia 7 dias</span>
              </div>
            </div>

            <Button 
              onClick={handleNextStep}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg font-semibold"
              disabled={!formData.name || !formData.email || !formData.phone}
            >
              Continuar para Pagamento
            </Button>
          </div>
        )}

        {/* Step 2: Pagamento */}
        {step === 2 && (
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-gray-800">
                Escolha a forma de pagamento 💳
              </DialogTitle>
            </DialogHeader>

            {/* Métodos de pagamento */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === 'credit' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                    <div className="text-left">
                      <div className="font-semibold">Cartão de Crédito</div>
                      <div className="text-sm text-gray-600">Visa, Master, Elo</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === 'pix' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      PIX
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">PIX</div>
                      <div className="text-sm text-gray-600">Aprovação imediata</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Formulário de cartão */}
            {paymentMethod === 'credit' && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-800">Dados do cartão</h4>
                
                <div>
                  <Label htmlFor="cardNumber">Número do cartão *</Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="mt-1"
                    maxLength={19}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Validade *</Label>
                    <Input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/AA"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="mt-1"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className="mt-1"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cardName">Nome no cartão *</Label>
                  <Input
                    id="cardName"
                    type="text"
                    placeholder="Nome como está no cartão"
                    value={formData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            {/* PIX */}
            {paymentMethod === 'pix' && (
              <div className="text-center py-8">
                <div className="w-32 h-32 bg-gray-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">QR Code PIX</span>
                </div>
                <p className="text-gray-600">
                  Após clicar em "Finalizar", você receberá o QR Code para pagamento
                </p>
              </div>
            )}

            {/* Resumo final */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span>Pacote Bobbie Goods</span>
                <span>R$ 12,90</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span>Desconto de lançamento</span>
                <span>-R$ 17,00</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span className="text-green-600">R$ 12,90</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1"
              >
                Voltar
              </Button>
              <Button 
                onClick={handlePayment}
                className="flex-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
              >
                <Lock className="w-4 h-4 mr-2" />
                Finalizar Compra
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Sucesso */}
        {step === 3 && (
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Parabéns! Compra realizada com sucesso! 🎉
              </h2>
              <p className="text-lg text-gray-600">
                Seu pacote Bobbie Goods está a caminho!
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-lg text-gray-800 mb-4">O que acontece agora?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
                  <span>E-mail com link de download enviado para <strong>{formData.email}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">2</div>
                  <span>Backup do link enviado via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">3</div>
                  <span>Acesso vitalício aos seus desenhos</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Ir para Downloads
              </Button>
              
              <p className="text-sm text-gray-600">
                Não recebeu o e-mail? Verifique a caixa de spam ou entre em contato conosco!
              </p>
            </div>

            {/* Social sharing */}
            <div className="border-t pt-6">
              <p className="text-gray-600 mb-4">
                Compartilhe suas pinturas com a hashtag <span className="font-semibold text-purple-600">#BobbieGoodies</span> e apareça na nossa galeria! 📸
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://instagram.com/bobbiegoods" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600"
                >
                  Instagram
                </a>
                <a 
                  href="https://facebook.com/bobbiegoods"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalCheckout;
