import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://avilagutier.github.io',
  base: '/Avilagutier_Craft_-_Trail',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
