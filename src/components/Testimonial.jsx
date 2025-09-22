import { useState } from \'react\';
import { Star, Heart, Quote, Sparkles, Shield, Users } from \'lucide-react\';

const Testimonial = () => {
  const testimonialVariant = \'A\'; // Variação fixa para A/B testing
  
  const testimonialsA = [
    {
      id: 1,
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Simplesmente apaixonada! Os desenhos são lindos demais e a qualidade da impressão ficou perfeita. Minha filha de 8 anos não para de pintar! 💖",
      avatar: "MS",
      verified: true,
      category: "Mãe"
    },
    {
      id: 2,
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ", 
      rating: 5,
      text: "Comprei para relaxar depois do trabalho e virou meu momento zen favorito. Os desenhos são fofinhos e o PDF veio super organizado. Recomendo!",
      avatar: "AC",
      verified: true,
      category: "Profissional"
    },
    {
      id: 3,
      name: "Carla Mendes",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Estava procurando algo para fazer com minha neta e encontrei esse tesouro! Passamos horas pintando juntas. Qualidade excepcional! ⭐",
      avatar: "CM",
      verified: false,
      category: "Avó"
    },
    {
      id: 4,
      name: "Júlia Santos",
      location: "Brasília, DF",
      rating: 5,
      text: "Os desenhos são exatamente como nas fotos! Fácil de imprimir e as crianças adoraram. Já estou pensando em comprar mais pacotes. 🎨",
      avatar: "JS",
      verified: true,
      category: "Educadora"
    }
  ];

  const testimonialsB = [
    {
      id: 1,
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Melhor compra que fiz esse ano! Minha filha ama os desenhos e eu amo ver ela relaxando e criando. Qualidade incrível! 💖",
      avatar: "MS",
      verified: true,
      category: "Mãe"
    },
    {
      id: 2,
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Perfeito para quem busca um hobby relaxante. Os desenhos são lindos e a impressão fica nítida. Meu novo vício! 😍",
      avatar: "AC",
      verified: true,
      category: "Profissional"
    },
    {
      id: 3,
      name: "Carla Mendes",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Comprei para colorir com minha neta e foi um sucesso total! Desenhos fofos e fáceis de pintar. Super recomendo! ⭐",
      avatar: "CM",
      verified: false,
      category: "Avó"
    },
    {
      id: 4,
      name: "Júlia Santos",
      location: "Brasília, DF",
      rating: 5,
      text: "Uso na escola com meus alunos e eles ficam encantados! Desenhos lindos que prendem a atenção. Excelente material! 🎨",
      avatar: "JS",
      verified: true,
      category: "Educadora"
    }
  ];

  const currentTestimonials = testimonialVariant === 'A' ? testimonialsA : testimonialsB;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className=\"py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden\">
      {/* Elementos decorativos de fundo */}
      <div className=\"absolute inset-0 opacity-10\">
        <div className=\"absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-2xl\"></div>
        <div className=\"absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-2xl\"></div>
        <div className=\"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl\"></div>
      </div>
      
      <div className=\"container mx-auto px-4 relative z-10\">
        {/* Cabeçalho aprimorado */}
        <div className=\"text-center mb-20\">
          <div className=\"inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold shadow-xl border border-purple-300/30 backdrop-blur-sm mb-6\">
            <Users className=\"w-4 h-4 fill-current text-purple-600\" />
            <span className=\"bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold\">
              Depoimentos Reais
            </span>
            <Heart className=\"w-4 h-4 text-purple-600\" />
          </div>
          
          <h2 className=\"text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight\">
            <span className=\"bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm\">
              O que nossas clientes estão falando 💬
            </span>
          </h2>
          
          <p className=\"text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-12\">
            Mais de <span className=\"text-purple-600 font-bold\">2.300 pessoas</span> já baixaram e se apaixonaram pelos nossos desenhos. 
            Veja alguns <span className=\"text-pink-600 font-bold\">depoimentos reais</span> de quem já faz parte da nossa 
            <span className=\"text-blue-600 font-bold\"> comunidade</span>!
          </p>
          
          {/* Estatísticas aprimoradas */}
          <div className=\"flex flex-wrap items-center justify-center gap-8 lg:gap-12\">
            <div className=\"text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 min-w-[140px]\">
              <div className=\"flex items-center justify-center gap-1 mb-3\">
                {renderStars(5)}
              </div>
              <p className=\"text-3xl font-black text-gray-800 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent\">4.9/5</p>
              <p className=\"text-sm text-gray-600 font-semibold\">Avaliação média</p>
            </div>
            <div className=\"w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden lg:block\"></div>
            <div className=\"text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 min-w-[140px]\">
              <p className=\"text-3xl font-black text-gray-800 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent\">2.300+</p>
              <p className=\"text-sm text-gray-600 font-semibold\">Downloads felizes</p>
            </div>
            <div className=\"w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden lg:block\"></div>
            <div className=\"text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 min-w-[140px]\">
              <p className=\"text-3xl font-black text-gray-800 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent\">98%</p>
              <p className=\"text-sm text-gray-600 font-semibold\">Recomendam</p>
            </div>
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Depoimento */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Perfil */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full mt-1">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de garantia */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white fill-current" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Garantia de Satisfação 100% 🛡️
            </h3>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Estamos tão confiantes de que você vai amar nossos desenhos que oferecemos <strong>7 dias de garantia total</strong>. Se por qualquer motivo você não ficar satisfeita, devolvemos seu dinheiro sem perguntas!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">7 Dias</h4>
                <p className="text-sm text-gray-600">Para testar e aprovar</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Reembolso Total</h4>
                <p className="text-sm text-gray-600">100% do valor de volta</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Sem Perguntas</h4>
                <p className="text-sm text-gray-600">Processo simples e rápido</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonial;
