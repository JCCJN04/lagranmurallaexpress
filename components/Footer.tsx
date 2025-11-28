import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-950 border-t-4 border-imperial-900 text-stone-300 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern-scales opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 text-center sm:text-left">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
               <h3 className="text-gold-400 font-display text-2xl font-bold tracking-wider">LA GRAN MURALLA</h3>
               <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mt-1">Express</span>
            </div>
            <p className="text-sm text-stone-400 max-w-xs mx-auto md:mx-0 leading-relaxed font-light">
              Auténtica gastronomía oriental preparada al momento. Una experiencia milenaria en cada bocado, honrando las tradiciones del pasado.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 pt-2">
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors transform hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors transform hover:scale-110"><Instagram size={20} /></a>
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors transform hover:scale-110"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-display text-lg tracking-widest">
              CONTACTO
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start justify-center md:justify-start space-x-4 group">
                <MapPin className="text-imperial-800 group-hover:text-gold-400 transition-colors w-5 h-5 shrink-0 mt-0.5" />
                <span className="group-hover:text-white transition-colors">Av. del Dragón 888,<br/>Ciudad Central, CP 12345</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-4 group">
                <Phone className="text-imperial-800 group-hover:text-gold-400 transition-colors w-5 h-5 shrink-0" />
                <span className="group-hover:text-white transition-colors">(555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-display text-lg tracking-widest">
              HORARIO
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="text-gold-500/50 w-4 h-4" />
                <span className="text-stone-400">Lun - Jue:</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="text-gold-500/50 w-4 h-4" />
                <span className="text-stone-400">Vie - Sáb:</span>
                <span className="text-white">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="text-gold-500/50 w-4 h-4" />
                <span className="text-stone-400">Dom:</span>
                <span className="text-white">12:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-stone-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} La Gran Muralla Express.</p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};