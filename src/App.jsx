import { useState } from 'react';
import './App.css';

// Importar todos os componentes
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonial from './components/Testimonial.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import ModalCheckout from './components/ModalCheckout.jsx';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
    // Analytics tracking
    console.log('Checkout modal opened');
    // dataLayer.push({event: 'checkout_start'});
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    console.log('Checkout modal closed');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Seção Hero */}
      <Hero />
      
      {/* Seção de Galeria/Prévias */}
      <Gallery />
      
      {/* Seção de Features/Benefícios */}
      <Features />
      
      {/* Seção de Preços */}
      <Pricing onOpenCheckout={openCheckout} />
      
      {/* Seção de Depoimentos */}
      <Testimonial />
      
      {/* Seção de FAQ */}
      <FAQ />
      
      {/* Footer */}
      <Footer />
      
      {/* Modal de Checkout */}
      <ModalCheckout 
        isOpen={isCheckoutOpen} 
        onClose={closeCheckout} 
      />
    </div>
  );
}

export default App;
