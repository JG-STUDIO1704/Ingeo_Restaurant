export interface FeaturedDish {
  id: string
  name: string
  subtitle: string
  description: string
  technique: string
  image: string
  tag: string
}

export const FEATURED_DISHES: FeaturedDish[] = [
  {
    id: 'pulpo-acocado',
    name: 'Acocado de Pulpo',
    subtitle: 'El más elogiado',
    description: 'Tentáculos de pulpo a la parrilla bañados en salsa afrocaribeña con yuca frita crujiente.',
    technique: 'Parrilla · Salsa Afrocaribeña',
    image: 'https://images.unsplash.com/photo-1626232441076-a2a5ada2256a?w=800&h=1100&fit=crop&auto=format',
    tag: '$28',
  },
  {
    id: 'croquetas-bacalao',
    name: 'Croquetas de Bacalao',
    subtitle: 'Entrada más votada',
    description: 'Cinco croquetas de bacalao con curry afro, exterior crujiente y corazón cremoso. También disponibles de chorizo tableño.',
    technique: 'Fritura · Curry Afro',
    image: 'https://images.unsplash.com/photo-1683694062041-cc62c5390b13?w=800&h=1100&fit=crop&auto=format',
    tag: '$8',
  },
  {
    id: 'pesca-romaneco',
    name: 'Pesca del Día Romaneco',
    subtitle: 'Plato insignia de temporada',
    description: 'Pesca fresca sobre salsa romesco y ensaladilla de verdes. Disponible en filete o entero al grill.',
    technique: 'Grill · Romesco · Temporada',
    image: 'https://images.unsplash.com/photo-1750943083941-0b109b4ec08e?w=800&h=1100&fit=crop&auto=format',
    tag: 'Precio mercado',
  },
  {
    id: 'yakitori-platter',
    name: 'Yakitori Pincho Platter',
    subtitle: 'El más visualmente atractivo',
    description: 'Selección de pinchos a la brasa — carne de res, pollo y vegetales — con glaseado dulce-picante de la casa.',
    technique: 'Robata · Glaze Asiático',
    image: 'https://images.unsplash.com/photo-1768162125959-8a35d4ede7dc?w=800&h=1100&fit=crop&auto=format',
    tag: '$12 – $20',
  },
]
