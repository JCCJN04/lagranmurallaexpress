import React, { useState, useRef, useEffect } from 'react';
import { MENU_ITEMS } from '../constants';
import { CourseType, MenuItem } from '../types';
import { Filter } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CourseType | 'Todos'>('Todos');
  const categories = Object.values(CourseType);
  
  const filteredItems = activeCategory === 'Todos' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsGridRef = useRef<HTMLDivElement>(null);

  // Function to handle category selection with improved UX
  const handleCategoryChange = (category: CourseType | 'Todos') => {
    setActiveCategory(category);

    // 1. Scroll window to top of grid if user is far down
    if (itemsGridRef.current) {
      const yOffset = -180; // Adjust for sticky header height
      const element = itemsGridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 2. Auto-scroll the category bar to center the active button
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector(`button[data-active="true"]`) as HTMLElement;
      if (activeBtn) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeBtn.offsetLeft - (container.offsetWidth / 2) + (activeBtn.offsetWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="relative bg-ink-950 py-24 sm:py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
          <span className="block text-gold-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4">Carta Gastronómica</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 drop-shadow-lg">Nuestro Menú</h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-xl max-w-2xl mx-auto font-serif italic leading-relaxed px-4">
            Una selección curada de sabores orientales, preparados con respeto por la tradición y pasión por la excelencia.
          </p>
        </div>
      </div>

      {/* Category Filter - Sticky Bar */}
      <div className="sticky top-14 sm:top-16 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center">
            {/* Mobile Indicator Icon */}
            <div className="sm:hidden text-imperial-900 mr-2 pl-1 flex-shrink-0">
              <Filter size={16} />
            </div>
            
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-2 sm:gap-3 pb-1 pt-1 no-scrollbar items-center sm:justify-center w-full px-1 sm:px-2 snap-x"
            >
              <CategoryButton 
                label="Todos" 
                isActive={activeCategory === 'Todos'} 
                onClick={() => handleCategoryChange('Todos')} 
              />
              
              {categories.map((cat) => (
                <CategoryButton
                  key={cat}
                  label={cat}
                  isActive={activeCategory === cat}
                  onClick={() => handleCategoryChange(cat)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div ref={itemsGridRef} className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Section Title based on active category */}
        <div className="mb-6 sm:mb-10 border-l-4 border-gold-400 pl-4 sm:pl-6 animate-fade-in">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-imperial-900">
            {activeCategory === 'Todos' ? 'Selección Completa' : activeCategory}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            {filteredItems.length} {filteredItems.length === 1 ? 'platillo disponible' : 'platillos disponibles'}
          </p>
        </div>

        {/* Grid with Animation Key to trigger re-render fade */}
        <div key={activeCategory} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-10 animate-fade-in-up">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg border border-stone-100 shadow-inner">
            <p className="text-stone-500 text-lg font-serif italic">No hay platillos en esta categoría por el momento.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Extracted Button Component for cleaner code
const CategoryButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
  <button
    data-active={isActive}
    onClick={onClick}
    className={`
      relative whitespace-nowrap px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-300 border snap-start flex-shrink-0
      ${isActive
        ? 'bg-imperial-900 border-imperial-900 text-gold-400 shadow-lg shadow-imperial-900/20 transform scale-105'
        : 'bg-white border-stone-200 text-stone-500 hover:border-gold-400 hover:text-imperial-900 hover:bg-stone-50'
      }
    `}
  >
    {label}
  </button>
);

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl transition-all duration-500 shadow-md sm:shadow-lg shadow-stone-200/40 hover:shadow-2xl hover:shadow-imperial-900/10 border border-stone-100 hover:border-gold-400/30 hover:-translate-y-1">
      {/* Image */}
      <div className="w-full sm:w-32 md:w-40 h-40 sm:h-32 md:h-40 shrink-0 overflow-hidden rounded-lg shadow-md relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-ink-900 group-hover:text-imperial-900 transition-colors leading-tight flex-1 min-w-0">
            {item.name}
          </h3>
          <div className="flex-shrink-0">
             <span className="text-lg sm:text-xl font-bold text-gold-600 font-serif">${item.price}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {item.isPopular && (
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-1.5 sm:px-2 py-0.5 border border-gold-100 rounded-sm">
              Recomendado
            </span>
          )}
          {item.isSpicy && (
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-imperial-700 bg-red-50 px-1.5 sm:px-2 py-0.5 border border-red-100 rounded-sm">
              Picante
            </span>
          )}
          {item.isVegetarian && (
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 border border-emerald-100 rounded-sm">
              Veggie
            </span>
          )}
        </div>

        <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-light group-hover:text-stone-600 line-clamp-2 sm:line-clamp-none">
          {item.description}
        </p>
      </div>
    </div>
  );
};