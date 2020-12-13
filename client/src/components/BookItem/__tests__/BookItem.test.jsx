import { render, screen } from "@testing-library/react";
import BookItem from "../BookItem";

describe("Testing bookItem component", () => {
  test("onupdate, updates book item height", () => {
    const setItemHeight = jest.fn();
    const itemData = { test: "test" };
    render(<BookItem setItemHeight={setItemHeight} itemData={itemData} />);

    const bookItem = screen.getByTestId("book-item");
    const bookItemHeight = bookItem.offsetHeight;

    expect(setItemHeight).toHaveBeenCalledWith(bookItemHeight);
  });
});
