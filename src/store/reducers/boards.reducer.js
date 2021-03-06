import { BOARDS } from "../../constants";

const initialState = {
  boards: [],
  loading: false,
  error: null,
  message: null,
  board: {
    name: null,
    background: null,
    backgroundImage: null,
    lists: [],
  },
};

const boards = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOARDS.GET_BOARDS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case BOARDS.GET_BOARD_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        board: {
          ...state.board,
          name: payload.name,
          background: payload.background,
          backgroundImage: payload.backgroundImage,
        },
      };
    case BOARDS.GET_BOARDS_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        boards: payload,
        error: false,
        message: "Successfully fetched boards",
      };

    case BOARDS.GET_LISTS_ON_A_BOARD_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        board: { ...state.board, lists: payload },
      };
    case BOARDS.GET_BOARDS_FAILED:
    case BOARDS.CREATE_BOARD_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: payload,
      };
    default:
      return state;
  }
};

export default boards;
