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
    placeholder: '入力してください',
    display: 'hidden',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    display: 'block',
    label: '年齢',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'example@example.com',
  },
};

export const PwdInput: Story = {
  args: {
    type: 'password',
    placeholder: 'password',
  },
};

export const TelInput: Story = {
  args: {
    type: 'tel',
    placeholder: '012-3456-7890',
  },
};

export const UrlInput: Story = {
  args: {
    type: 'url',
    placeholder: 'https://example.com',
  },
};
