import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CreateEvent } from '.';

describe('model/CreateEventのテスト', () => {
  it('title is exist', () => {
    render(<CreateEvent />);

    const title = screen.getByText(/this is CreateEvent component/);

    expect(title).toBeInTheDocument();
  });
});
