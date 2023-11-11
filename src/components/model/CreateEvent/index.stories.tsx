import { CreateEventPresentation } from './presentations';
import { CreateEventEmptyPresentation } from './presentations/empty';
import { CreateEventErrorPresentation } from './presentations/error';
import { CreateEventLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreateEventPresentation> = {
  component: CreateEventPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateEventPresentation>;

export const Default: Story = {
  args: {},
};

export const Empty: Story = {
  render: () => <CreateEventEmptyPresentation />,
};

export const Error: Story = {
  render: () => <CreateEventErrorPresentation />,
};

export const Loading: Story = {
  render: () => <CreateEventLoadingPresentation />,
};
