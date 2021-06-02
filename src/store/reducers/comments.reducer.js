import { COMMENTS } from "../../constants";

const initialState = {
  comments: [],
};

const comments = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMMENTS.GET_COMMENTS_SUCCESSFULL:
      return {
        ...state,
        comments: payload,
      };
    default:
      return state;
  }
};

export default comments;
