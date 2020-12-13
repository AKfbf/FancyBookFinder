import { render, screen, waitFor } from "@testing-library/react";
import Search from "../Search";
import axios from "axios";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

describe("test search component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("search click calls books api", async () => {
    const updateBooksData = jest.fn();
    const setApiCallCounter = jest.fn();
    render(
      <Search
        updateBooksData={updateBooksData}
        setApiCallCounter={setApiCallCounter}
      />
    );
    const searchBtn = screen.getByTestId("search-button");
    const mockResponseData = jest.fn((success, payload) => {
      return {
        data: {
          result: {
            success,
            payload
          }
        }
      };
    });
    const data = mockResponseData(true, { items: [{}, {}, {}] });
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(data);
    });
    searchBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  test("search click updates books data", async () => {
    const updateBooksData = jest.fn();
    const setApiCallCounter = jest.fn();
    render(
      <Search
        updateBooksData={updateBooksData}
        setApiCallCounter={setApiCallCounter}
      />
    );
    const searchBtn = screen.getByTestId("search-button");
    const mockResponseData = jest.fn(payload => {
      return {
        data: {
          items: payload
        }
      };
    });
    const data = mockResponseData(true, [{}, {}, {}]);
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(data);
    });
    searchBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(updateBooksData).toHaveBeenCalledTimes(1);
    });
  });

  test("on update calls books api", async () => {
    const updateBooksData = jest.fn();
    const setApiCallCounter = jest.fn();
    const apiCallCounter = 1;

    const mockResponseData = jest.fn((success, payload) => {
      return {
        data: {
          items: payload
        }
      };
    });
    const data = mockResponseData(true, [
      { test: "test" },
      { test: "test" },
      { test: "test" }
    ]);
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(data);
    });

    render(
      <Search
        updateBooksData={updateBooksData}
        setApiCallCounter={setApiCallCounter}
        apiCallCounter={apiCallCounter}
      />
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  test("on update updates books data", async () => {
    const updateBooksData = jest.fn();
    const setApiCallCounter = jest.fn();
    const apiCallCounter = 1;

    const mockResponseData = jest.fn((success, payload) => {
      return {
        data: {
          items: payload
        }
      };
    });
    const data = mockResponseData(true, [
      { test: "test" },
      { test: "test" },
      { test: "test" }
    ]);
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve(data);
    });

    render(
      <Search
        updateBooksData={updateBooksData}
        setApiCallCounter={setApiCallCounter}
        apiCallCounter={apiCallCounter}
      />
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(updateBooksData).toHaveBeenCalledTimes(3);
    });
  });
});
