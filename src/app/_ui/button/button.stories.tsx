import React from 'react';
import { Button } from '@/app/_ui/button/button';
import { Flex } from 'antd';
import { Meta, StoryObj } from '@storybook/react';

/**
 * Storybook Button component stories
 * @module Button
 * @author ABLFAXL <ablfaxl@protonmail.com>
 * @license MIT
 * @version 1.0.0
 * @see https://ant.design/components/Button/
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      document.documentElement.classList.add('dark');
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Buttons: Story = {
  render: () => (
    <Flex gap="small" align="flex-start">
      <Flex gap="small">
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button>Default</Button>
        <Button disabled>Default (disabled)</Button>
      </Flex>
      <Flex gap="small">
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button type="text">Text</Button>
        <Button type="text" disabled>
          Text (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button type="primary" href="https://ant.design/index-cn">
          Href Primary
        </Button>
        <Button type="primary" href="https://ant.design/index-cn" disabled>
          Href Primary (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button danger>Danger Default</Button>
        <Button danger disabled>
          Danger Default (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button danger type="text">
          Danger Text
        </Button>
        <Button danger type="text" disabled>
          Danger Text (disabled)
        </Button>
      </Flex>
      <Flex gap="small">
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link (disabled)
        </Button>
      </Flex>
      <Flex gap="small" className="site-button-ghost-wrapper">
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost (disabled)
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Primary: Story = {
  render: () => (
    <Flex gap="small">
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary (disabled)
      </Button>
    </Flex>
  ),
};
export const Default: Story = {
  render: () => (
    <Flex gap="small">
      <Button>Default</Button>
      <Button disabled>Default (disabled)</Button>
    </Flex>
  ),
};

export const Dashed: Story = {
  render: () => (
    <Flex gap="small">
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed (disabled)
      </Button>
    </Flex>
  ),
};

export const Text = () => (
  <Flex gap="small">
    <Button type="text">Text</Button>
    <Button type="text" disabled>
      Text (disabled)
    </Button>
  </Flex>
);

export const Link: Story = {
  render: () => (
    <Flex gap="small">
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link (disabled)
      </Button>
    </Flex>
  ),
};

export const HrefPrimary = {
  render: () => (
    <Flex gap="small">
      <Button type="primary" href="https://ant.design/index-cn">
        Href Primary
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        Href Primary (disabled)
      </Button>
    </Flex>
  ),
};

export const DangerDefault: Story = {
  render: () => (
    <Flex gap="small">
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default (disabled)
      </Button>
    </Flex>
  ),
};

export const DangerText: Story = {
  render: () => (
    <Flex gap="small">
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text (disabled)
      </Button>
    </Flex>
  ),
};

export const DangerLink: Story = {
  render: () => (
    <Flex gap="small">
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link (disabled)
      </Button>
    </Flex>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Flex gap="small" className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost (disabled)
      </Button>
    </Flex>
  ),
};
