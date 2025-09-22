import { Heart, Instagram, Facebook, Youtube, Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/bobbiegoods",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook", 
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/bobbiegoods",
      color: "hover:text-blue-500"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com/bobbiegoods",
      color: "hover:text-red-500"
    },
    {
      name: "E-mail",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:contato@bobbiegoods.com",
      color: "hover:text-purple-500"
    }
  ];

  const footerLinks = [
    {
      title: "Produto",
      links: [
        { name: "Sobre o Pacote", href: "#features" },
        { name: "Galeria de Prévias", href: "#gallery" },
        { name: "Como Funciona", href: "#how-it-works" },
        { name: "Depoimentos", href: "#testimonials" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Perguntas Frequentes", href: "#faq" },
        { name: "Contato", href: "#contact" },
        { name: "Garantia", href: "#guarantee" },
        { name: "Reembolso", href: "#refund" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Uso", href: "/termos" },
        { name: "Política de Privacidade", href: "/privacidade" },
        { name: "Licença de Uso", href: "/licenca" },
        { name: "Cookies", href: "/cookies" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Seção principal do footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Coluna da marca */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-400 fill-current" />
                Bobbie Goods
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Criando momentos de relaxamento e diversão através de ilustrações fofas para colorir. Feito com muito amor para você! 💖
              </p>
            </div>

            {/* Redes sociais */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Nos siga nas redes!</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Compartilhe suas pinturas com <span className="text-pink-400 font-semibold">#BobbieGoodies</span>
              </p>
            </div>
          </div>

          {/* Colunas de links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-lg mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-3xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Quer ser a primeira a saber dos novos lançamentos? 📧
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cadastre-se na nossa newsletter e ganhe <strong>desconto exclusivo</strong> nos próximos pacotes + dicas de colorir toda semana!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Cadastrar
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-3">
              Prometemos não enviar spam. Apenas conteúdo útil e ofertas especiais! ✨
            </p>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Bobbie Goods. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Feito com <Heart className="w-3 h-3 inline text-pink-400 fill-current" /> para você relaxar e criar
              </p>
            </div>

            {/* Badges de segurança */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <Shield className="w-4 h-4" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <FileText className="w-4 h-4" />
                <span>Garantia 7 dias</span>
              </div>
            </div>

            {/* Links legais */}
            <div className="flex gap-4 text-xs text-gray-400">
              <a href="/termos" className="hover:text-white transition-colors">
                Termos
              </a>
              <span>•</span>
              <a href="/privacidade" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <span>•</span>
              <a href="/licenca" className="hover:text-white transition-colors">
                Licença
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
