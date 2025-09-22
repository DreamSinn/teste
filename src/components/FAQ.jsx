import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // Primeiro item aberto por padrão

  const faqs = [
    {
      question: "Posso usar os desenhos comercialmente?",
      answer: "Os desenhos são licenciados apenas para uso pessoal. Você pode imprimir quantas vezes quiser para você, sua família e amigos, mas não pode revender ou usar comercialmente. Se precisar de licença comercial, entre em contato conosco!"
    },
    {
      question: "Qual é a resolução dos arquivos?",
      answer: "Todos os desenhos são fornecidos em alta resolução de 300 DPI, perfeitos para impressão em papel A4. O arquivo PDF está otimizado para garantir qualidade profissional na impressão doméstica ou em gráficas."
    },
    {
      question: "Como faço o download após a compra?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link de download. O acesso é imediato e vitalício - você pode baixar quantas vezes precisar. Também enviamos um backup por WhatsApp se preferir!"
    },
    {
      question: "Funciona em qualquer impressora?",
      answer: "Sim! O PDF foi testado em impressoras domésticas (jato de tinta e laser) e gráficas profissionais. Recomendamos papel sulfite 75g ou papel especial para desenho para melhores resultados. Incluímos dicas de impressão no guia!"
    },
    {
      question: "Tem desconto para comprar mais de um pacote?",
      answer: "Por enquanto este é nosso único pacote, mas estamos preparando novos temas! Quem compra agora ganha desconto exclusivo nos próximos lançamentos. Cadastre-se na nossa newsletter para ser avisada primeiro! 💖"
    },
    {
      question: "E se eu não souber colorir bem?",
      answer: "Nossos desenhos foram criados pensando em todos os níveis! Incluímos um guia com dicas básicas, sugestões de materiais e técnicas simples. Além disso, a paleta de cores digital te ajuda a escolher combinações lindas. É impossível errar! ✨"
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Dúvidas Frequentes 🤔
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Separamos as perguntas mais comuns para você ficar tranquila antes da compra. Se tiver outras dúvidas, é só nos chamar!
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-2xl transition-colors duration-200"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-6 h-6 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Resposta */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA de suporte */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Ainda tem dúvidas? 💬
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe está sempre pronta para te ajudar! Entre em contato pelo WhatsApp e responderemos em poucos minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5511999999999?text=Oi!%20Tenho%20dúvidas%20sobre%20o%20Pacote%20Bobbie%20Goods"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Falar no WhatsApp
              </a>
              
              <span className="text-gray-500">ou</span>
              
              <a 
                href="mailto:contato@bobbiegoods.com"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar E-mail
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Respondemos em até 2 horas • Segunda a sexta, 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
