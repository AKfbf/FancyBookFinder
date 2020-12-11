import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export default {
  get: query => {
    return axios.get(baseUrl + query + `+intitle:${query}&key=${apiKey}`);
  }
};
