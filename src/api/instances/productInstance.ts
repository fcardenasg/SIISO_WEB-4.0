import axios from "axios";

const baseURL = 'https://localhost:44347/';

const productIntance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default productIntance;
