import { render, screen } from "@testing-library/react";
import FancyHeader from "../FancyHeader";
import "@testing-library/jest-dom/";

describe("Testing FancyHeader component", () => {
  test("Render with correct colors and sequence", () => {
    render(<FancyHeader />);
    const words = screen.getAllByTestId("fancy-header-part");
    expect(words).toHaveLength(4);

    expect(words[0]).toHaveStyle("color: 4285f4");
    expect(words[0]).toHaveTextContent("Find");

    expect(words[1]).toHaveStyle("color: db4437");
    expect(words[1]).toHaveTextContent("a");

    expect(words[2]).toHaveStyle("color: f4b400");
    expect(words[2]).toHaveTextContent("Fancy");

    expect(words[3]).toHaveStyle("color: 0f9d58");
    expect(words[3]).toHaveTextContent("Book!");
  });
});
