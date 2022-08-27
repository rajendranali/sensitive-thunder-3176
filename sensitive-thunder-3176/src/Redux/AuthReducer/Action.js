import * as types from "./Actiontype";

export const Getlogin = (payload) => (dispatch) => {
  const { email, password } = payload;

  dispatch({ type: types.GET_Login_REQUEST });

  return dispatch({ type: types.GET_Login_SUCCESS, payload });

   dispatch({ type: types.GET_Login_FAILURE });
};
