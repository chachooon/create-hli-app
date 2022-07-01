import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import * as NextImage from 'next/image';
// @ts-ignore
const OriginalNextImage = NextImage.default;
// @ts-ignore
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
});

/** @type {import('@storybook/addons').Parameters} */
export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    disable: true,
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: themes.normal
  },
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS }
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: []
    }
  }
};
