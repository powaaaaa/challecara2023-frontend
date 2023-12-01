import { Screen as DraftEventDetail } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DraftEventDetail> = {
  component: DraftEventDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DraftEventDetail>;

export const Default: Story = {
  args: {},
};