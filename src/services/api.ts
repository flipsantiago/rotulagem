import axios from 'axios';

const api = axios.create({
  baseURL: 'ADD APPs BASE URL HERE - IT SHOULD BE INSIDE OUR .ENV',
});

export default api;
