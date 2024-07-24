// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import InputCheckbox from '../components/InputCheckbox';

export default {
  title: 'Form elements/Input/Checkbox',
  component: InputCheckbox,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <InputCheckbox {...args} />;


export const Default = Template.bind({});
Default.args = {
  label: 'Label',

  onChange: action('onChange')

};




