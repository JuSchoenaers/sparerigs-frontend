// stories/Button.stories.jsx
import React from 'react';
import Button from '../components/Button';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes : {
    onClick : action('Button clicked')
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick : action('Button clicked')
};

export const secondary = Template.bind({});
secondary.args = {
  label: 'Secondary Button',
  secondary : true,
  onClick : action('Button clicked')
};

