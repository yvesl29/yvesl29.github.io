export const languageLabels = {
  en: 'English',
  fr: 'Français',
} as const;

export type Locale = keyof typeof languageLabels;

export const homeCopy = {
  en: {
    htmlLang: 'en',
    metaDescription: 'Mobile apps by Onde Interactive.',
    kicker: 'Mobile apps',
    heading: 'Onde Interactive',
    intro: 'Mobile apps by Onde Interactive.',
    appsLabel: 'Apps',
    legalLinksHeading: 'Legal documents',
    languageLabel: 'Language',
    alternateLanguageText: 'Voir en français',
    storeHeading: 'Download',
    iosBadgeTop: 'Download on the',
    iosBadgeBottom: 'App Store',
    androidBadgeTop: 'GET IT ON',
    androidBadgeBottom: 'Google Play',
    footer: '© 2026 Yves Léon EI — Onde Interactive. All rights reserved.',
  },
  fr: {
    htmlLang: 'fr',
    metaDescription: 'Applications mobiles par Onde Interactive.',
    kicker: 'Applications mobiles',
    heading: 'Onde Interactive',
    intro: 'Applications mobiles par Onde Interactive.',
    appsLabel: 'Applications',
    legalLinksHeading: 'Documents légaux',
    languageLabel: 'Langue',
    alternateLanguageText: 'View in English',
    storeHeading: 'Télécharger',
    iosBadgeTop: "Télécharger dans l'",
    iosBadgeBottom: 'App Store',
    androidBadgeTop: 'DISPONIBLE SUR',
    androidBadgeBottom: 'Google Play',
    footer: '© 2026 Yves Léon EI — Onde Interactive. Tous droits réservés.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export const apps = [
  {
    slug: 'darts',
    icon: '/darts-icon.png',
    name: {
      en: 'Darts: Play & Track',
      fr: 'Darts: Play & Track',
    },
    storeLinks: {
      ios: 'https://apps.apple.com/us/app/darts-play-track/id6777970047',
      android: 'https://play.google.com/store/apps/details?id=com.diaudes.darts',
    },
    description: {
      en: 'A darts scoring and practice tracker for solo players.',
      fr: "Une application de score et d'entraînement aux fléchettes pour les joueurs solo.",
    },
    legalLinks: [
      {
        key: 'privacy',
        label: {
          en: 'Privacy Policy',
          fr: 'Politique de confidentialité',
        },
        href: {
          en: '/en/darts/privacy/',
          fr: '/fr/darts/privacy/',
        },
      },
      {
        key: 'terms',
        label: {
          en: 'Terms of Use',
          fr: "Conditions d'utilisation",
        },
        href: {
          en: '/en/darts/terms/',
          fr: '/fr/darts/terms/',
        },
      },
      {
        key: 'legal',
        label: {
          en: 'Legal Notice',
          fr: 'Mentions légales',
        },
        href: {
          en: '/en/darts/legal/',
          fr: '/fr/darts/legal/',
        },
      },
      {
        key: 'support',
        label: {
          en: 'Support',
          fr: 'Support',
        },
        href: {
          en: '/en/darts/support/',
          fr: '/fr/darts/support/',
        },
      },
    ],
  },
] as const;
