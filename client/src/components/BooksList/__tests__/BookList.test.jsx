import { render, screen } from "@testing-library/react";
import BooksList from "../BooksList";

describe("Testing BookList component", () => {
  test("Render without crashing", () => {
    const booksData = [
      { title: "test", description: "test" },
      { title: "test", description: "test" },
      { title: "test", description: "test" }
    ];
    const setItemHeight = jest.fn();
    render(<BooksList booksData={booksData} setItemHeight={setItemHeight} />);
  });
  test("Render List of items", () => {
    const booksData = [
      { volumeInfo: { title: "test", description: "test" } },
      { volumeInfo: { title: "test", description: "test" } },
      { volumeInfo: { title: "test", description: "test" } }
    ];
    const setItemHeight = jest.fn();
    render(<BooksList booksData={booksData} setItemHeight={setItemHeight} />);
    const renderedItems = screen.queryAllByTestId("book-item");
    expect(renderedItems).toHaveLength(3);
  });
});
