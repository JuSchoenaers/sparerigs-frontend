// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import TreeSelect from '../components/TreeSelect';
import classification from './data/classification.json'

export default {
  title: 'Form elements/Input/TreeSelect',
  component: TreeSelect,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <TreeSelect {...args} />;


export const Default = Template.bind({});
Default.args = {
  placeholder : 'Test',
  onChange: action('onChange'),
  initialTree : classification
};



