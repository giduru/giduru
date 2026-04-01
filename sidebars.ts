import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction', 'install', 'concepts', 'quickstart'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['features', 'vaults', 'alternatives'],
    },
    {
      type: 'category',
      label: 'Using Giduru',
      items: ['editor', 'analysis', 'plugins'],
    },
    {
      type: 'category',
      label: 'Language Reference',
      items: ['hledger-format', 'account-directives'],
    },
  ],
};

export default sidebars;
