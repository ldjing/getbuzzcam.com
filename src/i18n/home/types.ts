export type PhotoKey = 'solo' | 'ootd' | 'jump' | 'group' | 'tripod' | 'family';

export interface HomeContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1a: string; h1b: string; sub: string; price: string; chip: string; alt1: string; alt2: string };
  what: { q: string; a: string };
  how: { title: string; steps: { t: string; d: string }[] };
  features: {
    title: string;
    sub: string;
    items: { kicker: string; t: string; d: string; bullets?: string[]; shot: number; alt: string; chip?: string }[];
  };
  compare: { title: string; sub: string; colA: string; colB: string; rows: [string, string, string][]; note: string };
  uses: { title: string; sub: string; items: { t: string; d: string; photo: PhotoKey; alt: string; href?: string; more?: string }[] };
  trust: { title: string; items: { t: string; d: string }[] };
  specs: { title: string; rows: [string, string][] };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; sub: string; price: string };
}
