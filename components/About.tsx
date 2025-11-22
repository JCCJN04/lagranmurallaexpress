import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
       {/* Oriental Patterns */}
      <div className="absolute top-0 right-0 opacity-[0.05] w-full h-full pointer-events-none bg-pattern-scales"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            {/* Image Frame Effect */}
            <div className="absolute -inset-4 border border-gold-400/30 z-0 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="absolute -inset-4 border border-imperial-900/10 z-0 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542528180-1c2803fa048c?q=80&w=800&auto=format&fit=crop" 
                alt="Chef cooking wok with fire" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 right-0 bg-imperial-900 text-gold-100 p-8 text-center shadow-lg backdrop-blur-sm bg-opacity-95">
                <span className="block text-4xl font-display font-bold text-gold-400">25</span>
                <span className="text-xs uppercase tracking-[0.2em] border-t border-gold-400/30 pt-2 mt-1 block">Años de Historia</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slide-in-right">
            <SectionTitle 
              title="Nuestra Historia" 
              subtitle="Herencia & Pasión" 
              centered={false} 
              light={false}
            />
            <div className="prose prose-stone prose-lg text-stone-600">
              <p className="mb-6 leading-relaxed font-light">
                En <strong className="text-imperial-900 font-serif">La Gran Muralla Express</strong>, cada plato cuenta una historia. Fundado por la familia Chen, hemos perfeccionado el arte de fusionar la velocidad de la vida moderna con la paciencia que requiere la verdadera cocina oriental.
              </p>
              <p className="mb-8 leading-relaxed font-light">
                No creemos en atajos. Nuestro <em className="text-gold-600">Wok Hei</em> (el aliento del wok) es genuino, logrado con fuego intenso y movimientos precisos que sellan el sabor y la frescura en cada vegetal y corte de carne.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-stone-200 pt-8">
              <div className="group">
                <h4 className="font-display text-imperial-900 font-bold text-lg mb-2 group-hover:text-gold-600 transition-colors">Tradición</h4>
                <p className="text-sm text-stone-500 leading-relaxed">Recetas ancestrales de la provincia de Sichuan y Cantón.</p>
              </div>
              <div className="group">
                <h4 className="font-display text-imperial-900 font-bold text-lg mb-2 group-hover:text-gold-600 transition-colors">Artesanal</h4>
                <p className="text-sm text-stone-500 leading-relaxed">Salsas hechas en casa diariamente, sin conservantes.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};