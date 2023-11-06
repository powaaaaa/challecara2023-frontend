import { Input } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

// name
export const Default: Story = {
  args: {
    type: 'text',
    display: 'hidden',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    display: 'block',
    label: '年齢',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
  },
};

export const PwdInput: Story = {
  args: {
    type: 'password',
  },
};

export const TelInput: Story = {
  args: {
    type: 'tel',
  },
};

export const UrlInput: Story = {
  args: {
    type: 'url',
  },
};
