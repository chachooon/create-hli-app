const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@/components': path.resolve(__dirname, '../components'),
      '@/styles': path.resolve(__dirname, '../styles'),
      '@/pages': path.resolve(__dirname, '../pages'),
      '@/stories': path.resolve(__dirname, '../stories'),
      '@/public': path.resolve(__dirname, '../public'),
      '@/.storybook': path.resolve(__dirname, '.')
    };
    return config;
  }
};
