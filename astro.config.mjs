import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://avilagutier-craft-trail.pages.dev',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
