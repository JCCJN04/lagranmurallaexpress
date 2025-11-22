import React from 'react';

export enum CourseType {
  STARTER = 'Entradas',
  MAIN = 'Platos Fuertes',
  RICE_NOODLES = 'Arroces & Tallarines',
  SPECIALTY = 'Especialidades',
  DRINK = 'Bebidas',
  DESSERT = 'Postres'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isPopular?: boolean;
  category: CourseType;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}