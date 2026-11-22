import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cervezas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cervezas' }),
  schema: z.object({
    nombre: z.string(),
    cerveceria: z.string(), // cervecería / pub
    estilo: z.string(),
    graduacion: z.union([z.number(), z.string()]), // e.g. 8.2 o "8.2%"
    puntuacion: z.number().min(1).max(5), // 1 al 5
    ciudad: z.string(),
    fecha: z.coerce.date(),
    latitud: z.number(),
    longitud: z.number(),
    foto: z.string(),
    notas: z.string().optional(),
  }),
});

const viajes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/viajes' }),
  schema: z.object({
    titulo: z.string(),
    ciudad: z.string(),
    pais: z.string(),
    motivo: z.enum(['placer', 'trabajo']).or(z.string()),
    fecha: z.coerce.date(),
    latitud: z.number(),
    longitud: z.number(),
    foto: z.string(),
    resumen: z.string(),
  }),
});

const trekking = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/trekking' }),
  schema: z.object({
    nombre: z.string(), // nombre de ruta
    lugar: z.string(),
    distancia_km: z.number(),
    desnivel: z.union([z.number(), z.string()]), // e.g. 1150 o "1150 m"
    fecha: z.coerce.date(),
    latitud: z.number(),
    longitud: z.number(),
    foto: z.string(),
    notas: z.string().optional(),
  }),
});

export const collections = { cervezas, viajes, trekking };
