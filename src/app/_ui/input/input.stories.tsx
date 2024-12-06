import React from 'react';
import { Input } from 'antd'; // Replace with your Input component if custom
import { UserOutlined } from '@ant-design/icons';
import { Meta, StoryObj } from '@storybook/react';
/**
 * Storybook Input component stories
 * @module Input
 * @author ABLFAXL <ablfaxl@protonmail.com>
 * @license MIT
 * @version 1.0.0
 * @see https://ant.design/components/input/
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      document.documentElement.classList.add('dark');
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Inputs: Story = {
  render: () => (
    <div>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
  ),
};
export const Default: Story = {
  render: () => <Input placeholder="default size" prefix={<UserOutlined />} />,
};

export const Small: Story = {
  render: () => (
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  ),
};
