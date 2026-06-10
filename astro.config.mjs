import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';

const legalDocs = ['privacy', 'terms', 'legal', 'support'];
const locales = ['en', 'fr'];

const legacyRedirects = Object.fromEntries(
  locales.flatMap((locale) =>
    legalDocs.flatMap((doc) => [
      [`/darts/${locale}/${doc}`, `/${locale}/darts/${doc}/`],
    ])
  )
);

export default defineConfig({
  site: 'https://hub.ondeinteractive.com',
  markdown: {
    processor: unified({
      smartypants: false,
    }),
  },
  redirects: {
    ...legacyRedirects,
  },
  integrations: [
    starlight({
      title: 'Onde Interactive',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        fr: {
          label: 'Français',
        },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Darts',
          items: [
            { slug: 'darts/privacy' },
            { slug: 'darts/terms' },
            { slug: 'darts/legal' },
            { slug: 'darts/support' },
          ],
        },
      ],
    }),
  ],
});
