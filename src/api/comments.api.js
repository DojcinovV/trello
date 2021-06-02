import { makeRequest, params } from "./config";

export const commentsApi = {
  getComments: async (id) => {
    return makeRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/cards/${id}/actions?` +
        params +
        "&filter=commentCard"
    );
  },
};
