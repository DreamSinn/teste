import { useState } from \'react\';
import { Button } from \'@/components/ui/button.jsx\';
import { Input } from \'@/components/ui/input.jsx\';
import { Heart, Star, Download, Sparkles, Gift } from \'lucide-react\';

const Hero = () => {
  const [email, setEmail] = useState(\'\');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const heroVariant = \'A\'; // Variação fixa para A/B testing
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Analytics tracking
      console.log('Email capture:', email);
      // dataLayer.push({event: 'email_capture', email: email});
    }
  };

  const handleMainCTA = () => {
    console.log('Main CTA clicked');
    // dataLayer.push({event: 'cta_click', label: 'download_primary'});
  };

  const heroTitles = {
    A: "Pacote Exclusivo de Bobbie Goods para Colorir 🎨✨",
    B: "Desenhos fofos pra você pintar e viralizar 🎨"
  };

  return (
    <section className=\"relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden\">
      {/* Elementos decorativos de fundo aprimorados */}
      <div className=\"absolute inset-0 opacity-20\">
        <div className=\"absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full animate-bounce shadow-lg\"></div>
        <div className=\"absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-pulse shadow-lg\"></div>
        <div className=\"absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full animate-bounce delay-300 shadow-lg\"></div>
        <div className=\"absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full animate-pulse delay-500 shadow-lg\"></div>
        <div className=\"absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-green-300 to-green-400 rounded-full animate-bounce delay-700 shadow-md\"></div>
        <div className=\"absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full animate-pulse delay-1000 shadow-md\"></div>
      </div>
      
      {/* Padrão de pontos decorativo */}
      <div className=\"absolute inset-0 opacity-5\">
        <div className=\"absolute top-10 left-1/4 w-2 h-2 bg-pink-400 rounded-full\"></div>
        <div className=\"absolute top-32 right-1/4 w-2 h-2 bg-purple-400 rounded-full\"></div>
        <div className=\"absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full\"></div>
        <div className=\"absolute bottom-10 right-1/3 w-2 h-2 bg-yellow-400 rounded-full\"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda - Conteúdo */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge de edição limitada aprimorado */}
            <div className=\"inline-flex items-center gap-2 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold shadow-xl border border-purple-300/30 backdrop-blur-sm animate-pulse\">
              <Sparkles className=\"w-4 h-4 fill-current text-purple-600\" />
              <span className=\"bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold\">
                Edição Limitada
              </span>
              <span className=\"text-purple-700\">• 200 cópias restantes</span>
              <Gift className=\"w-4 h-4 text-purple-600\" />
            </div>

            {/* Título principal aprimorado */}
            <h1 className=\"text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight\">
              <span className=\"bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm\">
                {heroTitles[heroVariant]}
              </span>
            </h1>

            {/* Subtítulo aprimorado */}
            <p className=\"text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed font-medium max-w-2xl\">
              <span className=\"text-gray-800 font-semibold\">50 ilustrações fofinhas</span>, prontas para imprimir e pintar — 
              <span className=\"text-pink-600 font-semibold\"> relaxe, crie</span> e 
              <span className=\"text-purple-600 font-semibold\">compartilhe</span> sua versão no TikTok.
            </p>

            {/* Benefícios principais aprimorados */}
            <div className=\"space-y-4 text-left bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50\">
              <div className=\"flex items-center gap-4 text-gray-800 group hover:scale-105 transition-transform duration-300\">
                <div className=\"w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow\">
                  <span className=\"text-sm font-bold\">✓</span>
                </div>
                <span className=\"text-lg font-semibold\">50 desenhos em alta resolução</span>
              </div>
              <div className=\"flex items-center gap-4 text-gray-800 group hover:scale-105 transition-transform duration-300\">
                <div className=\"w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow\">
                  <span className=\"text-sm font-bold\">✓</span>
                </div>
                <span className=\"text-lg font-semibold\">PDF pronto para imprimir (A4, 300 DPI)</span>
              </div>
              <div className=\"flex items-center gap-4 text-gray-800 group hover:scale-105 transition-transform duration-300\">
                <div className=\"w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow\">
                  <span className=\"text-sm font-bold\">✓</span>
                </div>
                <span className=\"text-lg font-semibold\">Uso pessoal + guia de impressão</span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Button 
                onClick={handleMainCTA}
                className="w-full lg:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-6 h-6 mr-2" />
                Quero meus Goodies!
              </Button>
              
              {/* Preço e garantia */}
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-800">
                  <span className="line-through text-gray-400 text-lg mr-2">R$ 29,90</span>
                  <span className="text-green-600">R$ 12,90</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Satisfação garantida — reembolso em 7 dias se não curtir.
                </p>
              </div>
            </div>

            {/* Captura de email */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Quer testar antes? Baixe 3 páginas grátis! 💖
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border-pink-300 focus:border-purple-500"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl"
                  >
                    Quero a prévia grátis
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Enviaremos 3 páginas grátis para testar — sem spam.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-green-600 fill-current" />
                  </div>
                  <p className="text-green-700 font-medium">
                    Pronto! O e-mail com a prévia foi enviado — verifique a caixa de entrada.
                  </p>
                </div>
              )}
            </div>

            {/* Prova social */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 estrelas</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Mais de 2.300 downloads em 7 dias</span>
            </div>
          </div>

          {/* Coluna direita - Imagem hero */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Placeholder para imagem principal */}
              <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                  <p className="text-lg font-medium">Prévia do Pacote</p>
                  <p className="text-sm">Bobbie Goods para Colorir</p>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>

            {/* Contador de urgência */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              ⏰ Lançamento: 48h com desconto
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
