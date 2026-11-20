// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const locales = {
  en: 'en',
  'zh-hans': 'zh-Hans',
  'zh-hant': 'zh-Hant',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  es: 'es',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://getbuzzcam.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'en', locales },
      changefreq: 'weekly',
      lastmod: new Date('2026-11-20'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
