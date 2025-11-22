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
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="block text-gold-400 font-display text-sm tracking-[0.3em] uppercase mb-2">
        {subtitle}
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl font-bold ${light ? 'text-white' : 'text-imperial-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gold-400 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
