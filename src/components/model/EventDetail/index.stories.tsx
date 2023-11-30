import { EventDetailPresentation } from './presentations';
import { EventDetailEmptyPresentation } from './presentations/empty';
import { EventDetailErrorPresentation } from './presentations/error';
import { EventDetailLoadingPresentation } from './presentations/loading';

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
    fetchData: {
      user: {
        id: 'id',
        display_name: 'display_name',
      },
      event: {
        id: 'eventId',
        title: 'タイトル',
        image_url:
          'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
        administrator_id: 'administrator_id',
        start_time: '2019-08-24T14:15:22Z',
        end_time: '2019-08-24T14:15:22Z',
        detail:
          '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
        tags: [
          { uuid: '1', name: '焼き肉' },
          { uuid: '2', name: 'お寿司' },
        ],
        winning_number: 10,
        is_active: true,
        is_winner: null,
        has_applied: true,
        is_published: true,
        is_received: false,
      },
      administrator: {
        administrator_display_name: 'おいしいよ株式会社',
        introduction:
          'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
        sns_url: 'https://x.com/Elonmusk',
        homepage_url: 'https://example.com',
      },
    },
  },
};

export const Active: Story = {
  args: {
    fetchData: {
      user: {
        id: 'id',
        display_name: 'display_name',
      },
      event: {
        id: 'eventId',
        title: 'タイトル',
        image_url:
          'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
        administrator_id: 'administrator_id',
        start_time: '2019-08-24T14:15:22Z',
        end_time: '2019-08-24T14:15:22Z',
        detail:
          '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
        tags: [
          { uuid: '1', name: '焼き肉' },
          { uuid: '2', name: 'お寿司' },
        ],
        winning_number: 10,
        is_active: true,
        is_winner: null,
        has_applied: false,
        is_published: true,
        is_received: false,
      },
      administrator: {
        administrator_display_name: 'おいしいよ株式会社',
        introduction:
          'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
        sns_url: 'https://x.com/Elonmusk',
        homepage_url: 'https://example.com',
      },
    },
  },
};

export const Failed: Story = {
  args: {
    fetchData: {
      user: {
        id: 'id',
        display_name: 'display_name',
      },
      event: {
        id: 'eventId',
        title: 'タイトル',
        image_url:
          'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
        administrator_id: 'administrator_id',
        start_time: '2019-08-24T14:15:22Z',
        end_time: '2019-08-24T14:15:22Z',
        detail:
          '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
        tags: [
          { uuid: '1', name: '焼き肉' },
          { uuid: '2', name: 'お寿司' },
        ],
        winning_number: 10,
        is_active: false,
        is_winner: false,
        has_applied: false,
        is_published: true,
        is_received: false,
      },
      administrator: {
        administrator_display_name: 'おいしいよ株式会社',
        introduction:
          'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
        sns_url: 'https://x.com/Elonmusk',
        homepage_url: 'https://example.com',
      },
    },
  },
};

export const Received: Story = {
  args: {
    fetchData: {
      user: {
        id: 'id',
        display_name: 'display_name',
      },
      event: {
        id: 'eventId',
        title: 'タイトル',
        image_url:
          'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
        administrator_id: 'administrator_id',
        start_time: '2019-08-24T14:15:22Z',
        end_time: '2019-08-24T14:15:22Z',
        detail:
          '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
        tags: [
          { uuid: '1', name: '焼き肉' },
          { uuid: '2', name: 'お寿司' },
        ],
        winning_number: 10,
        is_active: false,
        is_winner: true,
        has_applied: false,
        is_published: true,
        is_received: true,
      },
      administrator: {
        administrator_display_name: 'おいしいよ株式会社',
        introduction:
          'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
        sns_url: 'https://x.com/Elonmusk',
        homepage_url: 'https://example.com',
      },
    },
  },
};

export const Winning: Story = {
  args: {
    fetchData: {
      user: {
        id: 'id',
        display_name: 'display_name',
      },
      event: {
        id: 'eventId',
        title: 'タイトル',
        image_url:
          'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
        administrator_id: 'administrator_id',
        start_time: '2019-08-24T14:15:22Z',
        end_time: '2019-08-24T14:15:22Z',
        detail:
          '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
        tags: [
          { uuid: '1', name: '焼き肉' },
          { uuid: '2', name: 'お寿司' },
        ],
        winning_number: 10,
        is_active: false,
        is_winner: true,
        has_applied: false,
        is_published: true,
        is_received: false,
      },
      administrator: {
        administrator_display_name: 'おいしいよ株式会社',
        introduction:
          'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
        sns_url: 'https://x.com/Elonmusk',
        homepage_url: 'https://example.com',
      },
    },
  },
};

export const Draft: Story = {
  args: {
    fetchData: {
      user: {
        id: 'id',
        display_name: 'display_name',
      },
      event: {
        id: 'eventId',
        title: 'タイトル',
        image_url:
          'https://mona-log.com/wp-content/uploads/2020/05/3364392-scaled.jpg',
        administrator_id: 'administrator_id',
        start_time: '2019-08-24T14:15:22Z',
        end_time: '2019-08-24T14:15:22Z',
        detail:
          '詳細いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい',
        tags: [
          { uuid: '1', name: '焼き肉' },
          { uuid: '2', name: 'お寿司' },
        ],
        winning_number: 10,
        is_active: false,
        is_winner: null,
        has_applied: false,
        is_published: false,
        is_received: false,
      },
      administrator: {
        administrator_display_name: 'おいしいよ株式会社',
        introduction:
          'グルメフェア株式会社は、美味しさと幸せを提供することに情熱を傾ける食品会社です。',
        sns_url: 'https://x.com/Elonmusk',
        homepage_url: 'https://example.com',
      },
    },
  },
};

export const Empty: Story = {
  render: () => <EventDetailEmptyPresentation />,
};

export const Error: Story = {
  render: () => <EventDetailErrorPresentation />,
};

export const Loading: Story = {
  render: () => <EventDetailLoadingPresentation />,
};
