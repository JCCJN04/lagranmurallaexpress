import React from 'react';
import { Flame, Clock, Leaf, Award } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: 'Wok Hei Auténtico',
    description: 'El "aliento del wok" que solo se logra con fuego alto y técnica experta.',
    icon: <Flame className="w-7 h-7" />,
  },
  {
    title: 'Ingredientes Frescos',
    description: 'Vegetales cortados cada mañana y carnes de primera calidad.',
    icon: <Leaf className="w-7 h-7" />,
  },
  {
    title: 'Entrega Veloz',
    description: 'Del wok a tu mesa en tiempo récord, manteniendo el calor y la textura.',
    icon: <Clock className="w-7 h-7" />,
  },
  {
    title: 'Sabor Premiado',
    description: 'Reconocidos por críticos locales como la mejor opción express.',
    icon: <Award className="w-7 h-7" />,
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-ink-950 text-white relative border-y border-imperial-900/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-clouds opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">¿Por qué elegirnos?</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-white">La Experiencia Imperial</h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-b from-ink-900 to-ink-950 p-8 border border-white/5 hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-gold-400/20 bg-imperial-900/20 text-gold-400 group-hover:bg-gold-400 group-hover:text-imperial-950 transition-all duration-300 rotate-45 group-hover:rotate-0">
                <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-display font-bold mb-4 text-stone-100 group-hover:text-gold-300 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-gold-400/20 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};