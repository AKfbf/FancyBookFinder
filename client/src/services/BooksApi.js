import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const BooksApi = {
  get: query => {
    return axios.get(baseUrl + query + `&key=${apiKey}`);
  }
};

export default BooksApi;
