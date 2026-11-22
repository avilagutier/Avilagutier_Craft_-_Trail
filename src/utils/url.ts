/**
 * Utility to format URLs respecting Astro's site & base configuration.
 * Prevents broken 404 links on GitHub Pages subpaths.
 */
export function baseUrl(path: string = ''): string {
  const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');
  if (!path || path === '/') {
    return base ? `${base}/` : '/';
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
