import axios from "axios";
import * as url from './constants';

const API_URL = url.AUTH_API;

const register = (username, email, password) => {
  return axios.post(`${API_URL}register`, {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(`${API_URL}login`, {email, password})
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

export default {
  register,
  login,
  logout,
};
