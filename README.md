# Avilagutier Craft & Trail 🏔️🍺✈️

> Bitácora personal de senderismo alpino, viajes nórdicos y catas de cerveza artesana estilo Untappd.

Sitio web estático de alto rendimiento creado con **Astro 5**, **Tailwind CSS**, **Content Collections** y **Leaflet.js + OpenStreetMap**. Desplegado en **Cloudflare Pages**.

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

## ☁️ Despliegue en Cloudflare Pages

1. En el panel de **Cloudflare**, entra a **Compute (Workers & Pages)** ➔ **Create application** ➔ pestaña **Pages** ➔ **Connect to Git**.
2. Conecta el repositorio: `git@github.com:avilagutier/Avilagutier_Craft_-_Trail.git` (rama `main`).
3. Ajustes de compilación:
   * **Framework preset**: `Astro`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
   * **Environment Variables**:
     * `NODE_VERSION`: `22`
4. Pulsa **Save and Deploy**. Cada `git push` a `main` se compila y publica automáticamente en el CDN global de Cloudflare.

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
├── astro.config.mjs                # Configuración optimizada para Cloudflare Pages
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
