export type DietaryIcon = 'spicy' | 'nuts' | 'dairy'

export interface MenuItem {
  name: string
  price: string | null
  description: string
  dietary?: DietaryIcon[]
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const FOOD_CATEGORIES: MenuCategory[] = [
  {
    id: 'entradas',
    label: 'Entradas',
    items: [
      {
        name: 'Consomé de Pescado',
        price: '$6',
        description: 'Fondo de huesos de pescado ahumado, pistache de la casa y limón',
        dietary: ['nuts'],
      },
      {
        name: 'Croquetas de Bacalao o Chorizo',
        price: '$8',
        description: '5 croquetas de bacalao y curry afro, o 5 croquetas de chorizo tableño',
        dietary: ['dairy'],
      },
      {
        name: 'Sao (vienés, salado o habanero)',
        price: '$8',
        description: 'Dos piezas de patitas de cerdo, pepino, cebolla blanca, vinagre y jugo de limón',
        dietary: ['spicy'],
      },
      {
        name: 'Ceviche Fresco',
        price: '$16',
        description: 'Pesca fresca del día, limón mandarina, aguacate y lechuga',
      },
      {
        name: 'Tiradito Mango y Lulo',
        price: '$16',
        description: 'Pesca del día curada en cítrico con leche de tigre de mango y lulo',
        dietary: ['spicy'],
      },
      {
        name: 'Aguachile de Mandarina',
        price: '$16',
        description: 'Langostinos marinados en mezcla ácida picante y fresca con mandarinas y pepino en semilla',
        dietary: ['spicy'],
      },
      {
        name: 'Chicharrón Crujiente — Panceta Frita en Wok',
        price: '$16',
        description: 'Pork belly servido con hierbas frescas, chile y ajo',
        dietary: ['spicy'],
      },
    ],
  },
  {
    id: 'ensaladas',
    label: 'Ensaladas',
    items: [
      {
        name: 'Ensalada de Mango y Camarones',
        price: '$10',
        description: 'Mango verde, salsa vietnamita, camarones y maní',
        dietary: ['nuts'],
      },
      {
        name: 'Ensalada de Sandía',
        price: '$10',
        description: 'Sandía en temporada, aguacate, queso fresco y aceite de menta',
        dietary: ['dairy'],
      },
      {
        name: 'Ensalada Estilo del Norte de China',
        price: '$10',
        description: 'Pepino sin semilla y zanahoria, bañada en salsa estilo del norte de China',
      },
    ],
  },
  {
    id: 'yakitoris',
    label: 'Yakitoris',
    items: [
      {
        name: 'Carnita de Desfile (Filete)',
        price: '$5',
        description: 'Orden de 2 pinchos a la brasa',
      },
      {
        name: 'Encuentro de Pollo',
        price: '$5',
        description: 'Orden de 2 pinchos a la brasa',
      },
      {
        name: 'Costilla de Cerdo',
        price: '$5',
        description: 'Orden de 2 pinchos a la brasa',
      },
      {
        name: 'Espárrago con Tocino',
        price: '$4',
        description: 'Orden de 2 pinchos a la brasa',
      },
      {
        name: 'Tomates Cherry con Tocino',
        price: '$4',
        description: 'Orden de 2 pinchos a la brasa',
      },
      {
        name: 'Hongos',
        price: '$4',
        description: 'Orden de 2 pinchos a la brasa',
      },
      {
        name: 'Pincho Platter de 8',
        price: '$12',
        description: '3 pinchos de carne + 5 de vegetales',
      },
      {
        name: 'Pincho Platter de 10',
        price: '$20',
        description: '5 pinchos de carne + 5 de vegetales',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      { name: 'Patacones Sexis', price: '$6', description: 'Patacones fritos con toque de la casa' },
      { name: 'Yuca Frita', price: '$6', description: 'Yuca crujiente frita' },
      { name: 'Arroz Jazmín', price: '$6', description: 'Arroz jazmín al vapor' },
      { name: 'Arroz con Coco', price: '$6', description: 'Arroz con leche de coco caribeña' },
      { name: 'Papa Asada', price: '$6', description: 'Papa asada con hierbas' },
      { name: 'Kimchi de la Casa', price: '$6', description: 'Kimchi fermentado artesanalmente', dietary: ['spicy'] },
    ],
  },
  {
    id: 'fuertes',
    label: 'Platos Fuertes',
    items: [
      {
        name: 'Pesca del Día al Vapor',
        price: 'Precio mercado',
        description: 'Filete al vapor estilo cantonés con cebollina y jengibre',
      },
      {
        name: 'Medio Pollo en su Jugo',
        price: '$18',
        description: 'Pollo sellado con reducción de huesos y limón asado',
      },
      {
        name: 'Pork Belly Dong Po Rou',
        price: '$18',
        description: 'Sabor tierno y profundo, cocido lentamente, servido con hojas mostaza',
      },
      {
        name: 'Punta Palomilla y Yaumaki',
        price: '$24',
        description: 'En parrilla a baja temperatura con hojas chinas salteadas en ajo y caldo',
      },
      {
        name: 'Acocado de Pulpo',
        price: '$28',
        description: 'Tentáculos de pulpo a la parrilla en salsa afrocaribeña con yuca frita',
      },
      {
        name: 'Pesca del Día con Salsa Romesco',
        price: 'Precio mercado',
        description: 'Pesca fresca sobre salsa romesco y ensaladilla de verdes — filete o entero',
      },
    ],
  },
  {
    id: 'postre',
    label: 'Postre',
    items: [
      {
        name: 'Helado de Pipa de la Casa',
        price: null,
        description: 'Helado artesanal de pipa fresca',
        dietary: ['dairy'],
      },
    ],
  },
]

export interface DrinkCategory {
  id: string
  label: string
  priceNote?: string
  items: { name: string; price: string; description?: string }[]
}

export const DRINK_CATEGORIES: DrinkCategory[] = [
  {
    id: 'clasicos',
    label: 'Cócteles Clásicos',
    priceNote: '$9.50 c/u',
    items: [
      { name: 'Sangría',    price: '$9.50' },
      { name: 'Carajillo',  price: '$9.50' },
      { name: 'Paloma',     price: '$9.50' },
      { name: 'Margarita',  price: '$9.50' },
      { name: 'Cuba Libre', price: '$9.50' },
      { name: 'Mojito',     price: '$9.50' },
      { name: 'Gin Tonic',  price: '$9.50' },
    ],
  },
  {
    id: 'autor',
    label: 'Cócteles de Autor',
    priceNote: '$11.50 c/u',
    items: [
      {
        name: 'Flor del Aire',
        price: '$11.50',
        description: 'Jengibre, limón, granadina, triple sec, vodka',
      },
      {
        name: 'Golden Rush',
        price: '$11.50',
        description: 'Maracuyá, cardamomo, pimienta verde, bitter, tequila, gin',
      },
      {
        name: 'Ahumada Colada',
        price: '$11.50',
        description: 'Piña al carbón, coco, limón, ron oscuro',
      },
      {
        name: 'Dreams',
        price: '$11.50',
        description: 'Ron blanco, vermut dry, guanábana, limón',
      },
    ],
  },
  {
    id: 'vinos-whisky',
    label: 'Vinos & Whisky',
    items: [
      { name: 'Navarro Correas (botella)',   price: '$35' },
      { name: 'Mini Botella de Vino',        price: '$12' },
      { name: 'Glenfiddich 12 Años',         price: '$10' },
      { name: 'Black & White',               price: '$6'  },
    ],
  },
  {
    id: 'jugos-cafes',
    label: 'Jugos & Cafés',
    items: [
      {
        name: 'Jugos Naturales',
        price: '$6',
        description: 'Limonada · Hierbabuena · Naranja · Piña · Maracuyá · Guanábana · Sandía',
      },
      { name: 'Espresso',            price: '$3'   },
      { name: 'Americano',           price: '$3.50' },
      { name: 'Latte',               price: '$5'   },
      { name: 'Sodas',               price: '$3'   },
      { name: 'Agua',                price: '$3'   },
      { name: 'Perrier',             price: '$5'   },
      { name: 'Cervezas Nacionales', price: '$5'   },
    ],
  },
]
