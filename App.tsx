
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800">
      // <Header />
      <main>
        <Hero />
        // <ProductGrid />
        // <About />
      </main>
      // <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
