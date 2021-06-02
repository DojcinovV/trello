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
  deleteComment: async (cardId, actionId) => {
    return makeRequest(
      "DELETE",
      `${process.env.REACT_APP_API_URL}/cards/${cardId}/actions/${actionId}/comments?` +
        params
    );
  },
  addComent: async (cardId, text) => {
    return makeRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/cards/${cardId}/actions/comments?` +
        params +
        "&text=" +
        text
    );
  },
};
