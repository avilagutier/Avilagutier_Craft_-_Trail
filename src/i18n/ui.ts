export const defaultLang = 'es' as const;

export const languages = {
  es: { name: 'Español', flag: '🇪🇸', code: 'es' },
  en: { name: 'English', flag: '🇬🇧', code: 'en' },
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.beers': 'Cervezas & Pubs',
    'nav.travel': 'Viajes',
    'nav.trekking': 'Trekking',
    'nav.map': 'Mapa Global',
    'nav.about': 'Sobre Mí',
    'nav.motto': 'Bitácora de cumbres, rutas salvajes y la mejor cerveza artesana.',

    // Hero
    'hero.badge': '🏔️ Senderismo • 🍺 Cerveza Artesana • ✈️ Bitácora',
    'hero.title': 'Avilagutier',
    'hero.subtitle': 'Craft & Trail',
    'hero.description':
      'Un cuaderno de campo digital para quienes encuentran la felicidad coronando picos alpinos y compartiendo una buena pinta en pubs con historia.',
    'hero.cta.map': '🗺️ Abrir Mapa Global',
    'hero.cta.beers': '🍺 Catas de Cerveza',
    'hero.cta.trekking': '🥾 Rutas de Montaña',

    // Stats
    'stats.beers': 'Catas Untappd',
    'stats.km': 'En Senderos',
    'stats.destinations': 'Destinos',

    // Beers Section
    'beers.badge': 'Últimas Catas',
    'beers.title': 'Cervezas & Pubs · Estilo Untappd',
    'beers.subtitle': 'Exploración de maltas, lúpulos salvajes y tabernas con alma. Puntuaciones objetivas del 1 al 5.',
    'beers.view_all': 'Ver todas las catas',
    'beers.search_placeholder': 'Buscar por nombre, pub o notas...',
    'beers.showing': 'Mostrando:',
    'beers.city': 'Ciudad:',
    'beers.style': 'Estilo:',
    'beers.all': 'Todas',
    'beers.all_styles': 'Todos',
    'beers.rating': 'Calificación',
    'beers.read_review': 'Ver cata',
    'beers.empty': 'No se encontraron cervezas',
    'beers.empty_sub': 'Prueba a restablecer los filtros o buscar con otro término.',
    'beers.reset': 'Restablecer todos los filtros',
    'beers.back': '← Volver a todas las cervezas',

    // Travel Section
    'travel.badge': 'Bitácora Internacional',
    'travel.title': 'Viajes, Ciudades & Destinos',
    'travel.subtitle': 'Crónicas de ciudades hanseáticas, fiordos escandinavos y encuentros profesionales por el mundo.',
    'travel.view_all': 'Ver todos los viajes',
    'travel.read_story': 'Leer crónica',
    'travel.work': 'Trabajo',
    'travel.leisure': 'Placer',
    'travel.back': '← Volver a todos los viajes',

    // Trekking Section
    'trek.badge': 'Alta Montaña',
    'trek.title': 'Rutas de Trekking & Cumbres',
    'trek.subtitle': 'Ascensiones a refugios de altura, desfiladeros kársticos y senderos salvajes en Pirineos y Picos de Europa.',
    'trek.view_all': 'Ver todas las rutas',
    'trek.read_trail': 'Ver itinerario',
    'trek.routes_registered': 'Rutas registradas',
    'trek.total_distance': 'Distancia total',
    'trek.total_elevation': 'Desnivel positivo',
    'trek.back': '← Volver a todas las rutas',

    // Map Page
    'map.breadcrumb': '🗺️ Exploración Cartográfica • OpenStreetMap + Leaflet.js',
    'map.title': 'Mapa Global de Expediciones',
    'map.subtitle': 'Descubre de un vistazo geográfico cada pub visitado, cumbre alcanzada y rincón explorado. Toca cualquier marcador para ver fotos y la reseña completa.',
    'map.filter_all': '🌐 Todas las huellas',
    'map.filter_beers': '🍺 Cervezas & Pubs',
    'map.filter_travel': '✈️ Viajes',
    'map.filter_trek': '🥾 Trekking',
    'map.legend_title': '📍 Pines coloreados por categoría',
    'map.read_more': 'Ver reseña completa →',
    'map.cta_badge': '🗺️ Cartografía OpenStreetMap + Leaflet',
    'map.cta_title': 'Explora todas las coordenadas en el Mapa Global',
    'map.cta_desc': 'Cada cata, viaje y sendero tiene su punto exacto georreferenciado. Filtra por categoría y descubre las reseñas tocando los pines interactivos.',
    'map.cta_button': 'Abrir Mapa Completo',

    // About Me & Contact
    'about.badge': '👋 Presentación & Contacto',
    'about.title': 'Detrás de Avilagutier Craft & Trail',
    'about.subtitle': 'Mario Ávila Gutiérrez · Caminante, curioso cervecero y explorador de datos',
    'about.bio1':
      '¡Hola! Soy Mario Ávila Gutiérrez. Esta bitácora nació de una pasión doble que me acompaña en cada escapada: la fascinación por subir cimas alpinas y el ritual sagrado de brindar con una cerveza artesanal bien elaborada en viejas tabernas locales.',
    'about.bio2':
      'En lo profesional trabajo en el mundo de los datos y la tecnología, lo que me ha llevado a combinar viajes de trabajo por Europa con rutas de senderismo en Pirineos, Picos de Europa y los fiordos nórdicos.',
    'about.motto':
      '«No hay cumbre que no merezca una buena pinta, ni pinta que no inspire una próxima cima.»',
    'about.location': 'Madrid, España / Base Pirineos',
    'about.instagram_cta': 'Instagram @avilagutier',
    'about.email_cta': 'Escríbeme un correo',
    'about.view_profile': 'Conoce más sobre mí →',

    // Footer
    'footer.quote':
      '«No hay cumbre que no merezca una buena pinta, ni pinta que no inspire una próxima cima.»',
    'footer.explore': 'Explora la Bitácora',
    'footer.culture': 'Cultura & Rumbo',
    'footer.palette': 'Paleta:',
    'footer.rights': 'Avilagutier Craft & Trail. Desarrollado con Astro y Tailwind CSS.',
    'footer.made_with': 'Hecho para explorar desde el móvil o la montaña',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.beers': 'Beers & Pubs',
    'nav.travel': 'Travels',
    'nav.trekking': 'Trekking',
    'nav.map': 'Global Map',
    'nav.about': 'About Me',
    'nav.motto': 'Logbook of summits, wild trails, and the finest craft beer.',

    // Hero
    'hero.badge': '🏔️ Alpine Trekking • 🍺 Craft Beer • ✈️ Logbook',
    'hero.title': 'Avilagutier',
    'hero.subtitle': 'Craft & Trail',
    'hero.description':
      'A digital field notebook for those who find joy in conquering alpine summits and sharing a great pint in historic pubs.',
    'hero.cta.map': '🗺️ Open Global Map',
    'hero.cta.beers': '🍺 Beer Tastings',
    'hero.cta.trekking': '🥾 Mountain Trails',

    // Stats
    'stats.beers': 'Untappd Tastings',
    'stats.km': 'On Trails',
    'stats.destinations': 'Destinations',

    // Beers Section
    'beers.badge': 'Latest Tastings',
    'beers.title': 'Beers & Pubs · Untappd Style',
    'beers.subtitle': 'Exploring specialty malts, wild hops, and pubs with genuine soul. Objective 1-to-5 ratings.',
    'beers.view_all': 'View all tastings',
    'beers.search_placeholder': 'Search by name, pub, or tasting notes...',
    'beers.showing': 'Showing:',
    'beers.city': 'City:',
    'beers.style': 'Style:',
    'beers.all': 'All',
    'beers.all_styles': 'All styles',
    'beers.rating': 'Rating',
    'beers.read_review': 'View tasting',
    'beers.empty': 'No beers found',
    'beers.empty_sub': 'Try resetting your filters or searching for another term.',
    'beers.reset': 'Reset all filters',
    'beers.back': '← Back to all beers',

    // Travel Section
    'travel.badge': 'International Logbook',
    'travel.title': 'Travels, Cities & Destinations',
    'travel.subtitle': 'Chronicles of Hanseatic ports, Scandinavian fjords, and tech conferences worldwide.',
    'travel.view_all': 'View all travels',
    'travel.read_story': 'Read story',
    'travel.work': 'Work',
    'travel.leisure': 'Leisure',
    'travel.back': '← Back to all travels',

    // Trekking Section
    'trek.badge': 'High Mountains',
    'trek.title': 'Trekking Routes & Peaks',
    'trek.subtitle': 'High-altitude hut ascents, karst limestone canyons, and wilderness trails across the Pyrenees and Picos de Europa.',
    'trek.view_all': 'View all routes',
    'trek.read_trail': 'View trail guide',
    'trek.routes_registered': 'Registered routes',
    'trek.total_distance': 'Total distance',
    'trek.total_elevation': 'Elevation gain',
    'trek.back': '← Back to all trails',

    // Map Page
    'map.breadcrumb': '🗺️ Cartographic Exploration • OpenStreetMap + Leaflet.js',
    'map.title': 'Global Expedition Map',
    'map.subtitle': 'Geographically explore every visited pub, conquered summit, and traveled path. Tap any marker to view photos and full reviews.',
    'map.filter_all': '🌐 All tracks',
    'map.filter_beers': '🍺 Beers & Pubs',
    'map.filter_travel': '✈️ Travels',
    'map.filter_trek': '🥾 Trekking',
    'map.legend_title': '📍 Category color-coded pins',
    'map.read_more': 'Read full review →',
    'map.cta_badge': '🗺️ OpenStreetMap + Leaflet Cartography',
    'map.cta_title': 'Explore all GPS coordinates on the Global Map',
    'map.cta_desc': 'Every tasting, travel stop, and hiking route has its exact georeferenced spot. Filter by category and tap interactive pins to open stories.',
    'map.cta_button': 'Open Full Map',

    // About Me & Contact
    'about.badge': '👋 Intro & Contact',
    'about.title': 'Behind Avilagutier Craft & Trail',
    'about.subtitle': 'Mario Ávila Gutiérrez · Trail walker, curious beer enthusiast & data explorer',
    'about.bio1':
      'Hi there! I am Mario Ávila Gutiérrez. This field journal was born from a double passion that fuels my journeys: the thrill of conquering alpine peaks and the cherished ritual of enjoying a well-crafted local beer in historic pubs.',
    'about.bio2':
      'Professionally, I work in the world of data science and technology, which allows me to combine business trips across Europe with weekend treks through the Pyrenees, Picos de Europa, and Norwegian fjords.',
    'about.motto':
      '«No summit without a well-deserved pint, no pint that doesn’t inspire the next summit.»',
    'about.location': 'Madrid, Spain / Pyrenees base',
    'about.instagram_cta': 'Instagram @avilagutier',
    'about.email_cta': 'Send me an Email',
    'about.view_profile': 'More about me & contact →',

    // Footer
    'footer.quote':
      '«No summit without a well-deserved pint, no pint that doesn’t inspire the next summit.»',
    'footer.explore': 'Explore Logbook',
    'footer.culture': 'Culture & Course',
    'footer.palette': 'Palette:',
    'footer.rights': 'Avilagutier Craft & Trail. Built with Astro and Tailwind CSS.',
    'footer.made_with': 'Built to explore from mobile or the mountain',
  },
} as const;
