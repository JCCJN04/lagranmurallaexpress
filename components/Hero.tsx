import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-ink-950">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-pulse-slow"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?q=80&w=1920&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlays for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/80"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]"></div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-6 md:inset-12 border border-white/10 pointer-events-none z-10 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="w-8 h-8 border-t-2 border-l-2 border-gold-400"></div>
          <div className="w-8 h-8 border-t-2 border-r-2 border-gold-400"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-8 h-8 border-b-2 border-l-2 border-gold-400"></div>
          <div className="w-8 h-8 border-b-2 border-r-2 border-gold-400"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 z-20">
        <div className="max-w-5xl w-full space-y-6 sm:space-y-8">
          <div className="animate-fade-in-up flex flex-col items-center gap-3 sm:gap-4">
             <div className="h-10 sm:h-16 w-[1px] bg-gradient-to-b from-transparent to-gold-400 mb-1 sm:mb-2"></div>
             <span className="inline-block text-gold-400 tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[10px] sm:text-xs md:text-sm font-bold py-1 px-3 sm:px-4 border border-gold-400/30 bg-black/20 backdrop-blur-sm">
              Desde 1998
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] drop-shadow-2xl animate-fade-in-up [animation-delay:200ms]">
            <span className="block text-stone-200 text-2xl sm:text-4xl md:text-6xl mb-1 sm:mb-2 font-normal tracking-wide sm:tracking-wider">La Gran</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 filter drop-shadow-lg">
              MURALLA
            </span>
          </h1>
          
          <p className="font-serif text-base sm:text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto italic leading-relaxed animate-fade-in-up [animation-delay:400ms] px-2">
            <span className="text-gold-400 text-2xl sm:text-3xl">"</span>
            Donde la tradición milenaria se encuentra con el sabor contemporáneo.
            <span className="text-gold-400 text-2xl sm:text-3xl">"</span>
          </p>
          
          <div className="pt-4 sm:pt-8 animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link 
              to="/menu" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 bg-imperial-900 text-white font-bold uppercase tracking-wider sm:tracking-widest text-sm sm:text-base overflow-hidden transition-all hover:bg-imperial-800 shadow-lg shadow-imperial-900/50"
            >
              <div className="absolute inset-0 border border-white/10 group-hover:border-gold-400/50 transition-colors"></div>
              <span className="relative z-10 flex items-center">
                Ver Menú <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/menu"
              className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 bg-transparent text-gold-400 font-bold uppercase tracking-wider sm:tracking-widest text-sm sm:text-base overflow-hidden transition-all hover:bg-gold-400/10 border border-gold-400/30 hover:border-gold-400"
            >
               <span className="relative z-10">Reservar</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gold-400/50 hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};