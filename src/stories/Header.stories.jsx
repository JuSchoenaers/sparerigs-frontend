import React from 'react';
import TopBar from '../components/Header';

export default {
  title: 'Example/Top bar',
  component: TopBar,
  tags: ['autodocs'],
  argTypes : {
  }
};

const Template = (args) => <TopBar {...args} />;

export const Header = Template.bind({});
Header.args = {
  
};


