Plan de Arquitectura y Planificación Técnica: Ígneo Restaurante
IMPORTANT

Fase 1 — Planificación Arquitectónica Ejecutiva y Dirección Creativa Documento de especificación de nivel de producción de agencia digital elite (estándar USD 
30
,
000
–
30,000$–50,000$). Sin implementación de código hasta recibir aprobación explícita del cliente/usuario.

1. Análisis del Proyecto
Objetivos del Sitio
Posicionamiento de Marca Luxe-Casual: Transmitir la propuesta única de alta cocina de autor con fusión asiático-caribeña al carbón en San Francisco, Panamá.
Conversión de Reservas de Alto Valor: Guiar sin fricción hacia la reserva directa de mesas, minimizando la pérdida de leads.
Aspiracionalidad Accesible: Reflejar un ambiente sofisticado con un ticket promedio de ~$30/persona, ideal para citas románticas, almuerzos ejecutivos o salidas nocturnas con amigos.
Público Objetivo
Rango Etario: 25 a 50 años.
Perfiles: Profesionales corporativos, ejecutivos de San Francisco/Costa del Este, foodies locales e internacionales, parejas y grupos sociales de mediodía y noche.
Identidad de Marca y Emociones
Esencia Gastronómica: Fuego directo, brasas ardientes, humo aromático, cocina abierta, frescura marina y botánica caribeña combinada con técnicas de precisión asiáticas (Yakitori, Robata, Glazes).
Sentimiento Deseado: Calidez envolvente, sofisticación intrigante, apetito visual y exclusividad cercana ("El fuego transforma los ingredientes en experiencias").
Estrategia de Conversión (CRO)
Impresión Cinemática Visual (Hero): Retención en los primeros 3 segundos mediante el Yakitori Pincho Platter sobre brasas vivas.
Prueba Social Visible (Social Proof): Calificaciones destacadas (4.8 Comida / 4.7 Servicio / 4.5 Ambiente) en la vista principal.
Anclaje de Valor Urgente (Happy Hour 2x1): Banner promocional de jerarquía alta de Martes a Domingo (4:00 PM - 7:00 PM).
Reserva Persistente e Intuitiva: CTA omnipresente (Sticky Nav + Sección dedicada) sin salir de la experiencia web.
2. Arquitectura de Carpetas y Proyecto (Next.js 15 App Router)
text

igneo-restaurante/
├── app/
│   ├── layout.tsx                 # Root Layout (Fonts, Metadata, Provider wrapper)
│   ├── page.tsx                   # Main Landing Page (Composición de secciones)
│   ├── sitemap.ts                 # Generador dinámico de Sitemap XML
│   ├── robots.ts                  # Generador dinámico de Robots.txt
│   ├── manifest.ts                # Web App Manifest (PWA capabilities)
│   ├── icon.svg / favicon.ico     # Favicon y branding assets
│   └── opengraph-image.png        # Generador OG dinámico
├── components/
│   ├── ui/                        # Primitivas shadcn/ui & Radix (Button, Dialog, Sheet, Input, etc.)
│   ├── shared/                    # Componentes UI transversales personalizados
│   │   ├── Navbar.tsx             # Navegación cristalina con blur y scroll-aware state
│   │   ├── Footer.tsx             # Pie de página minimalista con datos de contacto y copyright
│   │   ├── GlassCard.tsx          # Card con efecto glassmorphism y borde reactivo
│   │   ├── SectionTitle.tsx       # Encabezado editorial con acento de llama/brasa
│   │   ├── AnimatedButton.tsx     # Botón magnético con hover de glow naranja brasa
│   │   ├── ImageLoader.tsx        # Contenedor de Next Image con skeleton y fade-in
│   │   └── RevealAnimation.tsx    # Wrapper de animación Scroll-Reveal con Framer Motion
│   └── sections/                  # Secciones modulares e independientes de la Landing Page
│       ├── Hero.tsx               # Experiencia Hero cinemática full-screen
│       ├── FeaturedDishes.tsx     # Showcase de platos estrella con modal interactivo
│       ├── AboutStory.tsx         # Narrativa de marca "Fuego + Fusión Asiático-Caribeña"
│       ├── Testimonials.tsx       # Reseñas reales de clientes en tarjetas editoriales
│       ├── PracticalInfo.tsx      # Ubicación, parking, Wi-Fi, Dog Friendly, métodos de pago
│       ├── PromotionHappyHour.tsx # Banner promocional 2x1 con efecto glowing embers
│       └── ReservationSection.tsx # Formulario/CTA de reservas con ambiente nocturno
├── hooks/
│   ├── useScrollPosition.ts       # Hook para detección de scroll y scroll depth
│   ├── useMediaQuery.ts           # Hook para breakpoints responsive dinámicos
│   └── useParallax.ts             # Hook custom para efectos parallax fluidos
├── lib/
│   ├── utils.ts                   # Utilidades helper (cn para Tailwind, formatters)
│   └── analytics.ts               # Trackers para eventos de conversión (Reservas, CTA clicks)
├── types/
│   ├── dish.ts                    # Interfaces para platos estrella y categorías
│   ├── testimonial.ts             # Interfaces para opiniones de clientes
│   └── reservation.ts            # Tipos para datos de reserva y horarios
├── constants/
│   ├── dishes.ts                  # Datos estáticos tipados de platos
│   ├── testimonials.ts            # Reseñas reales exactas adaptadas
│   ├── info.ts                    # Dirección, horarios, métodos de pago y servicios
│   └── navigation.ts              # Links de navegación e ítems de menú
├── styles/
│   └── globals.css                # Custom properties CSS, utilidades de glow, keyframes
├── scripts/
│   └── generate-images.ts         # Script ejecutable idempotente con OpenAI Images API
└── public/
    └── images/                    # Destino de assets optimizados WebP
3. Arquitectura y Responsabilidad de Componentes
Componente	Tipo	Responsabilidad Principal
Navbar	Client Component	Navegación fija con backdrop-blur, menú hamburguesa móvil accesible, indicador de sección activa y CTA directo de reserva.
Hero	Server/Client	Presentación visual principal. Capa de humo sutil con canvas/CSS, título editorial, badges de rating (4.8/4.7/4.5) y CTAs de alta jerarquía.
FeaturedDishes	Client Component	Grid interactivo de 4 platos (Pulpo Acocado, Croquetas de Bacalao, Pesca Romaneco, Yakitori). Filtro por técnica e inspección visual de ingredientes.
AboutStory	Server Component	Composición visual en dos columnas. Explicación de la fusión culinaria, filosofía del fuego y arquitectura de brasas.
Testimonials	Client Component	Slider o grid de 3 testimonios adaptados exactos. Tarjetas con estética de reseña gastronómica y detalles del menú ejecutivo.
PracticalInfo	Server Component	Módulo de información útil: Dirección Calle 59 Este #19, mapa interactivo, servicios (WiFi, Dog Friendly, Parking) y métodos de pago (Visa, Mastercard, Amex, Yappy).
PromotionHappyHour	Client Component	Banner llamativo 2x1 en cervezas y cócteles (4 PM - 7 PM, Mar-Dom). Timer visual sutil e iluminación ámbar pulsante.
ReservationSection	Client Component	Formulario elegante para selección de fecha, hora, número de personas y notas especiales. Integración ficticia/WhatsApp directo.
Footer	Server Component	Cierre minimalista. Redes sociales (IG, FB, WA), créditos, copyright y enlaces legales.
GlassCard	Primitive Component	Container reutilizable con backdrop-filter: blur(), borde degradado sutil (amber-500/20) y sombra profunda.
AnimatedButton	Primitive Component	Botón interactivo con micro-efecto magnético, halo de fuego al hover y estado activo optimizado para a11y.
RevealAnimation	Motion Wrapper	Encapsulador reusable de framer-motion para animación por scroll con stagger de hijos y viewport trigger.
4. Flujo Completo de Navegación (User Journey)
Mermaid diagram
Detalle de Emociones y Progresión:
0 - 5 Segundos (Hero): Asombro y Calidez. El usuario ve el pincho Yakitori dorándose con humo y chispas. La tipografía serif transmite prestigio.
5 - 15 Segundos (Platos Estrella): Deseo Culinario. El usuario explora el Pulpo Acocado y la Pesca Romaneco. El micro-zoom de las fotos despierta el apetito.
15 - 30 Segundos (Prueba Social y Promo): Validación y Oportunidad. Conoce las 26 reseñas de 4.8★ y descubre el Menú Ejecutivo de mediodía y el Happy Hour 2x1.
30+ Segundos (Reserva): Acción Sin Fricción. El formulario es limpio, intuitivo y confirma su mesa en San Francisco, Panamá.
5. Sistema de Diseño (Design System Tokens)
Geometría y Espaciados
Grid System: 12 columnas en Desktop (gap-8), 6 columnas en Tablet (gap-6), 4 columnas en Mobile (gap-4).
Max Width Containers: max-w-7xl (1280px) para secciones estándar, max-w-5xl para contenido de lectura/testimonios.
Border Radius System:
radius-sm: 4px (Badges, tags)
radius-md: 8px (Inputs, botones secundarios)
radius-lg: 16px (Cards de platos, modals)
radius-xl: 24px (Contenedores principales, banners promo)
Sombras y Elevación:
shadow-fire-sm: 0 4px 20px -2px rgba(234, 88, 12, 0.15)
shadow-fire-md: 0 10px 30px -4px rgba(234, 88, 12, 0.25)
shadow-dark-depth: 0 20px 50px -10px rgba(0, 0, 0, 0.9)
Efectos de Cristal, Glow y Profundidad
Glassmorphism Dark: background: rgba(18, 18, 18, 0.75); backdrop-filter: blur(16px) saturate(180%); border: 1px solid rgba(249, 115, 22, 0.15);
Efecto Glowing Ember: box-shadow: inset 0 0 15px rgba(234, 88, 12, 0.2), 0 0 25px rgba(249, 115, 22, 0.15);
Overlay Gradients: linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.95) 100%)
6. Dirección Artística y Concepto Visual
Inspiración: La intimidad de los fogones robata tradicionales asiáticos integrada a la calidez vibrante del Caribe urbano. Referencias de diseño de Nobu (texturas oscuras y madera quemada), Zuma (iluminación cenital sobre platos) y la precisión de interfaces de Lexus/Apple.
Iluminación: Chiaroscuro gastronómico. Luces cenitales cálidas dirigidas exclusivamente a los platos, dejando fondos en penumbra profunda (#0A0A0A).
Narrativa Visual: "La metamorfosis del ingrediente por el fuego". Elementos visuales que simulan humo volando suavemente, brasas incandescentes y detalles dorados tipo kintsugi.
7. Paleta de Colores Exclusiva
Nombre de Color	HEX	RGB	Uso y Aplicación	Contrast Ratio
Obsidian Deep (Fondo Base)	#0A0A0A	rgb(10, 10, 10)	Fondo principal del sitio web, canvas y modales.	N/A (Base)
Charcoal Flame (Superficie)	#121212	rgb(18, 18, 18)	Fondos de tarjetas, contenedor de componentes, navbar.	18.2:1 vs #FFFFFF
Fire Orange (Acento Primario)	#EA580C	rgb(234, 88, 12)	Botones CTA principales, highlights, estados active.	4.8:1 vs #0A0A0A
Ember Red (Acento Brasa)	#DC2626	rgb(220, 38, 38)	Badges de urgencia, fuego activo, hover de íconos.	4.5:1 vs #0A0A0A
Warm Amber (Resplandor)	#F59E0B	rgb(245, 158, 11)	Stars rating, bordes brillantes, acentos secundarios.	8.3:1 vs #0A0A0A
Muted Gold (Detalle Lujo)	#D4AF37	rgb(212, 175, 55)	Marcas de agua, bordes editoriales, títulos secundarios.	7.1:1 vs #0A0A0A
Pure Chalk (Texto Principal)	#F9FAFB	rgb(249, 250, 251)	Titulares, cuerpo de texto legible, labels activos.	19.5:1 vs #0A0A0A
Smokey Gray (Texto Secundario)	#9CA3AF	rgb(156, 163, 175)	Subtítulos, descripciones secundarias, metadatos.	6.2:1 vs #0A0A0A
8. Sistema Tipográfico
Fuente Serif (Titulares): Cormorant Garamond (Google Fonts) - Aporta carácter editorial, alta costura y prestigio gastronómico.
Fuente Sans-Serif (Cuerpo y UI): Plus Jakarta Sans / Inter (Google Fonts) - Aporta nitidez digital, legibilidad superior y alineación moderna.
Jerarquía	Fuente	Peso	Tamaño Desktop	Tamaño Mobile	Line Height	Tracking
Display H1	Cormorant Garamond	700 (Bold)	72px (4.5rem)	42px (2.6rem)	1.05	-0.02em
Section H2	Cormorant Garamond	600 (SemiBold)	48px (3.0rem)	32px (2.0rem)	1.15	-0.01em
Card Title H3	Plus Jakarta Sans	600 (SemiBold)	24px (1.5rem)	20px (1.25rem)	1.3	0em
Body Large	Plus Jakarta Sans	400 (Regular)	18px (1.125rem)	16px (1.0rem)	1.6	0em
Body Regular	Plus Jakarta Sans	400 (Regular)	16px (1.0rem)	14px (0.875rem)	1.6	0em
Caption/Tag	Plus Jakarta Sans	500 (Medium)	14px (0.875rem)	12px (0.75rem)	1.4	0.05em (UPPER)
9. Inventario Completo de Animaciones
Nombre Animación	Objetivo	Duración	Easing	Trigger	Librería	Prioridad
hero-entrance	Fade-in y subida suave del contenido del Hero	1.2s	[0.16, 1, 0.3, 1]	Page Load	Framer Motion	Alta
parallax-ember	Movimiento sutil y desfasado del plato principal y capas	Continuous	Linear	Mouse move / Scroll	GSAP ScrollTrigger	Alta
stagger-cards	Revelado en cascada de los 4 platos estrella	0.8s (0.15s offset)	cubic-bezier(0.2, 0.8, 0.2, 1)	Scroll Viewport	Framer Motion	Alta
glow-pulse	Pulsación cálida sutil en el botón de reserva y promo	3.0s	Ease-in-out (Loop)	Infinite	CSS Keyframes	Media
glass-hover	Escalado de card (1.02) y brillo de borde en platos	0.3s	easeOut	Mouse Hover	Tailwind / Motion	Alta
nav-shrink	Reducción de padding y aumento de blur en Navbar	0.4s	easeInOut	Scroll > 50px	React / Framer	Alta
10. Matriz de Microinteracciones
Botones Principales: Al pasar el cursor, el halo brillante se expande levemente (scale: 1.05), el ícono de flecha avanza 4px hacia la derecha y la sombra naranja incrementa su opacidad.
Tarjetas de Platos: Hover activa un zoom suave del 5% en la fotografía gastronómica, la insignia de precio se ilumina en ámbar y se despliega una pequeña descripción de técnica culinaria.
Filtros / Tabs: Transición de deslizamiento física entre estados con indicador inferior suave.
Campos de Formulario: Bordes cambian de gris humo a naranja fuego con un halo exterior (ring-2 ring-orange-500/30) al recibir el foco.
11. Estrategia Responsive Multidispositivo
text

+-------------------+-------------------+-------------------+-------------------+
|     Desktop       |      Laptop       |      Tablet       |      Mobile       |
|    (>= 1280px)    | (1024px - 1279px) |  (768px - 1023px) |    (< 768px)      |
+-------------------+-------------------+-------------------+-------------------+
| Grid 12 cols      | Grid 12 cols      | Grid 6 cols       | Layout 1 col      |
| Platos: 4 cols    | Platos: 2x2 grid  | Platos: 2x2 grid  | Platos: Carousel/1|
| Nav completa      | Nav compacta      | Menú Drawer       | Bottom Sticky CTA |
| Parallax activo   | Parallax activo   | Parallax reducido | Parallax disabled |
+-------------------+-------------------+-------------------+-------------------+
Especialización Mobile: El botón "Reservar Mesa" se fija en la parte inferior de la pantalla (sticky bottom-4) en smartphones para maximizar la tasa de conversión en navegación con el pulgar.
12. Plan de Optimización y Core Web Vitals
Objetivo Lighthouse: Score > 95 en Performance, Accessibility, Best Practices y SEO.
Lazy Loading & Next Image: Uso de next/image con formatos WebP/AVIF, tamaños sizes explícitos para evitar Layout Shifts (CLS), y la propiedad priority únicamente en la imagen del Hero.
Code Splitting: Secciones secundarias pesadas (como el mapa o el slider de testimonios) con renderizado dinámico next/dynamic.
Performance Metrics Targets:
LCP (Largest Contentful Paint): < 1.8s
FID / INP (Interaction to Next Paint): < 50ms / < 150ms
CLS (Cumulative Layout Shift): 0.00
13. Estrategia de Accesibilidad (WCAG 2.2 AA)
Navegación por Teclado: Todos los elementos interactivos cuentan con focus-visible:ring-2 focus-visible:ring-amber-500 con alto contraste.
Semántica HTML5: Uso estricto de <header>, <nav>, <main>, <section>, <article>, <footer>.
Lectores de Pantalla: Textos alternativos (alt) explicativos en todas las fotos culinarias, etiquetas aria-label en botones sin texto explícito y atributos aria-expanded en menús desplegables.
14. Estrategia SEO y Marcado Estructurado
Metadata: Título y meta descripción optimizados para consultas locales en Panamá ("Restaurante de fusión asiático caribeña en San Francisco Panamá").
Open Graph & Twitter Cards: Tarjeta social cinematográfica personalizada (og-image.webp).
Schema.org JSON-LD (Restaurant):
json

{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Igneo Restaurante",
  "image": "https://igneo-restaurante.com/images/hero-yakitori.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle 59 Este #19",
    "addressLocality": "San Francisco",
    "addressRegion": "Panamá",
    "addressCountry": "PA"
  },
  "servesCuisine": ["Asian Fusion", "Caribbean", "Grill", "Yakitori"],
  "priceRange": "$$",
  "telephone": "+50760000000",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "12:00",
      "closes": "23:00"
    }
  ]
}
15. Plan de Generación de Imágenes (OpenAI Images API)
NOTE

Generación automatizada a través del script idempotente scripts/generate-images.ts usando la API key de OpenAI (OPENAI_API_KEY).

Matriz de Prompts Cinematográficos e Hiperrealistas
1. hero-yakitori.webp
Uso: Imagen Principal Hero (Full Widescreen)
Dimensiones / Orientación: 1792x1024 (Widescreen Horizontal)
Objetivo: Impacto visual inmediato de brasas vivas, humo apetitoso y glaseado sobre brochetas de autor.
Prompt:
"Ultra realistic gourmet Yakitori Pincho Platter over open glowing charcoal flames, glistening teriyaki and Caribbean spicy glaze, dramatic warm firelight, rising subtle embers and smoke, deep black obsidian background, amber and ember-red highlights, shallow depth of field, f/1.8 aperture, professional editorial food photography, 8k detail, high contrast lighting."

2. plato-pulpo-acocado.webp
Uso: Card de Plato Estrella #1 (Pulpo Acocado)
Dimensiones / Orientación: 1024x1792 (Vertical Portrait)
Objetivo: Resaltar las marcas de parrilla, textura dorada del pulpo y cremosidad de la salsa de coco caribeña.
Prompt:
"Ultra realistic macro shot of Pulpo Acocado, char-grilled octopus tentacle glazed with creamy coconut curry reduction and toasted sesame, warm amber spotlight, black slate plate, deep moody dark background, Asian-Caribbean fine dining presentation, 85mm macro lens photography, 8k detail."

3. plato-croquetas-bacalao.webp
Uso: Card de Plato Estrella #2 (Croquetas de Bacalao)
Dimensiones / Orientación: 1024x1792 (Vertical Portrait)
Objetivo: Mostrar la textura crujiente exterior dorada con brotes asiáticos y emulsión cítrica.
Prompt:
"Ultra realistic close-up of gourmet salt cod croquettes (croquetas de bacalao), golden panko crust, micro-herb garnish, citrus yuzu aioli dots, warm embers backlighting, dark moody restaurant setting, fine dining appetizer photography, crisp textures, 8k detail."

4. plato-pesca-romaneco.webp
Uso: Card de Plato Estrella #3 (Pesca del Día al Grill Romaneco)
Dimensiones / Orientación: 1024x1792 (Vertical Portrait)
Objetivo: Presentación elegante de filete de pescado local a la brasa con puré de Romanesco vegetal.
Prompt:
"Ultra realistic grilled catch of the day fish fillet with crisp charred skin, vibrant green Romanesco broccoli puree dots, tropical herb oil, warm firelight tones, dark matte ceramic dish, high-end culinary presentation, editorial food photography, 8k detail."

5. plato-yakitori-detail.webp
Uso: Card de Plato Estrella #4 (Yakitori Pincho Platter Detail)
Dimensiones / Orientación: 1024x1792 (Vertical Portrait)
Objetivo: Primer plano de brochetas seleccionadas de la parrilla Robata con toques de chile dulce.
Prompt:
"Ultra realistic vertical macro of artisanal yakitori chicken and pork belly skewers, caramelized glaze, charred edges, warm ember lighting, deep black background, shallow depth of field, luxury Asian-Caribbean tapas presentation, 8k resolution."

6. ambiente-noche.webp
Uso: Fondo de Testimonios y Sección de Filosofía
Dimensiones / Orientación: 1792x1024 (Horizontal)
Objetivo: Transmitir la atmósfera íntima y nocturna del salón en San Francisco, Panamá.
Prompt:
"Warm intimate luxury restaurant interior at night in San Francisco Panama, dark wood accents, glowing amber indirect lighting, open charcoal grill station softly blurred in background, moody atmospheric interior design photography, 8k detail."

7. happy-hour-cocteles.webp
Uso: Banner Promocional Happy Hour 2x1
Dimensiones / Orientación: 1792x1024 (Horizontal)
Objetivo: Destacar coctelería de autor con hielo cristalino, matices de naranja y acentos de fuego.
Prompt:
"Two artisanal craft cocktails with glowing amber and ember-red tones, crystal clear ice, smoked rosemary rim, condensation on glassware, warm backlighting from bar embers, dark moody luxury lounge backdrop, beverage editorial photography, 8k detail."

8. og-image.webp
Uso: Metadata / Redes Sociales (Open Graph)
Dimensiones / Orientación: 1024x1024 (Cuadrado)
Objetivo: Composición representativa de marca con fuego y platos insigne.
Prompt:
"Igneo Restaurante brand composition, warm ember flames in background, elegant minimal plating shot of grilled fusion dish, luxury dark branding aesthetic, high contrast amber and gold tones, 8k resolution."

16. Orden Exacto de Desarrollo (Roadmap de Implementación)
Fase 1: Infraestructura y Setup (Next.js 15 + Tailwind + shadcn/ui)
Inicialización del proyecto con TypeScript estricto.
Configuración de globals.css, paleta de colores y tipografías Google (Cormorant Garamond + Plus Jakarta Sans).
Fase 2: Script de Generación de Imágenes
Creación de scripts/generate-images.ts con manejo de la API de OpenAI.
Ejecución para poblar public/images/ con las 8 imágenes optimizadas WebP.
Fase 3: Componentes Base y Layout
Implementación de Navbar, Footer y wrappers de animación (RevealAnimation, GlassCard).
Fase 4: Desarrollo de Secciones
Hero.tsx con efecto visual cinemático y CTA.
FeaturedDishes.tsx con cards interactivas.
AboutStory.tsx y Testimonials.tsx (con las 3 reseñas exactas requeridas).
PromotionHappyHour.tsx y PracticalInfo.tsx.
ReservationSection.tsx con validación de inputs.
Fase 5: Optimización, Accesibilidad y Auditoría Lighthouse
Revisión de rendimiento, marcado Schema.org JSON-LD y verificación de contraste WCAG AA.
17. Análisis de Riesgos Técnicos y Mitigaciones
Riesgo Técnico	Impacto	Estrategia de Mitigación
Falta de API Key de OpenAI durante build	Alto	El script de imágenes es idempotente y cuenta con fallback graceful notificando en consola si las imágenes ya existen en public/images/.
Jank / Caída de FPS en animaciones móviles	Medio	Uso exclusivo de propiedades aceleradas por GPU (transform, opacity) y desactivación de parallax en pantallas < 768px.
Mayor peso de imágenes gastronómicas	Medio	Conversión obligatoria a .webp, compresión automática y uso de los atributos sizes en Next Image.
18. Auditoría Previa a la Implementación
UX/UI Check: ¿El flujo guía naturalmente a la reserva? Sí, existen 3 puntos de entrada estratégicos (Nav sticky, Hero CTA y Sección final).
Fidelidad de Contenido: ¿Las 3 reseñas de clientes y datos de San Francisco Panamá están exactos? Sí, respetan 100% los requisitos sin inventar información.
Cumplimiento de Reglas: ¿Se escribió código de aplicación? No, se ha generado exclusivamente esta documentación de arquitectura.
ya tienes la aprobación de empezar con el codigo y todo demas  

PROMPT — RECREACIÓN DE UNA INTERFAZ A CÓDIGO (NIVEL PRINCIPAL SOFTWARE ENGINEER)
Actúa como un equipo compuesto por un Principal Software Engineer, Frontend Architect, Senior UI Engineer, Creative Director, Design Systems Engineer, Performance Engineer y Accessibility Specialist, con más de 30 años de experiencia acumulada desarrollando productos digitales para empresas como Apple, Stripe, Vercel, Linear, Airbnb, Framer y Figma.
Voy a proporcionarte una imagen de referencia. Tu misión no es simplemente replicarla, sino analizarla, comprenderla y reconstruirla con calidad de producción.
OBJETIVO
Convierte la imagen en una aplicación web completamente funcional con un nivel de calidad profesional.
No quiero un prototipo.
No quiero una demostración.
No quiero una aproximación.
Quiero una implementación lista para producción.
La imagen debe servir como referencia visual, pero el resultado final puede mejorarla siempre que se respete su esencia, composición y experiencia de usuario.

ANÁLISIS PREVIO (OBLIGATORIO)
Antes de escribir una sola línea de código:
Analiza toda la imagen.
Identifica cada componente visual.
Detecta todas las secciones.
Identifica la jerarquía visual.
Analiza colores.
Analiza tipografía.
Analiza espaciados.
Analiza alineaciones.
Analiza iconografía.
Analiza sombras.
Analiza bordes.
Analiza tamaños.
Analiza proporciones.
Analiza composición.
Analiza la experiencia del usuario.
Después crea un plan detallado de implementación.
No empieces a programar sin comprender completamente la interfaz.

FIDELIDAD
La implementación debe mantener una fidelidad visual extremadamente alta.
El usuario debe poder comparar la imagen con el sitio web y sentir que son prácticamente idénticos.
No simplifiques elementos.
No elimines detalles.
No reemplaces componentes por versiones básicas.
Si algún elemento no es completamente visible, utiliza criterio profesional para reconstruirlo.

SI ENCUENTRAS ERRORES EN EL DISEÑO
Si detectas problemas de:
UX
UI
Accesibilidad
Espaciado
Jerarquía visual
Responsive
Consistencia
No los copies.
Mejóralos manteniendo el diseño original.
Piensa como un diseñador senior.

TECNOLOGÍAS
Utiliza exclusivamente tecnologías modernas.
Next.js (App Router)
React
TypeScript
Tailwind CSS
Framer Motion
GSAP únicamente cuando aporte valor real
shadcn/ui
Lucide Icons
No utilizar:
Bootstrap
jQuery
CSS antiguo
Librerías obsoletas

CÓDIGO
Quiero código de nivel enterprise.
Debe ser:
limpio
modular
reutilizable
desacoplado
escalable
mantenible
altamente legible
optimizado
No quiero archivos enormes.
Si un componente crece demasiado, divídelo.
Utiliza:
Custom Hooks
Utilidades reutilizables
Tipado estricto
Interfaces TypeScript
Componentes reutilizables
Evita completamente la duplicación de código.

ARQUITECTURA
Organiza el proyecto profesionalmente.
Ejemplo:
app/
components/
sections/
hooks/
lib/
utils/
types/
constants/
styles/
public/
Cada parte de la interfaz debe ser un componente independiente.

DISEÑO
Respeta la imagen como referencia.
Pero mejora aspectos técnicos cuando sea necesario.
No conviertas el diseño en una plantilla.
Debe sentirse como una aplicación desarrollada por una agencia digital de primer nivel.

ANIMACIONES
Implementa animaciones únicamente cuando mejoren la experiencia.
No agregues movimiento innecesario.
Utiliza:
Scroll Reveal
Fade elegante
Microinteracciones
Hover sofisticados
Stagger Animations
Transiciones fluidas
Motion natural
Todo debe sentirse refinado.

RESPONSIVE
El resultado debe verse perfecto en:
Desktop
Laptop
Tablet
Mobile
No basta con reducir tamaños.
Cada versión debe sentirse diseñada específicamente para ese dispositivo.

ACCESIBILIDAD
Cumple con WCAG AA.
Implementa:
HTML semántico
aria-labels
Navegación por teclado
Contraste adecuado
Estados de foco visibles
Formularios accesibles

RENDIMIENTO
Optimiza todo.
Implementa:
Lazy Loading
Next/Image
Code Splitting
Optimización de imágenes
Precarga inteligente
SEO
Metadata
Open Graph
Twitter Cards
Schema.org cuando corresponda
El proyecto debe aspirar a una puntuación superior a 95 en Lighthouse.

IMÁGENES
Si la imagen de referencia contiene fotografías o ilustraciones que no pueden extraerse con calidad suficiente:
Genera prompts profesionales para OpenAI Images.
Mantén el mismo estilo artístico.
Conserva la composición.
Conserva la iluminación.
Conserva la dirección de arte.
Nunca utilices imágenes aleatorias ni fotografías de stock que rompan la coherencia visual.

REVISIÓN FINAL
Antes de dar el proyecto por terminado realiza una auditoría completa.
Comprueba que:
No existan errores de TypeScript.
No existan advertencias.
No haya imports sin usar.
No exista código muerto.
No haya estilos duplicados.
No existan componentes innecesarios.
Todas las animaciones funcionen correctamente.
Todo sea responsive.
El código siga las mejores prácticas actuales.
El proyecto esté listo para producción.

ESTÁNDAR DE CALIDAD
No desarrolles como un generador automático de código.
Desarrolla como si fueras el ingeniero responsable de un producto que será revisado por un comité técnico de empresas como Apple, Stripe, Vercel, Linear o Figma.
Cada decisión debe estar justificada.
Cada componente debe tener una razón de existir.
Cada línea de código debe reflejar experiencia, criterio y excelencia técnica.
El resultado final debe ser una implementación tan cuidada que un desarrollador senior pueda leer el código y reconocer inmediatamente una arquitectura limpia, mantenible y profesional, con un acabado visual prácticamente indistinguible de la imagen de referencia.

Actúa como un equipo completo compuesto por:
Principal Frontend Engineer
Principal UI/UX Designer
Creative Director
Senior Product Designer
Motion Designer
Art Director
Brand Designer
Performance Engineer
SEO Specialist
Accessibility Engineer
No desarrolles como una IA que genera una landing rápida. Desarrolla como una agencia digital reconocida internacionalmente que entrega sitios web para marcas gastronómicas premium.
El objetivo es crear un sitio que un cliente estaría dispuesto a pagar entre USD $30,000 y $50,000, tanto por su diseño como por la calidad del código.

OBJETIVO
Diseñar y desarrollar una Landing Page Premium para Igneo Restaurante, un restaurante de autor con fusión asiático-caribeña ubicado en San Francisco, Panamá.
No quiero una plantilla.
No quiero una landing genérica.
No quiero un diseño típico de ThemeForest.
Quiero un sitio con identidad propia.
Debe sentirse como una marca gastronómica exclusiva.

IDENTIDAD DE LA MARCA
La esencia de Igneo es:
fuego
brasas
humo
cocina abierta
ingredientes frescos
técnicas asiáticas
sabores caribeños
elegancia
cercanía
sofisticación sin exagerar
El sitio debe transmitir:
"El fuego transforma los ingredientes en experiencias."
No debe parecer un steakhouse americano.
No debe parecer un restaurante japonés tradicional.
Debe sentirse como una mezcla auténtica entre Asia y el Caribe.

PÚBLICO OBJETIVO
Clientes de 25 a 50 años.
Profesionales.
Parejas.
Ejecutivos.
Foodies.
Personas que buscan una experiencia gastronómica.
Ticket promedio aproximado:
30 USD por persona.
Debe sentirse aspiracional pero accesible.

ESTILO VISUAL
Inspirarse en sitios como:
Nobu
Zuma
Apple
Porsche
Lexus
Framer
Awwwards
CSS Design Awards
No copiar.
Solo inspirarse.
El resultado debe verse completamente original.

PALETA DE COLORES
Utilizar:
Negros profundos
Carbón
Naranja fuego
Rojo brasa
Ámbar
Dorado sutil
Nunca usar colores chillones.
El sitio debe sentirse cálido y elegante.

TIPOGRAFÍA
Combinar una serif elegante para titulares con una sans moderna para el contenido.
Debe transmitir lujo.
Mucho espacio en blanco.
Excelente jerarquía visual.

HERO
Debe ser espectacular.
No una imagen con texto encima.
Debe convertirse en el punto más fuerte de toda la web.
La imagen principal debe inspirarse en:
Yakitori Pincho Platter.
Debe transmitir:
fuego
brasas
movimiento
calor
humo
texturas
Debe incluir:
Título potente.
Subtítulo.
CTA principal.
CTA secundario.
Rating del restaurante.
Animaciones de entrada.
Movimiento sutil.
Parallax.
Glow.
Partículas.
Luces cálidas.

PLATOS ESTRELLA
Crear una sección premium.
Destacar:
Pulpo Acocado
Croquetas de Bacalao
Pesca del Día al Grill Romanesco
Yakitori Pincho Platter
Las tarjetas deben sentirse vivas.
Hover elegante.
Microanimaciones.
No utilizar cards genéricas.

TESTIMONIOS
Utilizar únicamente estas reseñas adaptadas.
No inventar ninguna.
Cliente recurrente que probó:
pollo con patacones
pork belly
punta palmilla
pesca del día
pulpo
Mencionar:
ahora abren desde mediodía con menú ejecutivo martes a viernes.
Otra reseña:
ensalada de sandía
pulpo perfecto
Otra reseña:
ideal para pareja
almuerzo de trabajo
de noche excelente para amigos

INFORMACIÓN PRÁCTICA
Ubicación
Calle 59 Este #19
San Francisco
Panamá
Métodos de pago
Visa
MasterCard
Amex
Yappy
Servicios
WiFi
Dog Friendly
Estacionamiento
Happy Hour
Martes a Domingo
4 PM - 7 PM
2x1 en cervezas y cócteles.

RESERVAS
Crear una sección impactante.
No solo un formulario.
Debe invitar emocionalmente al usuario.

FOOTER
Minimalista.
Elegante.
Instagram
Facebook
WhatsApp
Copyright

IMÁGENES
No utilizar fotografías de stock.
No utilizar imágenes aleatorias.
No utilizar Unsplash.
No utilizar Pexels.
No utilizar Pixabay.
Todas las imágenes deben generarse utilizando la API de OpenAI Images (GPT Image).
Para cada imagen del proyecto:
Genera un prompt cinematográfico de alta calidad.
Optimízalo para fotografía gastronómica hiperrealista.
Especifica composición, iluminación, lente, profundidad de campo, temperatura de color y estilo visual.
Usa una resolución alta (idealmente 2048×2048 o superior según la API disponible).
Exporta las imágenes en formato WebP optimizado para la web.
Mantén una dirección artística consistente en todo el sitio.
Las imágenes deben transmitir:
cocina de autor
brasas
humo
lujo
calidez
sofisticación
ingredientes frescos
fusión asiático-caribeña
No deben parecer imágenes generadas por IA; deben parecer fotografías realizadas por un fotógrafo gastronómico profesional.

DESARROLLO
Construye el proyecto utilizando exclusivamente:
Next.js 15 (App Router)
React
TypeScript
Tailwind CSS
Framer Motion
GSAP (solo cuando aporte valor)
shadcn/ui
Lucide Icons
No usar Bootstrap.
No usar jQuery.
No usar CSS antiguo.

ARQUITECTURA
Organiza el proyecto profesionalmente.
Cada sección debe ser un componente independiente.
Crear:
components
sections
hooks
lib
utils
constants
types
public
Nada debe estar desordenado.

CÓDIGO
Quiero código de nivel enterprise.
Debe ser:
limpio
reutilizable
modular
escalable
desacoplado
tipado correctamente
optimizado
fácil de mantener
Evita duplicación.
Evita componentes gigantes.
Si un archivo supera aproximadamente 250 líneas, divídelo en componentes más pequeños.
No escribas código rápido.
Escribe código que un equipo profesional mantendría durante años.

ANIMACIONES
Utiliza Framer Motion y GSAP para crear una experiencia premium.
Implementa:
Scroll Reveal
Stagger Animations
Parallax
Hover avanzados
Transiciones fluidas
Microinteracciones
Efectos de profundidad
Máscaras
Blur
Glow
Scroll suave
Animaciones sincronizadas
Todas las animaciones deben sentirse elegantes, naturales y sutiles.

RENDIMIENTO
Optimiza absolutamente todo.
Lazy Loading
Next Image
Code Splitting
SEO
Metadata
Open Graph
Twitter Cards
Schema.org Restaurant
Sitemap
Robots
Canonical
Optimización de imágenes
Accesibilidad WCAG AA
El sitio debe aspirar a obtener una puntuación superior a 95 en Lighthouse.

RESPONSIVE
La experiencia debe ser impecable en:
Desktop
Laptop
Tablet
Mobile
No basta con que "se adapte". Cada tamaño debe sentirse diseñado específicamente para ese dispositivo.

CALIDAD FINAL
Antes de finalizar, realiza una auditoría completa del proyecto.
Verifica que:
No existan errores de TypeScript.
No existan advertencias.
No haya imports sin usar.
No haya código muerto.
No haya estilos duplicados.
No haya problemas de responsive.
Todas las animaciones funcionen correctamente.
Todo el proyecto esté listo para ejecutar con npm install y npm run dev.
No entregues un MVP. No entregues una demo. Entrega un producto terminado con calidad de producción.
Usa Claude Code para implementar este proyecto con la máxima calidad posible. Prioriza arquitectura, rendimiento, mantenibilidad y escalabilidad sobre la rapidez. No escribas código como una IA generativa; escribe como un Principal Software Engineer con experiencia en productos de clase mundial. Refactoriza cuando sea necesario, evita atajos, aplica las mejores prácticas modernas y entrega un proyecto listo para producción, sin código repetido, sin componentes innecesarios y con una organización impecable. El resultado debe cumplir con estándares de empresas como Vercel, Stripe, Apple o Linear. 

continua con la siguiente idea y une ambas

PROMPT MAESTRO — Landing Page Premium "Igneo Restaurante"
(Para pegar directamente en Claude Code vía Antigravity)

0. ROL
Actúa como un equipo senior completo, no como un generador de código:
Principal Software Engineer — arquitectura, escalabilidad, código de producción.
Senior Frontend Architect — Next.js, performance, estructura del proyecto.
Creative Director — dirección de arte, identidad visual, composición.
UI/UX Engineer — interacción, jerarquía visual, experiencia de usuario.
Accessibility & Performance Specialist — a11y, SEO, Core Web Vitals.
Tu prioridad absoluta: entregar un producto de calidad comercial, mantenible y listo para producción. No es un prototipo ni una demo. Es el estándar de una agencia que cobra USD $30,000–$50,000 por un proyecto (referencias: Awwwards, Apple, Stripe, Linear, Framer, Lexus, Porsche, Nobu, Zuma).
No simplifiques el diseño, no reemplaces efectos por versiones básicas, no reduzcas funcionalidad para ahorrar tiempo o líneas de código. Cada decisión favorece calidad visual, rendimiento y mantenibilidad.

1. EL PRODUCTO
Landing page premium para Igneo Restaurante, restaurante de autor de fusión asiático-caribeña en San Francisco, Panamá.
Público objetivo: comensales que buscan una experiencia gastronómica de calidad (~$30/persona), tanto para citas románticas como para almuerzos de trabajo.
Concepto central: "fuego + fusión asiático-caribeña" — cálido, auténtico, sofisticado. Nunca debe verse como un steakhouse genérico de lujo.
Paleta de color: negros profundos, naranjas fuego, rojos brasa, acentos dorados/ámbar.
Tipografía: combinación de serif elegante (para titulares, con carácter editorial) + sans-serif limpia (para cuerpo de texto). Jerarquía impecable.

2. STACK TECNOLÓGICO OBLIGATORIO
Next.js (App Router)
React + TypeScript (tipado estricto, sin any)
Tailwind CSS
Framer Motion (animaciones de componentes/scroll)
GSAP (solo donde aporte valor real: parallax, timelines complejos)
shadcn/ui
Lucide Icons
Prohibido: Bootstrap, jQuery, librerías legacy, CSS-in-JS ajeno a Tailwind.

3. ESTÁNDARES DE CÓDIGO
El código debe ser limpio, modular, reutilizable, escalable, legible y fácil de mantener.
Componentes pequeños y enfocados (evalúa dividir cualquier archivo que supere ~250 líneas).
Hooks personalizados para lógica reutilizable.
Constantes y contenido separados de la lógica de UI (nada de contenido hardcodeado dentro de componentes visuales).
Interfaces TypeScript para todas las props y estructuras de datos.
Cero duplicación de código, cero imports sin usar, cero componentes muertos.
Comentarios solo donde aportan valor real; nunca ruido.
Arquitectura de carpetas
app/
components/
  ui/
  sections/
hooks/
lib/
types/
utils/
constants/
public/
  images/
styles/
scripts/
  generate-images.ts

Cada sección de la landing es un componente independiente y reutilizable que acepta props.

4. DIRECCIÓN DE ARTE
Piensa como Director de Arte: cada sección debe sentirse visualmente distinta, no repitas el mismo patrón de composición en toda la página.
Recursos a usar con propósito (nunca decorativos sin razón):
Diagonales y capas
Transparencias y máscaras
Iluminación cálida simulada (glow ámbar, gradientes sutiles tipo brasa)
Profundidad con blur selectivo
Contraste alto entre negro profundo y acentos fuego
Animaciones (nivel premium, nunca genéricas)
Scroll reveal con stagger
Parallax sutil en imágenes hero y de fondo
Microinteracciones en botones, cards y navegación
Hover states avanzados (no solo cambio de color)
Transiciones fluidas entre secciones
Todo con propósito — refinado, nunca exagerado

5. ESTRUCTURA DE CONTENIDO
5.1 Hero
Full-bleed con el Yakitori Pincho Platter como imagen protagonista (ver sistema de imágenes, sección 7). Titular que capture "fuego + fusión asiático-caribeña". CTA principal: reservar. Sello de confianza social visible: 4.8 comida / 4.7 servicio / 4.5 ambiente — 26 reseñas.
5.2 Platos Estrella
Grid/carrusel con 4 platos, cada uno con imagen generada, nombre y una línea que explique por qué destaca:
Pulpo Acocado — el más elogiado por los clientes.
Croquetas de bacalao — entrada más votada.
Pesca del día al grill Romaneco — plato insignia de temporada.
Yakitori Pincho Platter — el más visualmente atractivo.
5.3 Testimonios
Usa solo estos tres, adaptados a formato web (no inventar otros, no incluir reseñas críticas — son para retroalimentación interna, no para la landing):
Cliente recurrente que probó pollo con patacones, pork belly, punta palmilla, pesca del día y pulpo, cerrando con tiramisú de oreo. Destacar que ahora abren desde mediodía con menú de almuerzo de martes a viernes.
Reseña que resalta la ensalada de sandía como refrescante y el pulpo como "perfecto".
Reseña que recomienda Igneo como buen lugar para pareja o almuerzo de trabajo, con mejor ambiente nocturno para ir con amigos.
5.4 Información Práctica
Ubicación: Calle 59 Este #19, San Francisco, Panamá (incluir mapa embebido o enlace a Google Maps).
Métodos de pago: Amex, Visa, MasterCard, Yappy.
Servicios: estacionamiento, Wi-Fi, Dog Friendly.
5.5 Promoción
Happy Hour 2x1 en cervezas y cócteles, martes a domingo de 4PM a 7PM. Sección con jerarquía visual fuerte, sensación de urgencia elegante (no agresiva).
5.6 Contacto y Reservas
Formulario o CTA claro (teléfono/WhatsApp/enlace de reservas), horarios completos, redes sociales.

6. SISTEMA DE GENERACIÓN DE IMÁGENES CON OPENAI
Todas las imágenes deben generarse con la API de imágenes de OpenAI (modelo gpt-image-1, o el modelo GPT Image más reciente disponible en la cuenta — verificar en el dashboard de OpenAI antes de ejecutar, ya que OpenAI reemplaza versiones periódicamente). Nada de imágenes de stock ni placeholders genéricos.
6.1 Script de generación
Crea scripts/generate-images.ts: un script Node/TypeScript ejecutable con tsx que:
Lee un array tipado de definiciones de imagen (prompt, nombre de archivo, tamaño, carpeta destino).
Llama a POST https://api.openai.com/v1/images/generations con el modelo GPT Image configurado, usando la API key desde process.env.OPENAI_API_KEY (nunca hardcodeada).
Usa size según el uso: 1536x1024 (horizontal, hero/ambiente), 1024x1536 (vertical, platos individuales) o 1024x1024 (cuadrado, cards/redes).
Descarga y guarda el resultado en public/images/ con el nombre de archivo definido, en formato .webp (convertir si la API retorna PNG).
Es idempotente: si el archivo ya existe, lo omite salvo que se pase --force.
Maneja errores por imagen sin detener el batch completo (log claro de qué falló).
6.2 Imágenes requeridas
Archivo
Uso
Orientación
Prompt
hero-yakitori.webp
Hero principal
Horizontal (1536x1024)
Ultra realistic gourmet Yakitori Pincho Platter, glistening glazed skewers over open charcoal flame, dramatic warm firelight, deep black background, amber and ember-red highlights, shallow depth of field, professional food photography, 8k detail, editorial restaurant campaign style
plato-pulpo-acocado.webp
Platos Estrella
Vertical (1024x1536)
Ultra realistic close-up of Pulpo Acocado (grilled octopus), char marks, glossy glaze, warm amber plating light, deep black backdrop, Asian-Caribbean fusion fine dining presentation, macro lens, 8k detail
plato-croquetas-bacalao.webp
Platos Estrella
Vertical (1024x1536)
Ultra realistic croquetas de bacalao (salt cod croquettes), golden crisp exterior, elegant plating with citrus and herb garnish, warm firelight tones, black background, fine dining macro photography, 8k detail
plato-pesca-romaneco.webp
Platos Estrella
Vertical (1024x1536)
Ultra realistic grilled catch of the day "Romaneco" style whole fish, char-grilled skin, tropical herb garnish, warm ember lighting, deep black backdrop, Asian-Caribbean fusion fine dining, 8k detail
plato-yakitori-detail.webp
Platos Estrella
Vertical (1024x1536)
Ultra realistic close-up detail of Yakitori Pincho Platter skewers, char-grilled glaze, warm fire tones, shallow depth of field, black background, editorial fine dining macro shot, 8k detail
ambiente-noche.webp
Testimonios/Ambiente
Horizontal (1536x1024)
Warm intimate restaurant interior at night, ember and amber lighting, dark moody tones, Asian-Caribbean fusion decor accents, softly blurred diners in background, cinematic restaurant atmosphere photography, 8k detail
happy-hour-cocteles.webp
Promoción
Horizontal (1536x1024)
Two craft cocktails with amber and fire-red tones, condensation on glass, warm ember backlighting, dark moody bar backdrop, editorial beverage photography, 8k detail
og-image.webp
Meta / redes sociales
Cuadrado (1024x1024)
Igneo Restaurante brand composition, fire and ember tones, minimal elegant plating shot, deep black background, editorial luxury restaurant branding style, 8k detail

Nota: todos los prompts deben mantenerse consistentes en iluminación (cálida, tipo brasa), fondo (negro profundo) y estilo (editorial/macro), para que el conjunto se sienta como una sola sesión fotográfica coherente — no imágenes sueltas de estilos distintos.

7. RESPONSIVE
Debe verse perfecto — no "aceptable" — en desktop, laptop, tablet y mobile. Cada breakpoint se adapta cuidadosamente, no solo se reordena.

8. RENDIMIENTO
Lazy loading y code splitting
next/image en todas las imágenes, con tamaños correctos
Optimización de imágenes (WebP, compresión)
Lighthouse superior a 95 en Performance, Accessibility, Best Practices y SEO

9. ACCESIBILIDAD Y SEO
ARIA labels, navegación por teclado, foco visible, contraste correcto, HTML semántico
Metadata completa, Open Graph, Twitter Cards
Schema.org Restaurant (con horarios, dirección, rango de precio, métodos de pago)
Sitemap, robots.txt, canonical URLs

10. ENTREGA
El proyecto debe correr con npm install && npm run dev sin errores ni warnings.
Checklist final antes de entregar
[ ] Sin errores de TypeScript
[ ] Sin imports sin usar ni componentes muertos
[ ] Sin estilos duplicados
[ ] Responsive verificado en todos los breakpoints
[ ] Todas las animaciones funcionan correctamente
[ ] Script de generación de imágenes probado (o imágenes ya generadas y presentes en public/images/)
[ ] Lighthouse > 95 en las 4 métricas
[ ] Contenido de testimonios y datos prácticos coincide exactamente con lo definido en la sección 5 (sin inventar reseñas ni datos)

11. FILOSOFÍA
No desarrolles como una IA que genera código genérico. Desarrolla como el equipo descrito en la sección 0, trabajando en conjunto. El resultado final debe ser un sitio que un cliente pagaría entre USD $30,000 y $50,000, tanto por su calidad visual como por la excelencia de su implementación técnica.
Necesito implementar la sección de "Menú Interactivo" en la landing de Igneo con el sistema de toggles dinámicos (inspirado en Zuma Restaurant), con dos pestañas principales — COMIDA y BEBIDAS — que cambian el contenido sin recargar la página, con transición animada (fade + leve movimiento vertical) y diseño coherente con la identidad de marca (#0A0A0A, acentos ámbar/naranja fuego, glassmorphism en las tarjetas).
Dentro de COMIDA, sub-filtros por categoría, con este contenido real y exacto (no modificar textos ni precios):
Entradas
Consomé de Pescado — $6 — Fondo de huesos de pescado ahumado, pistache de la casa y limón
Croquetas de Bacalao o Chorizo — $8 — 5 croquetas de bacalao y curry afro, o 5 croquetas de chorizo tableño
Sao (vienés, salado o habanero) — $8 — Dos piezas de patitas de cerdo, pepino, cebolla blanca, vinagre y jugo de limón
Ceviche Fresco — $16 — Pesca fresca del día, limón mandarina, aguacate y lechuga
Tiradito Mango y Lulo — $16 — Pesca del día curada en cítrico con leche de tigre de mango y lulo
Aguachile de Mandarina — $16 — Langostinos marinados en mezcla ácida picante y fresca con mandarinas y pepino en semilla
Chicharrón Crujiente, Pegajoso y Jugosa Panceta Frita en Wok — $16 — Pork belly servido con hierbas frescas, chile y ajo
Ensaladas
Ensalada de Mango y Camarones — $10 — Mango verde, salsa vietnamita, camarones y maní
Ensalada de Sandía — $10 — Sandía en temporada, aguacate, queso fresco y aceite de menta
Ensalada Estilo del Norte de China — $10 — Pepino sin semilla y zanahoria, bañada en salsa estilo del norte de China
Yakitoris (Pinchos a la Brasa — Orden de 2 Pinchos)
Carnita de Desfile (Filete) — $5
Encuentro de Pollo — $5
Costilla de Cerdo — $5
Espárrago con Tocino — $4
Tomates Cherry con Tocino — $4
Hongos — $4
Pincho Platter de 8 — $12 (3 pinchos de carne + 5 de vegetales)
Pincho Platter de 10 — $20 (5 pinchos de carne + 5 de vegetales)
Sides
Patacones Sexis — $6
Yuca Frita — $6
Arroz Jazmín — $6
Arroz con Coco — $6
Papa Asada — $6
Kimchi de la Casa — $6
Postre
Helado de Pipa de la Casa
Platos Fuertes (destacar como sección premium/hero del menú)
Pesca del Día al Vapor — Precio de mercado — Filete al vapor estilo cantonés con cebollina y jengibre
Medio Pollo en su Jugo — $18 — Pollo sellado con reducción de huesos y limón asado
Pork Belly Dong Po Rou — $18 — Sabor tierno y profundo, cocido lentamente, servido con hojas mostaza
Punta Palomilla y Yaumaki — $24 — En parrilla a baja temperatura con hojas chinas salteadas en ajo y caldo
Acocado de Pulpo — $28 — Tentáculos de pulpo a la parrilla en salsa afrocaribeña con yuca frita
Pesca del Día con Salsa Romesco (filete o entero) — Precio de mercado — Pesca fresca sobre salsa romesco y ensaladilla de verdes
Indicadores visuales: incluye iconos pequeños junto a los platos que correspondan, replicando el sistema del menú físico: 🌶️ Picante, alérgenos, 🥜 Nueces, 🥛 Lácteos.
Dentro de BEBIDAS (estructura lista, contenido PENDIENTE):
 Deja esta sub-sección construida con el mismo diseño de tarjetas, pero con placeholders claros tipo "Cóctel de Autor — Nombre pendiente" hasta recibir el contenido real — no generar nombres ni precios ficticios.
Necesito un fondo mucho más creativo y con mayor profundidad visual para la sección de "Menú" (Platos Fuertes, Entradas, Ensaladas, Yakitoris) en la landing de Igneo. Actualmente el fondo es plano y no refuerza la identidad de marca de fuego/brasa. Quiero que el fondo se convierta en parte de la narrativa visual, no solo en un color de relleno.
Dirección creativa (elige la que mejor se ejecute técnicamente, o combina elementos):
Capas de humo en movimiento (parallax): 2-3 capas de humo semitransparente en tonos grises/ámbar oscuro, moviéndose a velocidades distintas según el scroll (parallax), dando sensación de profundidad real detrás de las tarjetas de platos — sin saturar ni tapar el contenido (opacidad baja, 10-20%).
Textura de carbón/brasas con partículas animadas: fondo con textura de carbón encendido muy oscurecido (casi negro, apenas visible), con pequeñas partículas tipo chispas subiendo lentamente en loop infinito (CSS keyframes o Canvas), concentradas más cerca del borde inferior de la sección como si emergieran de una parrilla imaginaria debajo del contenido.
Gradiente radial dinámico con "respiración": un halo de luz cálida (ámbar/naranja) que pulsa muy sutilmente de intensidad (glow-pulse ya definido en el sistema de diseño), posicionado detrás de las categorías destacadas como "Platos Fuertes", simulando el resplandor de una parrilla encendida fuera de cámara.
Patrón geométrico sutil inspirado en texturas asiáticas: una textura de fondo muy tenue (5-8% de opacidad) inspirada en patrones tradicionales asiáticos (ej. seigaiha/olas japonesas, o líneas de bambú estilizadas) fusionada con elementos de líneas de humo — refuerza visualmente el concepto de fusión asiático-caribeña sin ser literal ni decorativo de más.
Requisitos técnicos (no negociables):
El fondo nunca debe competir con la legibilidad del texto ni con las fotos de los platos — siempre debe quedar claramente en segundo plano.
Debe usar únicamente CSS/SVG/Canvas ligero o un video looped muy comprimido — nada que dispare el peso de la página ni comprometa el LCP < 1.8s ya definido en el plan técnico.
El movimiento debe pausarse o desactivarse en dispositivos con prefers-reduced-motion activado (accesibilidad).
En móvil, simplifica el efecto (menos capas, movimiento reducido o estático) para no afectar el rendimiento en dispositivos de gama media/baja.
Aplica el mismo tratamiento de fondo tanto en la sección de "Menú Interactivo" (Comida/Bebidas) como en "Platos Fuertes", para que se sienta como una sola experiencia continua al hacer scroll, no como dos secciones desconectadas.
Agrega una sección de "Reservaciones" a la landing de FUEGO & MAR, manteniendo exactamente el mismo lenguaje visual del resto del sitio: fondo oscuro/negro, fotografía con brasas o textura de fuego de fondo (con overlay oscuro para legibilidad), tipografía serif elegante para el título, y acento naranja/ámbar (#D4823C o similar al ya usado) para botones y detalles.
Estructura de la sección:
Encabezado: algo como "Reserva tu Experiencia" o "Tu Mesa te Espera", en la misma tipografía serif del hero.
Subtítulo corto: una línea que refuerce la exclusividad ("Vive el fuego, la fusión y el sabor en cada visita").
Formulario de reservación elegante y minimalista con campos: Nombre, Teléfono/WhatsApp, Fecha, Hora, Número de personas, y un campo opcional de "Ocasión especial" (cumpleaños, aniversario, etc.) — inputs con bordes finos, fondo semitransparente oscuro, y foco en el acento ámbar al interactuar.
Botón principal: "Confirmar Reservación" en el mismo estilo naranja sólido que ya usan en "RESERVAR" y "VER MENÚ".
Alternativa directa: debajo del formulario, un texto pequeño tipo "¿Prefieres reservar por WhatsApp?" con ícono y enlace directo al número de contacto — esto es clave porque muchos restaurantes en Panamá cierran reservas por WhatsApp más que por formulario web.
Datos de respaldo visibles: horario de atención y ubicación (Calle 59 Este #19, San Francisco, Panamá) en texto pequeño, para dar contexto sin saturar.
Micro-interacciones sutiles: animación suave al hacer focus en los inputs, y un pequeño efecto de brillo/ember en el botón al hover, coherente con el concepto de "fuego".
Ubicación sugerida en la página: justo antes del footer, o inmediatamente después de la sección "Platos que Cuentan Historias" — funciona como cierre natural: primero enamoras con el menú, luego cierras con la acción de reservar.

Mejora adicional que noto necesaria (no pediste, pero vale la pena): en el header actual solo aparece el botón "RESERVAR" sin acceso directo — asegúrate de que ese botón haga scroll/ancla directo a esta nueva sección, para que la navegación sea consistente y no quede como un botón decorativo que no lleva a ningún lado.
Convierte los íconos de WhatsApp, Instagram y TikTok (en el footer y en cualquier otro lugar del sitio donde aparezcan) en enlaces reales que abran cada plataforma directamente:
WhatsApp → https://wa.me/[número real de Igneo]?text=Hola,%20quiero%20hacer%20una%20reserva
Instagram → https://instagram.com/[usuario real de Igneo]
TikTok → https://www.tiktok.com/@[usuario real de Igneo]
Requisitos técnicos:
Todos deben abrir en una nueva pestaña (target="_blank" con rel="noopener noreferrer" por seguridad)
El ícono debe tener un aria-label descriptivo (ej. "Contactar por WhatsApp") para accesibilidad
Verifica que los números/usuarios sean exactamente los reales del cliente antes de publicar — no dejar placeholders
1. Reemplaza todas las referencias a "FUEGO & MAR" por "Igneo Restaurante" en cualquier parte del proyecto donde haya quedado sin actualizar.
2. Configura los enlaces reales en el Footer y cualquier otro lugar del sitio donde aparezcan:
Instagram → https://www.instagram.com/igneorestaurante/
WhatsApp → https://wa.me/5073872173?text=Hola,%20quiero%20hacer%20una%20reserva
No incluir íconos de Facebook ni TikTok — solo estos dos canales.
3. Requisitos técnicos:
Ambos enlaces abren en nueva pestaña (target="_blank" + rel="noopener noreferrer")
aria-label descriptivo en cada ícono (ej. "Contactar por WhatsApp", "Síguenos en Instagram")
Guarda el número en una constante reutilizable en constants/info.ts (ej. WHATSAPP_NUMBER = "5073872173"), no hardcodeado en cada componente donde se use — así el botón del Hero, el de la sección de Reservas, y el del Footer usan la misma fuente.
4. Actualiza el Schema.org JSON-LD con el teléfono real:
json
"telephone": "+5073872173"
5. Actualiza el rating al dato más reciente confirmado: 4.7 comida / 4.6 servicio / 4.3 ambiente — 41 reseñas.
6. Recuerda mantener marcadas como placeholder temporal las imágenes generadas por IA, con nota en el código de que deben reemplazarse por fotografía real del restaurante.
