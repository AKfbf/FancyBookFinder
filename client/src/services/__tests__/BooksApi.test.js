import BooksApi from "../BooksApi";
import axios from "axios";

jest.mock("axios");
const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

describe("Testing BooksApi", () => {
  test("get method call api", () => {
    const url = baseUrl + "test" + `&key=${apiKey}`;
    BooksApi.get("test");
    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
