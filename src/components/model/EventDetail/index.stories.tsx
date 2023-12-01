import { EventDetailPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailPresentation> = {
  component: EventDetailPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventDetailPresentation>;

export const Default: Story = {
  args: {
    eventDetailState: 'Applied',
  },
};

export const Active: Story = {
  args: {
    eventDetailState: 'Active',
  },
};

export const Failed: Story = {
  args: {
    eventDetailState: 'Failed',
  },
};

export const Received: Story = {
  args: {
    eventDetailState: 'Received',
  },
};

export const Winning: Story = {
  args: {
    eventDetailState: 'Winning',
  },
};

export const Draft: Story = {
  args: {
    eventDetailState: 'Draft',
  },
};
