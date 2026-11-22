# Avilagutier Craft & Trail 🏔️🍺✈️

> Bitácora personal de senderismo alpino, viajes nórdicos y catas de cerveza artesana estilo Untappd.

Sitio web estático de alto rendimiento creado con **Astro 5**, **Tailwind CSS**, **Content Collections** y **Leaflet.js + OpenStreetMap**.

---

## 🎨 Paleta de Colores

| Color | Hex | Uso Principal |
| :--- | :--- | :--- |
| **Ámbar Malta** | `#D97796` | Acentos, destellos, badges |
| **Ámbar Dorado** | `#F59E0B` | Cervezas, calificaciones, estrellas Untappd |
| **Verde Bosque** | `#1B4332` | Naturaleza, viajes, contrastes oscuros |
| **Verde Lúpulo** | `#2D6A4F` | Trekking, senderos, botones principales |
| **Pizarra Cumbre** | `#0F172A` | Fondos de alto contraste, tipografía principal |
| **Espuma Hueso** | `#FAF8F5` | Fondo base cálido y limpio del sitio |

---

## 📂 Estructura del Proyecto

```text
├── Images/                         # Logotipos vectoriales originales (A, B, C)
├── public/
│   ├── images/
│   │   ├── cervezas/               # Ilustraciones y fotos de cervezas
│   │   ├── logos/                  # SVGs del pin alpino, monograma y sello
│   │   ├── trekking/               # Fotos e infografías de senderismo
│   │   └── viajes/                 # Fotos de destinos y ciudades
│   └── vendor/leaflet/             # Leaflet.js y assets para el mapa interactivo
├── src/
│   ├── components/
│   │   ├── BeerCard.astro          # Tarjeta de cata estilo Untappd con estrellas
│   │   ├── Footer.astro            # Pie de página con sello de expedición y paleta
│   │   ├── Header.astro            # Barra de navegación móvil/desktop
│   │   ├── StarRating.astro        # Calificación por estrellas (1 a 5)
│   │   ├── TravelCard.astro        # Tarjeta de crónica de viajes (Placer/Trabajo)
│   │   └── TrekCard.astro          # Ficha de ruta (Distancia, desnivel, GPS)
│   ├── content/
│   │   ├── cervezas/               # Entradas de la colección de cervezas
│   │   ├── trekking/               # Entradas de la colección de trekking
│   │   └── viajes/                 # Entradas de la colección de viajes
│   ├── content.config.ts           # Schemas estrictos Zod de Content Collections
│   ├── layouts/
│   │   └── Layout.astro            # Plantilla base HTML con OpenGraph y viewport
│   ├── pages/
│   │   ├── index.astro             # Portada moderna, mobile-first
│   │   ├── cervezas.astro          # Catálogo con filtro rápido por ciudad/estilo y buscador
│   │   ├── cervezas/[slug].astro   # Página individual de cata
│   │   ├── viajes.astro            # Crónicas de viaje
│   │   ├── viajes/[slug].astro     # Página individual de viaje
│   │   ├── trekking.astro          # Rutas de montaña
│   │   ├── trekking/[slug].astro   # Página individual de ruta
│   │   └── mapa.astro              # Mapa interactivo Leaflet.js + OpenStreetMap
│   └── utils/
│       └── url.ts                  # Helper base para rutas relativas
├── astro.config.mjs                # Configuración site y base para GitHub Pages
└── tailwind.config.mjs             # Configuración de tema y paleta personalizada
```

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview
```

---

## 📝 Cómo Añadir Nuevas Entradas

Crea un nuevo archivo `.md` en la carpeta correspondiente:

### Cervezas (`src/content/cervezas/mi-cerveza.md`)
```markdown
---
nombre: "Doble IPA Lupulada Salvaje"
cerveceria: "Pub El Lúpulo Feroz"
estilo: "Double Hazy IPA"
graduacion: 8.2
puntuacion: 4.5
ciudad: "Madrid"
fecha: 2026-10-14
latitud: 40.4168
longitud: -3.7038
foto: "/images/cervezas/doble-ipa.svg"
notas: "Explosión tropical en nariz..."
---
Notas adicionales de la cata en formato Markdown...
```

### Viajes (`src/content/viajes/mi-viaje.md`)
```markdown
---
titulo: "Fiordos y Cerveza en Bergen"
ciudad: "Bergen"
pais: "Noruega"
motivo: "placer" # o "trabajo"
fecha: 2026-08-18
latitud: 60.3913
longitud: 5.3221
foto: "/images/viajes/bergen-fiordos.svg"
resumen: "4 días recorriendo los muelles..."
---
Crónica completa del viaje...
```

### Trekking (`src/content/trekking/mi-ruta.md`)
```markdown
---
nombre: "Ascensión a Góriz"
lugar: "Parque Nacional de Ordesa (Huesca)"
distancia_km: 18.5
desnivel: 1150
fecha: 2026-09-08
latitud: 42.6667
longitud: 0.0500
foto: "/images/trekking/ordesa-goriz.svg"
notas: "Ruta exigente pero de belleza sobrecogedora..."
---
Ficha técnica y descripción de la ruta...
```

Todas las nuevas entradas se incorporan automáticamente al **Mapa Global**, a los listados y a los filtros.
