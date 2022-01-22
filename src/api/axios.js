import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BICE_API_BASE_URL,
});
