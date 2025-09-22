import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { 
  Download, 
  Star, 
  Clock, 
  Shield, 
  Heart,
  Zap,
  Gift,
  CheckCircle
} from 'lucide-react';

const Pricing = ({ onOpenCheckout }) => {
  const ctaVariant = \'A\'; // Variação fixa para A/B testing
  
  const ctaVariations = {
    A: {
      text: "Quero meus Goodies!",
      icon: <Download className="w-5 h-5" />
    },
    B: {
      text: "Baixar Agora 🎁",
      icon: <Gift className="w-5 h-5" />
    },
    C: {
      text: "Levar Pacote Completo — R$ 12,90",
      icon: <Zap className="w-5 h-5" />
    }
  };

  const handlePurchaseClick = () => {
    console.log('Purchase CTA clicked:', ctaVariations[ctaVariant].text);
    // dataLayer.push({event: 'cta_click', label: 'purchase_main', variant: ctaVariant});
    onOpenCheckout();
  };

  const features = [
    "50 ilustrações em alta resolução (300 DPI)",
    "PDF otimizado para impressão A4",
    "Guia completo de impressão e técnicas",
    "Paleta de cores digital (bônus)",
    "Acesso vitalício e downloads ilimitados",
    "Suporte via WhatsApp",
    "Garantia de 7 dias ou seu dinheiro de volta"
  ];

  return (
    <section className=\"py-16 lg:py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden\">
      {/* Elementos decorativos de fundo */}
      <div className=\"absolute inset-0 opacity-10\">
        <div className=\"absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl\"></div>
        <div className=\"absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-red-300 to-pink-300 rounded-full blur-2xl\"></div>
        <div className=\"absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-xl\"></div>
      </div>
      
      <div className=\"container mx-auto px-4 relative z-10\">
        {/* Cabeçalho aprimorado */}
        <div className=\"text-center mb-20\">
          <div className=\"inline-flex items-center gap-2 bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 text-red-800 px-6 py-3 rounded-full text-sm font-semibold shadow-xl border border-red-300/30 backdrop-blur-sm mb-6 animate-pulse\">
            <Zap className=\"w-4 h-4 fill-current text-red-600\" />
            <span className=\"bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold\">
              Oferta Limitada
            </span>
            <Gift className=\"w-4 h-4 text-red-600\" />
          </div>
          
          <h2 className=\"text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight\">
            <span className=\"bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm\">
              Oferta Especial de Lançamento! 🔥
            </span>
          </h2>
          
          <p className=\"text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium\">
            Por <span className=\"text-red-600 font-bold\">tempo limitado</span>, você leva o pacote completo com 
            <span className=\"text-orange-600 font-bold\"> desconto exclusivo</span> + bônus que valem mais que o 
            <span className=\"text-yellow-600 font-bold\">preço do produto</span>!
          </p>
        </div>

        {/* Card de preço principal */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-gradient-to-r from-yellow-400 to-orange-500 overflow-hidden">
            {/* Badge de desconto */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                -57% OFF
              </div>
            </div>

            {/* Conteúdo do card */}
            <div className="p-8 lg:p-12 pt-16">
              {/* Título do pacote */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Pacote Exclusivo Bobbie Goods
                </h3>
                <p className="text-gray-600 text-lg">
                  50 ilustrações fofas + bônus de lançamento
                </p>
              </div>

              {/* Preços */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-400 line-through">R$ 29,90</span>
                  <span className="text-5xl font-bold text-green-600">R$ 12,90</span>
                </div>
                <p className="text-gray-600">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              {/* Lista de benefícios */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Principal */}
              <div className="space-y-4">
                <Button 
                  onClick={handlePurchaseClick}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {ctaVariations[ctaVariant].icon}
                  <span className="ml-2">{ctaVariations[ctaVariant].text}</span>
                </Button>

                {/* Informações de segurança */}
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-blue-500" />
                    <span>Download Imediato</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Garantia 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de urgência */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-8 h-8 animate-pulse" />
              <h3 className="text-3xl font-bold">Oferta por Tempo Limitado!</h3>
            </div>
            
            <p className="text-xl mb-6 opacity-90">
              Esta é uma oferta especial de lançamento. O preço normal será R$ 29,90 em breve!
            </p>

            {/* Contador fake (apenas visual) */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">01</div>
                <div className="text-sm opacity-75">Dias</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm opacity-75">Horas</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">32</div>
                <div className="text-sm opacity-75">Min</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm opacity-75">Seg</div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handlePurchaseClick}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Garantir Meu Desconto Agora!
              </Button>
              
              <p className="text-sm opacity-75">
                Apenas <strong>47 pacotes restantes</strong> com este preço especial
              </p>
            </div>
          </div>
        </div>

        {/* Seção de bônus */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Bônus Exclusivos de Lançamento 🎁
            </h3>
            <p className="text-lg text-gray-600">
              Quem comprar hoje ganha estes bônus que valem <span className="font-bold text-green-600">R$ 19,90</span> totalmente GRÁTIS!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Paleta de Cores Digital
              </h4>
              <p className="text-gray-600">
                Sugestões de cores para cada desenho, perfeita para iniciantes e quem busca inspiração.
              </p>
              <div className="text-green-600 font-bold mt-2">Valor: R$ 9,90</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Guia de Técnicas Avançadas
              </h4>
              <p className="text-gray-600">
                Dicas profissionais de colorir, materiais recomendados e técnicas para resultados incríveis.
              </p>
              <div className="text-green-600 font-bold mt-2">Valor: R$ 10,00</div>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
            <p className="text-lg font-semibold text-gray-800">
              Total dos bônus: <span className="line-through text-gray-500">R$ 19,90</span>
            </p>
            <p className="text-2xl font-bold text-green-600">
              Seu preço hoje: <span className="bg-yellow-300 text-yellow-800 px-3 py-1 rounded-lg">GRÁTIS!</span>
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Pricing;
