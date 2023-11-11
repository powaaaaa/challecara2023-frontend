import { TagsButtonPresentation  } from './presentations';
import { TagsButtonLoadingPresentation  } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagsButtonPresentation> = {
  component: TagsButtonPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TagsButtonPresentation>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  render: () => <TagsButtonLoadingPresentation />,
};
