import axios from "axios";

const baseURL = '';

const productIntance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default productIntance;
