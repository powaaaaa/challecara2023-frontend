import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { EventReceipt } from '.';

jest.mock('next/router', () => ({
  useRouter(): { asPath: string; query: string } {
    return {
      asPath: '/',
      query: 'MockVitest',
    };
  },
}));

describe('model/EventReceiptのテスト', () => {
  it('title is exist', () => {
    render(<EventReceipt />);

    const title = screen.getByText(/this is EventReceipt component/);

    expect(title).toBeInTheDocument();
  });
});
