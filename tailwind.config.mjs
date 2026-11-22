/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ambar-malta': '#D97796',
        'ambar-dorado': '#F59E0B',
        'verde-bosque': '#1B4332',
        'verde-lupulo': '#2D6A4F',
        'pizarra': '#0F172A',
        'espuma': '#FAF8F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'untappd': '0 4px 20px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'untappd-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.14), 0 4px 10px -2px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
};
