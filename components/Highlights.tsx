import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { MENU_ITEMS } from '../constants';

export const Highlights: React.FC = () => {
  const popularItems = MENU_ITEMS.filter(item => item.isPopular).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-stone-100 relative">
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-stone-50 to-stone-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Favoritos del Emperador" 
          subtitle="Platillos Estrella" 
          centered={true}
          light={false} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 px-2 sm:px-0">
          {popularItems.map((item) => (
            <div key={item.id} className="group relative bg-white shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-stone-300/50 transition-all duration-500 transform hover:-translate-y-1 rounded-lg overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-52 sm:h-60 lg:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                  <span className="bg-white/95 backdrop-blur text-imperial-900 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 uppercase tracking-wider sm:tracking-widest shadow-sm border-l-2 border-gold-400">
                    Popular
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8 relative">
                {/* Floating Price Tag */}
                <div className="absolute -top-5 sm:-top-6 right-4 sm:right-8 bg-imperial-900 text-gold-400 px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
                  <span className="font-display font-bold text-lg sm:text-xl">${item.price}</span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-ink-900 mb-2 sm:mb-3 group-hover:text-imperial-800 transition-colors pr-16 sm:pr-0">
                  {item.name}
                </h3>
                <div className="w-10 sm:w-12 h-0.5 bg-gold-400 mb-3 sm:mb-4"></div>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {item.description}
                </p>
                <Link 
                  to="/menu" 
                  className="inline-flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-imperial-900 hover:text-gold-600 transition-colors group/link"
                >
                  Ordenar Ahora <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4 sm:px-0">
          <Link 
            to="/menu" 
            className="inline-block w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border border-imperial-900 text-imperial-900 font-display font-bold uppercase tracking-widest sm:tracking-[0.2em] text-xs sm:text-sm hover:bg-imperial-900 hover:text-white transition-all duration-300"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>
    </section>
  );
};