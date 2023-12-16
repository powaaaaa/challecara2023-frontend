import { Screen as ReceiptConfirm } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReceiptConfirm> = {
  component: ReceiptConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReceiptConfirm>;

export const Default: Story = {
  args: {},
};
