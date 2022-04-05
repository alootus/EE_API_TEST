import { GET_ID } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_ID:
      return {
        ...state,
        validId: action.payload,
      };
    default:
      return state;
  }
};
