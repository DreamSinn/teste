import { Download, Printer, Heart, Palette, Star, Gift, ArrowRight, Sparkles, Zap } from \'lucide-react\';

const Features = () => {
  const features = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "50 Desenhos em Alta Resolução",
      description: "Cada ilustração foi criada com 300 DPI, garantindo qualidade perfeita na impressão. Você recebe tudo em formato PDF otimizado para papel A4.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "PDF Pronto para Imprimir",
      description: "Não precisa se preocupar com configurações! O arquivo já vem formatado para impressão doméstica ou profissional, com margens perfeitas.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Uso Pessoal + Guia Completo",
      description: "Além dos desenhos, você recebe um guia com dicas de impressão, sugestões de materiais e técnicas para deixar suas pinturas ainda mais lindas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Paleta de Cores Digital",
      description: "Bônus exclusivo: paleta com sugestões de cores para cada desenho, perfeita para quem quer inspiração ou está começando a colorir.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Estilo Bobbie Goods Autêntico",
      description: "Todas as ilustrações seguem o estilo fofo e minimalista que você ama, com traços suaves e personagens adoráveis que conquistam qualquer idade.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Acesso Imediato e Vitalício",
      description: "Após a compra, você recebe o link de download na hora e pode baixar quantas vezes quiser. Seus desenhos ficam salvos para sempre!",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Baixe",
      description: "Receba o link por e-mail e baixe o PDF completo",
      icon: <Download className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Imprima",
      description: "Imprima em casa ou na gráfica, quantas vezes quiser",
      icon: <Printer className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Pinte & Compartilhe",
      description: "Relaxe pintando e compartilhe no TikTok com #BobbieGoodies",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className=\"py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden\">
      {/* Elementos decorativos de fundo */}
      <div className=\"absolute inset-0 opacity-5\">
        <div className=\"absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl\"></div>
        <div className=\"absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl\"></div>
      </div>
      
      <div className=\"container mx-auto px-4 relative z-10\">
        {/* Seção \"O que você recebe\" aprimorada */}
        <div className=\"text-center mb-20\">
          <div className=\"inline-flex items-center gap-2 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold shadow-xl border border-purple-300/30 backdrop-blur-sm mb-6\">
            <Gift className=\"w-4 h-4 fill-current text-purple-600\" />
            <span className=\"bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold\">
              Pacote Completo
            </span>
            <Sparkles className=\"w-4 h-4 text-purple-600\" />
          </div>
          
          <h2 className=\"text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight\">
            <span className=\"bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm\">
              O que você vai receber 🎁
            </span>
          </h2>
          
          <p className=\"text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium\">
            Um <span className=\"text-purple-600 font-bold\">pacote completo</span> pensado para você ter a 
            <span className=\"text-pink-600 font-bold\"> melhor experiência</span> de colorir, desde o download até o 
            <span className=\"text-blue-600 font-bold\">compartilhamento</span> das suas criações.
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              {/* Ícone */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Conteúdo */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Seção "Como funciona" */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Como funciona? Super simples! ✨
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em apenas 3 passos você já está pintando e relaxando com seus novos desenhos favoritos.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Linha conectora (apenas entre os steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 transform translate-x-1/2 z-0"></div>
                )}
                
                {/* Conteúdo do step */}
                <div className="relative z-10">
                  {/* Número */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md text-purple-600 mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Título e descrição */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA da seção */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Mais de 2.300 pessoas já baixaram e adoraram!
            </div>
            <p className="text-gray-600 text-lg">
              Junte-se à nossa comunidade de artistas e compartilhe suas criações com 
              <span className="font-semibold text-purple-600"> #BobbieGoodies</span>
            </p>
          </div>
        </div>

        {/* Seção de bônus limitado */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🎉 Bônus de Lançamento - Apenas 48h!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Quem comprar nas próximas 48 horas ganha de BÔNUS:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Palette className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Paleta Digital Exclusiva</h3>
                <p className="text-sm opacity-90">Sugestões de cores para cada desenho</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <Star className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Guia de Técnicas</h3>
                <p className="text-sm opacity-90">Dicas profissionais de colorir</p>
              </div>
            </div>
            
            <div className="text-2xl font-bold mb-2">
              Valor dos bônus: <span className="line-through opacity-75">R$ 19,90</span>
            </div>
            <div className="text-3xl font-bold">
              Seu preço hoje: <span className="bg-white text-orange-500 px-4 py-2 rounded-xl">GRÁTIS!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
