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
  updateBoardName: async (id, name) => {
    return makeRequest(
      "PUT",
      `${process.env.REACT_APP_API_URL}/boards/${id}?` +
        params +
        "&name=" +
        name
    );
  },
  getListsOnABoard: async (id) => {
    return makeRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/boards/${id}/lists?` + params
    );
  },
  getCardsOnAList: async (id) => {
    return makeRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/lists/${id}/cards?` + params
    );
  },
  createListOnABoard: async (id, name) => {
    return makeRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/boards/${id}/lists?` +
        params +
        "&pos=bottom&name=" +
        name
    );
  },
  createCardOnAList: async (idList, name) => {
    return makeRequest(
      "POST",
      `${process.env.REACT_APP_API_URL}/cards?` +
        params +
        "&idList=" +
        idList +
        "&name=" +
        name
    );
  },
  updateListName: async (listId, name) => {
    return makeRequest(
      "PUT",
      `${process.env.REACT_APP_API_URL}/lists/${listId}?` +
        params +
        "&name=" +
        name
    );
  },
};
