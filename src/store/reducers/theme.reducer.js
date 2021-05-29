import { THEMES } from "../../constants";

const initialState = {
  theme: THEMES.LIGHT_THEME,
};

const theme = (state = initialState, { type, payload }) => {
  switch (type) {
    case THEMES.SWITCH_THEME:
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return state;
  }
};

export default theme;
