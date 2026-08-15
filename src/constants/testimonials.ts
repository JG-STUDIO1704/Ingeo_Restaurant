export interface Testimonial {
  id: string
  author: string
  rating: number
  text: string
  highlight: string
  dishes: string[]
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Cliente Recurrente',
    rating: 5,
    text: 'Ya he probado el pollo con patacones, pork belly, punta palmilla, pesca del día y el pulpo — todos impresionantes. Esta vez cerramos con el tiramisú de oreo y fue el broche perfecto. Lo mejor: ahora abren desde mediodía con menú de almuerzo de martes a viernes.',
    highlight: 'El tiramisú de oreo fue el broche perfecto',
    dishes: ['Pollo con Patacones', 'Pork Belly', 'Punta Palmilla', 'Pulpo', 'Tiramisú de Oreo'],
  },
  {
    id: 't2',
    author: 'Foodie Local',
    rating: 5,
    text: 'La ensalada de sandía es refrescante e inesperadamente elegante. Y el pulpo… perfecto. Marcas de parrilla exactas, textura impecable. Igneo tiene algo especial que no encuentras en otro lado en San Francisco.',
    highlight: 'El pulpo: perfecto. Marcas de parrilla exactas',
    dishes: ['Ensalada de Sandía', 'Acocado de Pulpo'],
  },
  {
    id: 't3',
    author: 'Ejecutivo & Foodie',
    rating: 5,
    text: 'Ideal para una cita o un almuerzo de trabajo — el ambiente es íntimo y la cocina nunca decepciona. De noche con amigos es otra experiencia: la energía cambia, el Happy Hour 2x1 es real y el ambiente se vuelve eléctrico.',
    highlight: 'De noche con amigos la energía es eléctrica',
    dishes: ['Menú Ejecutivo', 'Happy Hour 2x1'],
  },
]
