import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Highlights } from '../components/Highlights';
import { Features } from '../components/Features';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Features />
      <Highlights />
    </div>
  );
};
