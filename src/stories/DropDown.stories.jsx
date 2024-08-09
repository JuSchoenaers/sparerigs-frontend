// stories/Button.stories.jsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import brands from './data/brands.json'
import Dropdown from '../components/DropDown';

const getFormattedOptions = ()=>{
  return brands.map(val =>{
    console.log(val)
    return {label : val.brandName, id:brands.indexOf(val), image:val.brandLogo}
  })
}

export default {
  title: 'Form elements/Input/DropDown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <Dropdown {...args} />;


export const Default = Template.bind({});
Default.args = {
  placeholder : 'Test',
  onChange: action('onChange'),
  initialOptions : getFormattedOptions()
};



