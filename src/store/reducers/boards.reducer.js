import { BOARDS } from "../../constants";

const initialState = {
  boards: [],
  loading: false,
  error: null,
  message: null,
};

const boards = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOARDS.GET_BOARDS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case BOARDS.GET_BOARDS_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        boards: payload,
        error: false,
        message: "Successfully fetched boards",
      };
    case BOARDS.GET_BOARDS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: "Error fetching boards",
      };
    default:
      return state;
  }
};

export default boards;
