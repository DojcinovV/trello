import { makeRequest } from "./config";
var params = `key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_API_TOKEN}`;

export const boardsApi = {
  getBoards: async () => {
    return makeRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/organizations/${process.env.REACT_APP_WORKSPACE}/boards?` +
        params
    );
  },
  createBoard: async (name) => {
    return makeRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/boards?` + params + "&name=" + name
    );
  },
  getBoard: async (id) => {
    return makeRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/boards/${id}?` + params
    );
  },
};
