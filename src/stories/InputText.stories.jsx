// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import InputText from '../components/InputText';

export default {
  title: 'Form elements/Input/Basic',
  component: InputText,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <InputText {...args} />;


export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder : 'Test',
  iconLeft : "",
  iconRight : "",
  onChange: action('onChange')

};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'Label',
  placeholder : 'Test',
  iconLeft : "fa fa-magnifying-glass",
  iconRight : "",
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Label',
  placeholder : 'Test',
  iconLeft : "",
  iconRight : "fa fa-magnifying-glass",
};


