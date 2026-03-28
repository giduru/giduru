import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction', 'install', 'quickstart', 'concepts'],
    },
    {
      type: 'category',
      label: 'Using Giduru',
      items: ['editor', 'analysis', 'vaults'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['hledger-format', 'alternatives'],
    },
  ],
};

export default sidebars;
