// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import InputPassword from '../components/InputPassword';

export default {
  title: 'Form elements/Input/Password',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <InputPassword {...args} />;


export const Default = Template.bind({});
Default.args = {
  placeholder : 'Password',

  onChange: action('onChange')

};




