import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionChip from '../components/ActionChip';

export default {
  title: 'Example/Action chip',
  component: ActionChip,
  tags: ['autodocs'],
  argTypes : {
    onClick : action('Button clicked')
  }
};

const Template = (args) => <ActionChip {...args} />;

export const Chip = Template.bind({});
Chip.args = {
  label: 'Read more',
  onClick : action('Button clicked'),
  info:'Things You Should Know About E-Waste'
};