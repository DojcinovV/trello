import { API, AuthParams } from "./config";

export const boardsApi = {
  getBoards: async () => {
    const res = await API.get(
      `organizations/${process.env.REACT_APP_WORKSPACE}/boards`,
      AuthParams
    );
    return res;
  },
};
