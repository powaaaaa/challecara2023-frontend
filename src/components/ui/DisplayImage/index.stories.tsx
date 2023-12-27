import { DisplayImage } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DisplayImage> = {
  component: DisplayImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DisplayImage>;

export const Default: Story = {
  args: {
    image_url:
      'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
  },
};
