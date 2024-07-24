import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Sparerigs Storybook',
  brandUrl: 'https://sparerigs.com',
  brandImage: '/Logo.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#640DCD',
  colorSecondary: '#3619C7',

  // UI
  appBg: '#060317',
  appContentBg: '#060317',
  appPreviewBg: '#060317',
  appBorderColor: '#7F22F1',
  appBorderRadius: 4,
  // Text colors
  textColor: '#EDEEF2',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#0D062F',

  // Form colors
  inputBg: '#060317',
  inputBorder: '#5133E5',
  inputTextColor: '#EDEEF2',
  inputBorderRadius: 8,
});