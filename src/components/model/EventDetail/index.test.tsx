import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { EventDetail } from '.';

jest.mock('next/router', () => ({
  useRouter(): { asPath: string } {
    return {
      asPath: '/',
    };
  },
}));

describe('model/EventDetailのテスト', () => {
  it('title is exist', () => {
    render(
      <EventDetail
        fetchData={{
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
        }}
      />
    );

    const title = screen.getByText(/this is EventDetail component/);

    expect(title).toBeInTheDocument();
  });
});
