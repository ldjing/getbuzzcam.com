// Single source of truth for app facts used across the site.
// Every claim must match AutoBurst/AppStore/PRODUCT_FACTS.md.

export const SITE_URL = 'https://getbuzzcam.com';
export const APP_ID = '6758300007';
export const APP_NAME = 'BuzzCam';
export const PRICE_USD = '4.99';
export const MIN_IOS = '26.2';
export const SUPPORT_EMAIL = 'support@getbuzzcam.com';
export const LAST_UPDATED = '2026-11-20';

// App Store Connect → App Analytics → Campaigns gives you a provider token (pt).
// When it is set, every download link carries pt + ct, so App Store Connect
// can report downloads per page and per button. Leave empty to send plain links.
export const PROVIDER_TOKEN = '';

export type LocaleCode = 'en' | 'zh-Hans' | 'zh-Hant' | 'ja' | 'ko' | 'de' | 'fr' | 'es';

export interface LocaleInfo {
  code: LocaleCode;
  /** URL prefix, '' for English */
  path: string;
  /** <html lang> and hreflang value */
  hreflang: string;
  /** App Store storefront country */
  store: string;
  /** Folder name in src/assets/ui */
  ui: string;
  /** Photo set: A = East Asian cast, B = Western cast */
  cast: 'A' | 'B';
  /** Name shown in the language picker */
  label: string;
  ogLocale: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', path: '', hreflang: 'en', store: 'us', ui: 'en-US', cast: 'B', label: 'English', ogLocale: 'en_US' },
  { code: 'zh-Hans', path: 'zh-hans', hreflang: 'zh-Hans', store: 'cn', ui: 'zh-Hans', cast: 'A', label: '简体中文', ogLocale: 'zh_CN' },
  { code: 'zh-Hant', path: 'zh-hant', hreflang: 'zh-Hant', store: 'tw', ui: 'zh-Hant', cast: 'A', label: '繁體中文', ogLocale: 'zh_TW' },
  { code: 'ja', path: 'ja', hreflang: 'ja', store: 'jp', ui: 'ja', cast: 'A', label: '日本語', ogLocale: 'ja_JP' },
  { code: 'ko', path: 'ko', hreflang: 'ko', store: 'kr', ui: 'ko', cast: 'A', label: '한국어', ogLocale: 'ko_KR' },
  { code: 'de', path: 'de', hreflang: 'de', store: 'de', ui: 'de-DE', cast: 'B', label: 'Deutsch', ogLocale: 'de_DE' },
  { code: 'fr', path: 'fr', hreflang: 'fr', store: 'fr', ui: 'fr-FR', cast: 'B', label: 'Français', ogLocale: 'fr_FR' },
  { code: 'es', path: 'es', hreflang: 'es', store: 'es', ui: 'es-ES', cast: 'B', label: 'Español', ogLocale: 'es_ES' },
];

export const localeInfo = (code: LocaleCode) => LOCALES.find((l) => l.code === code)!;
export const localeHome = (code: LocaleCode) => {
  const p = localeInfo(code).path;
  return p ? `/${p}/` : '/';
};

/** App Store link for a storefront, tagged with the placement that sent the click. */
export function appStoreUrl(store = 'us', campaign = 'site') {
  const base = `https://apps.apple.com/${store}/app/id${APP_ID}`;
  if (!PROVIDER_TOKEN) return base;
  const params = new URLSearchParams({ pt: PROVIDER_TOKEN, ct: campaign.slice(0, 40), mt: '8' });
  return `${base}?${params}`;
}

/** Localized brand name as shown on the App Store in each storefront. */
export const BRAND: Record<LocaleCode, string> = {
  en: 'BuzzCam',
  'zh-Hans': 'Buzz相机',
  'zh-Hant': 'Buzz相機',
  ja: 'Buzzカメラ',
  ko: 'Buzz 카메라',
  de: 'Buzz Cam',
  fr: 'Buzz Cam',
  es: 'Buzz Cam',
};
