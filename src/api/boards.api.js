import { makeRequest, params } from "./config";

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
  updateListPos: async (listId, pos) => {
    return makeRequest(
      "PUT",
      `${process.env.REACT_APP_API_URL}/lists/${listId}?` +
        params +
        "&pos=" +
        pos
    );
  },
  deleteList: async (listId) => {
    return makeRequest(
      "PUT",
      `${process.env.REACT_APP_API_URL}/lists/${listId}/closed?` +
        params +
        "&value=true"
    );
  },
  updateCard: async (cardId, cardField, text) => {
    return makeRequest(
      "PUT",
      `${process.env.REACT_APP_API_URL}/cards/${cardId}?` +
        params +
        `&${cardField}=${text}`
    );
  },
  getCardAttachment: async (cardId, attachmentId) => {
    return makeRequest(
      "GET",
      `${process.env.REACT_APP_API_URL}/cards/${cardId}/attachments/${attachmentId}?` +
        params
    );
  },
  deleteCard: async (cardId) => {
    return makeRequest(
      "DELETE",
      `${process.env.REACT_APP_API_URL}/cards/${cardId}?` + params
    );
  },
};
