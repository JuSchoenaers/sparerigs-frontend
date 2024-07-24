// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import SecondaryButton from '../components/SecondaryButton';

export default {
  title: 'CTA/Button/Secondary',
  component: SecondaryButton,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <SecondaryButton {...args} />;

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
  iconLeft : "fa fa-magnifying-glass",
  iconRight : "",
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Label',
  onClick : action('Button clicked'),
  iconLeft : "",
  iconRight : "fa fa-magnifying-glass",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: '',
  onClick : action('Button clicked'),
  iconRight : "fa fa-plus",
};
