import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { MENU_ITEMS } from '../constants';

export const Highlights: React.FC = () => {
  const popularItems = MENU_ITEMS.filter(item => item.isPopular).slice(0, 3);

  return (
    <section className="py-24 bg-stone-100 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-50 to-stone-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Favoritos del Emperador" 
          subtitle="Platillos Estrella" 
          centered={true}
          light={false} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {popularItems.map((item) => (
            <div key={item.id} className="group relative bg-white shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-stone-300/50 transition-all duration-500 transform hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 backdrop-blur text-imperial-900 text-xs font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm border-l-2 border-gold-400">
                    Popular
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {/* Floating Price Tag */}
                <div className="absolute -top-6 right-8 bg-imperial-900 text-gold-400 px-4 py-3 shadow-lg">
                  <span className="font-display font-bold text-xl">${item.price}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-ink-900 mb-3 group-hover:text-imperial-800 transition-colors">
                  {item.name}
                </h3>
                <div className="w-12 h-0.5 bg-gold-400 mb-4"></div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                <Link 
                  to="/menu" 
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-imperial-900 hover:text-gold-600 transition-colors group/link"
                >
                  Ordenar Ahora <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/menu" 
            className="inline-block px-12 py-4 border border-imperial-900 text-imperial-900 font-display font-bold uppercase tracking-[0.2em] text-sm hover:bg-imperial-900 hover:text-white transition-all duration-300"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>
    </section>
  );
};