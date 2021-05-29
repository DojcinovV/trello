import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.trello.com/1",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const AuthParams = {
  params: {
    token: process.env.REACT_APP_API_TOKEN,
    key: process.env.REACT_APP_API_KEY,
  },
};
