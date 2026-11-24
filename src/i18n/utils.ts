import { ui, defaultLang, type Lang, languages } from './ui';
import { baseUrl } from '../utils/url';

/**
 * Extract language code from URL pathname
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns translation function for given language
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

/**
 * Formats a localized path taking into account default locale without prefix
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/(en|es)/, '').replace(/\/$/, '') || '';
  if (lang === 'en') {
    return baseUrl(`/en${clean ? `/${clean.replace(/^\//, '')}` : ''}`);
  }
  return baseUrl(clean ? `/${clean.replace(/^\//, '')}` : '/');
}

/**
 * Returns the equivalent URL in the other language for the language switcher
 */
export function getSwitchLanguageUrl(currentPathname: string, targetLang: Lang): string {
  // Strip baseUrl if present
  const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');
  let path = currentPathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  // Remove existing /en prefix if present
  const isEn = path.startsWith('/en');
  const pathWithoutLang = isEn ? path.replace(/^\/en/, '') : path;
  const cleanPath = pathWithoutLang || '/';

  if (targetLang === 'en') {
    return baseUrl(`/en${cleanPath === '/' ? '' : cleanPath}`);
  } else {
    return baseUrl(cleanPath);
  }
}
