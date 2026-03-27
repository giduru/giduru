import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Giduru',
  tagline: 'Your finances, your files, your way',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://giduru.com',
  baseUrl: '/',

  organizationName: 'giduru',
  projectName: 'giduru',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/giduru/giduru/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'GIDURU',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://app.giduru.com',
          label: 'Open App',
          position: 'right',
          className: 'navbar-app-link',
        },
        {
          href: 'https://github.com/giduru/giduru',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {label: 'Launch App', href: 'https://app.giduru.com'},
            {label: 'Documentation', to: '/docs/introduction'},
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {label: 'hledger', href: 'https://hledger.org'},
            {label: 'Ledger', href: 'https://ledger-cli.org'},
            {label: 'Plain Text Accounting', href: 'https://plaintextaccounting.org'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/giduru'},
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Giduru.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
