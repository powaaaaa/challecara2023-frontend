import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ApplyConfirm } from '.';

jest.mock('next/router', () => ({
  useRouter(): { asPath: string } {
    return {
      asPath: '/',
    };
  },
}));

describe('model/ApplyConfirmのテスト', () => {
  it('title is exist', () => {
    render(<ApplyConfirm />);

    const title = screen.getByText(/this is ApplyConfirm component/);

    expect(title).toBeInTheDocument();
  });
});
