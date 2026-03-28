import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction', 'install', 'features', 'quickstart', 'concepts'],
    },
    {
      type: 'category',
      label: 'Using Giduru',
      items: ['editor', 'analysis', 'vaults', 'plugins'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['hledger-format', 'alternatives'],
    },
  ],
};

export default sidebars;
