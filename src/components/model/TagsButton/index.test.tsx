import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { TagsButton } from ".";

describe("model/TagsButtonのテスト", () => {
  it("title is exist", () => {
    render(<TagsButton />);

    const title = screen.getByText(/this is TagsButton component/);

    expect(title).toBeInTheDocument();
  });
});