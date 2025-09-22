import { useState } from \'react\';
import { Dialog, DialogContent, DialogTrigger } from \'@/components/ui/dialog.jsx\';
import { Button } from \'@/components/ui/button.jsx\';
import { Eye, Download, Heart, Sparkles, Star } from \'lucide-react\';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dados das prévias (placeholders)
  const previews = [
    {
      id: 1,
      title: "Ursinho Fofo",
      description: "Ursinho para colorir, contornos grossos",
      thumbnail: "/assets/thumb_01.png",
      category: "Animais"
    },
    {
      id: 2,
      title: "Gatinho Dormindo",
      description: "Gatinho dormindo em almofada, estilo kawaii",
      thumbnail: "/assets/thumb_02.png",
      category: "Animais"
    },
    {
      id: 3,
      title: "Flores Delicadas",
      description: "Bouquet de flores com detalhes suaves",
      thumbnail: "/assets/thumb_03.png",
      category: "Natureza"
    },
    {
      id: 4,
      title: "Unicórnio Mágico",
      description: "Unicórnio com estrelas e nuvens",
      thumbnail: "/assets/thumb_04.png",
      category: "Fantasia"
    },
    {
      id: 5,
      title: "Coelhinho Saltitante",
      description: "Coelho brincando no jardim",
      thumbnail: "/assets/thumb_05.png",
      category: "Animais"
    },
    {
      id: 6,
      title: "Borboletas Coloridas",
      description: "Borboletas voando entre flores",
      thumbnail: "/assets/thumb_06.png",
      category: "Natureza"
    },
    {
      id: 7,
      title: "Casinha de Boneca",
      description: "Casa fofa com jardim e cerca",
      thumbnail: "/assets/thumb_07.png",
      category: "Objetos"
    },
    {
      id: 8,
      title: "Panda Comendo",
      description: "Panda fofo comendo bambu",
      thumbnail: "/assets/thumb_08.png",
      category: "Animais"
    },
    {
      id: 9,
      title: "Estrelas e Lua",
      description: "Céu noturno com lua sorridente",
      thumbnail: "/assets/thumb_09.png",
      category: "Fantasia"
    },
    {
      id: 10,
      title: "Cupcake Delicioso",
      description: "Cupcake com cereja e cobertura",
      thumbnail: "/assets/thumb_10.png",
      category: "Comida"
    },
    {
      id: 11,
      title: "Peixinho Dourado",
      description: "Peixe nadando entre algas",
      thumbnail: "/assets/thumb_11.png",
      category: "Animais"
    },
    {
      id: 12,
      title: "Arco-íris Feliz",
      description: "Arco-íris com nuvens sorrisos",
      thumbnail: "/assets/thumb_12.png",
      category: "Natureza"
    }
  ];

  const handlePreviewClick = (preview) => {
    setSelectedImage(preview);
    console.log('Preview clicked:', preview.title);
    // dataLayer.push({event: 'preview_view', preview_id: preview.id});
  };

  return (
    <section className=\"py-16 lg:py-24 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden\">
      {/* Elementos decorativos de fundo */}
      <div className=\"absolute inset-0 opacity-10\">
        <div className=\"absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-xl\"></div>
        <div className=\"absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-full blur-xl\"></div>
      </div>
      
      <div className=\"container mx-auto px-4 relative z-10\">
        {/* Cabeçalho da seção aprimorado */}
        <div className=\"text-center mb-20\">
          <div className=\"inline-flex items-center gap-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold shadow-xl border border-purple-300/30 backdrop-blur-sm mb-6\">
            <Sparkles className=\"w-4 h-4 fill-current text-purple-600\" />
            <span className=\"bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold\">
              Galeria Exclusiva
            </span>
            <Star className=\"w-4 h-4 text-purple-600\" />
          </div>
          
          <h2 className=\"text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight\">
            <span className=\"bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm\">
              Espia só essas fofuras! 👀✨
            </span>
          </h2>
          
          <p className=\"text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8\">
            Aqui estão algumas das <span className=\"text-purple-600 font-bold\">50 ilustrações</span> que você vai receber. 
            Cada desenho foi criado com muito <span className=\"text-pink-600 font-bold\">carinho</span> para você 
            <span className=\"text-blue-600 font-bold\"> relaxar e se divertir</span> pintando.
          </p>
          
          {/* Badge de destaque aprimorado */}
          <div className=\"inline-flex items-center gap-3 bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 text-orange-800 px-8 py-4 rounded-full text-base font-bold shadow-xl border border-orange-300/30 backdrop-blur-sm\">
            <Heart className=\"w-5 h-5 fill-current text-orange-600\" />
            <span className=\"bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent\">
              Resolução 300 DPI • Perfeito para impressão A4
            </span>
            <Sparkles className=\"w-5 h-5 text-orange-600\" />
          </div>
        </div>

        {/* Grid de prévias */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {previews.map((preview) => (
            <Dialog key={preview.id}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer"
                  onClick={() => handlePreviewClick(preview)}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    {/* Placeholder da imagem */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-center text-gray-500">
                        <Heart className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                        <p className="text-xs font-medium">{preview.title}</p>
                      </div>
                      
                      {/* Overlay de hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Eye className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">Ver prévia</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Info do card */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">{preview.title}</h3>
                      <p className="text-xs text-gray-500 mb-2">{preview.description}</p>
                      <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {preview.category}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              {/* Modal de prévia */}
              <DialogContent className="max-w-2xl">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{preview.title}</h3>
                    <p className="text-gray-600">{preview.description}</p>
                  </div>
                  
                  {/* Imagem ampliada (placeholder) */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Heart className="w-16 h-16 mx-auto mb-4 text-pink-400" />
                      <p className="text-lg font-medium">{preview.title}</p>
                      <p className="text-sm">Prévia em alta resolução</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Pacote Completo
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA da galeria */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Gostou do que viu? 😍
            </h3>
            <p className="text-gray-600 mb-6">
              Essas são apenas 12 das 50 ilustrações incríveis que você vai receber. Cada uma pensada para te proporcionar momentos de relaxamento e diversão!
            </p>
            
            <div className="space-y-4">
              <Button className="w-full lg:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Quero o Pacote Completo Agora!
              </Button>
              
              <div className="text-sm text-gray-500">
                <p>+ Paleta de cores digital e guia de técnicas (GRÁTIS nos primeiros 100)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
