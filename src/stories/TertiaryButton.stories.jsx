// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import TertiaryButton from '../components/TertiaryButton';

export default {
  title: 'CTA/Button/Tertiary',
  component: TertiaryButton,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <TertiaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  onClick : action('Button clicked'),
  iconLeft : "",
  iconRight : "",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'Label',
  onClick : action('Button clicked'),
  iconLeft : "fa fa-arrow-left",
  iconRight : "",
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Label',
  onClick : action('Button clicked'),
  iconLeft : "",
  iconRight : "fa fa-arrow-right",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: '',
  onClick : action('Button clicked'),
  iconRight : "fa fa-plus",
};

