import { CourseType, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Entradas
  {
    id: 'e1',
    name: 'Rollos Primavera Imperiales',
    description: 'Crujientes rollos rellenos de vegetales frescos y cerdo sazonado, servidos con salsa agridulce.',
    price: 85,
    category: CourseType.STARTER,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'e2',
    name: 'Wanton Frito',
    description: 'Triángulos dorados rellenos de queso crema y cangrejo, servidos extra crujientes.',
    price: 95,
    category: CourseType.STARTER,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e3',
    name: 'Dumplings al Vapor',
    description: 'Empanaditas suaves rellenas de cerdo y cebollín, cocidas en cestas de bambú.',
    price: 110,
    category: CourseType.STARTER,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop'
  },

  // Especialidades (NUEVO)
  {
    id: 's1',
    name: 'Pato Laqueado Pekín',
    description: 'Nuestra joya culinaria. Pato asado lentamente con piel crujiente, servido con crepas finas, cebollín y salsa Hoisin.',
    price: 350,
    category: CourseType.SPECIALTY,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 's2',
    name: 'Camarones Roca Imperial',
    description: 'Camarones jumbo tempura bañados en nuestra exclusiva salsa cremosa picante, servidos sobre lechuga fresca.',
    price: 240,
    category: CourseType.SPECIALTY,
    image: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=800&auto=format&fit=crop'
  },

  // Platos Fuertes
  {
    id: 'm1',
    name: 'Pollo Kung Pao',
    description: 'Clásico picante con cacahuates, chiles secos y vegetales crujientes en wok.',
    price: 180,
    category: CourseType.MAIN,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'm2',
    name: 'Cerdo Agridulce Cantonés',
    description: 'Trozos de cerdo rebozados bañados en nuestra salsa secreta con piña y pimientos.',
    price: 175,
    category: CourseType.MAIN,
    image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm3',
    name: 'Res con Brócoli',
    description: 'Láminas de res tierna salteadas al wok con brócoli fresco y salsa de ostión.',
    price: 195,
    category: CourseType.MAIN,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm4',
    name: 'Pollo a la Naranja',
    description: 'Crujiente por fuera, suave por dentro, glaseado en salsa cítrica picante.',
    price: 185,
    category: CourseType.MAIN,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop'
  },

  // Arroces & Tallarines
  {
    id: 'r1',
    name: 'Arroz Frito Especial',
    description: 'Wok hei auténtico con camarón, cerdo, pollo, huevo y vegetales.',
    price: 150,
    category: CourseType.RICE_NOODLES,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'r2',
    name: 'Lo Mein de Vegetales',
    description: 'Tallarines de huevo salteados con una variedad de vegetales de temporada.',
    price: 140,
    category: CourseType.RICE_NOODLES,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop'
  },

  // Postres (NUEVO)
  {
    id: 'd1',
    name: 'Helado Frito Tempura',
    description: 'Bola de helado de vainilla cubierta de masa tempura caliente y crujiente, decorada con jarabe de chocolate.',
    price: 85,
    category: CourseType.DESSERT,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Cheesecake de Matcha',
    description: 'Suave pastel de queso infusionado con té verde matcha japonés de grado ceremonial.',
    price: 95,
    category: CourseType.DESSERT,
    image: 'https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=800&auto=format&fit=crop'
  },

  // Bebidas
  {
    id: 'b1',
    name: 'Té Jazmín Helado',
    description: 'Refrescante infusión de la casa con un toque de miel.',
    price: 45,
    category: CourseType.DRINK,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Limonada con Jengibre',
    description: 'Mezcla vibrante de limón fresco y extracto de jengibre.',
    price: 50,
    category: CourseType.DRINK,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
  }
];