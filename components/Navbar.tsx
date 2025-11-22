import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Menú', path: '/menu' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-ink-950/95 backdrop-blur-xl shadow-2xl border-b border-gold-400/10 py-3' 
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gold-500 blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-imperial-950 p-2.5 border border-gold-400/60 group-hover:border-gold-300 transition-colors rotate-45 shadow-xl">
                <UtensilsCrossed className="h-5 w-5 md:h-6 md:w-6 text-gold-400 -rotate-45" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-display font-bold text-lg md:text-2xl tracking-widest leading-none group-hover:text-gold-300 transition-colors duration-300 drop-shadow-md">
                LA GRAN MURALLA
              </span>
              <div className="flex items-center mt-1">
                <div className="h-[1px] w-4 bg-gold-500/50 hidden md:block mr-2"></div>
                <span className="text-gold-400 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold drop-shadow-sm">Express</span>
                <div className="h-[1px] w-4 bg-gold-500/50 hidden md:block ml-2"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-2 py-1 text-sm font-bold tracking-widest uppercase transition-colors duration-300 group ${
                    location.pathname === link.path
                      ? 'text-gold-400'
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-400 transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/menu"
                className="relative px-6 py-2.5 group overflow-hidden bg-transparent border border-gold-400/60 text-gold-400 text-xs font-bold uppercase tracking-widest hover:text-imperial-950 transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gold-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Ordenar Ahora</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-ink-950/95 backdrop-blur-xl border-b border-gold-400/20 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 text-center text-sm font-bold uppercase tracking-widest border-b border-white/5 ${
                location.pathname === link.path
                  ? 'text-gold-400'
                  : 'text-stone-300 hover:text-gold-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Link
              to="/menu"
              className="block w-full text-center bg-gold-400 text-imperial-950 px-4 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-gold-400/20"
            >
              Ver Menú
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};