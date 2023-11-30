import { CustomButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    buttonState: 'base',
    label: '応募する',
  },
};

export const Disabled: Story = {
  args: {
    buttonState: 'disabled',
    label: '応募済です',
  },
};

export const Result: Story = {
  args: {
    buttonState: 'result',
    label: '抽選結果',
    subLabel: '受領確認',
  },
};

export const Draft: Story = {
  args: {
    buttonState: 'draft',
    label: '公開',
    subLabel: '下書き',
  },
};
