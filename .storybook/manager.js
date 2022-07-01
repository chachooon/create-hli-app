import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

// https://storybook.js.org/docs/react/configure/theming
// https://storybook.js.org/docs/react/addons/addons-api#addonssetconfigconfig
addons.setConfig({
  theme:  create({
    base: 'light',
    appBg: 'white',
    barSelectedColor: '#FF6600',
    brandTitle: '한화생명 채널통합',
    brandUrl: 'https://design.hanwhalife.io/',
    brandImage: 'https://channel1.hanwhalife.io/images/storybook_logo.png'
  }),
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    collapsedRoots: ['other']
  }
});
