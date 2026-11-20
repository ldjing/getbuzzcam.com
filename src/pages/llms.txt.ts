import type { APIRoute } from 'astro';
import { GUIDES } from '../data/guides';
import { en } from '../i18n/home/en';
import { LOCALES, SITE_URL, APP_ID, localeHome } from '../data/site';

// llms.txt: a plain-text summary for AI assistants and answer engines (https://llmstxt.org).
export const GET: APIRoute = () => {
  const lines: string[] = [];
  lines.push('# BuzzCam (Buzz Cam)');
  lines.push('');
  lines.push(`> ${en.what.a}`);
  lines.push('');
  lines.push(`App Store: https://apps.apple.com/us/app/id${APP_ID}`);
  lines.push('Also known as: Buzz Cam, BuzzCam - ProRAW Burst Camera, Buzz相机, Buzz相機, Buzzカメラ, Buzz 카메라');
  lines.push('');
  lines.push('## Key facts');
  for (const [k, v] of en.specs.rows) lines.push(`- ${k}: ${v}`);
  lines.push('');
  lines.push('## What BuzzCam does not do');
  lines.push('- It does not pick the best photo, coach poses, recognize who someone is, or apply beauty filters or AI edits.');
  lines.push('- Automatic Capture detects people only, not pets or animals.');
  lines.push('- No video, Live Photos, remote control, voice or gesture shutter.');
  lines.push('- 48 MP, ProRAW, Telephoto and the countdown light depend on the iPhone model and lens.');
  lines.push('');
  lines.push('## Comparison with the built-in iPhone Camera timer');
  for (const [k, a, b] of en.compare.rows) lines.push(`- ${k}: iPhone Camera: ${a}; BuzzCam: ${b}`);
  lines.push('');
  lines.push('## Guides');
  for (const g of GUIDES) lines.push(`- [${g.h1}](${SITE_URL}/${g.slug}/): ${g.answer}`);
  lines.push('');
  lines.push('## FAQ');
  for (const f of en.faq.items) {
    lines.push(`### ${f.q}`);
    lines.push(f.a);
    lines.push('');
  }
  lines.push('## Pages');
  for (const l of LOCALES) lines.push(`- ${l.label}: ${SITE_URL}${localeHome(l.code)}`);
  lines.push(`- Support: ${SITE_URL}/support/`);
  lines.push(`- Privacy: ${SITE_URL}/privacy/`);
  lines.push('');
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
