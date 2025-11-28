import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="block text-gold-400 font-display text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-1.5 sm:mb-2">
        {subtitle}
      </span>
      <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-imperial-900'}`}>
        {title}
      </h2>
      <div className={`h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 bg-gold-400 mt-3 sm:mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
