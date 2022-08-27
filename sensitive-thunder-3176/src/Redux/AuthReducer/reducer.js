import * as types from "./Actiontype";
const intial = {
  isAuth: false,
  token: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = intial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_Login_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_Login_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: "verify" };
    case types.GET_Login_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
