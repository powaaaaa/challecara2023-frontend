import { SelectInput } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectInput> = {
  component: SelectInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    display: 'block',
    label: '都道府県',
    id: 'pref',
    pref: ['ふくおか', 'おかやま', 'おおさか'],
  },
};
