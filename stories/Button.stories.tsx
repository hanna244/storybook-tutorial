import React from 'react';
import { ComponentStory, Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button variant={'primary'}>Click me!</Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#704874', children: '버튼입니다' };

export const Secondary = Template.bind({});
