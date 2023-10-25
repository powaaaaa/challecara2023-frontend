import { EventDetailCard } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailCard> = {
  component: EventDetailCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EventDetailCard>;

export const Default: Story = {
  args: {
    title: '食べ尽くしの旅！抽選で10名様に美食ツアーをプレゼント！',
    detail:
      '抽選で10名の幸運な参加者に、豪華な美食ツアーをプレゼントします！このツアーは、食通やグルメ愛好家のために特別にデザインされたもので、宿泊施設や交通手段、専属ガイド付きでソムリエによるワインと料理のペアリングセッションで、最高の食体験を提供します。\n美味しい食べ物と新しい食文化を探求する人々に向けて設計されたこの機会をお見逃し無く！',
    tags: ['ツアー', 'グルメ体験', '肉料理'],
  },
};
