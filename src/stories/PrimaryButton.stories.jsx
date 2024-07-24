// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import PrimaryButton from '../components/PrimaryButton';

export default {
  title: 'CTA/Button/Primary',
  component: PrimaryButton,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <PrimaryButton {...args} />;

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