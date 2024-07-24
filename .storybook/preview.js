/** @type { import('@storybook/react').Preview } */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import '../src/styles/tailwind.css';
import theme from './theme';
const preview = {
  parameters: {
    docs: {
      theme: theme,
    },
    backgrounds:{
      default:'Sparerigs',
      values:[{
        name:'Sparerigs',
        value:'#0D062F'
      }]
    },
    parameters: {
      actions: { argTypesRegex: '^on.*' },

    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
library.add(fab, fas, far)