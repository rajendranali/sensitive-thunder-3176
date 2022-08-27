import * as types from "./Actiontype";

const Getlogin = (payload) => (dispatch) => {
  const { email, password } = payload;

  dispatch({ type: types.GET_Login_REQUEST });

  return dispatch({ type: types.GET_Login_SUCCESS, payload: 1 });

  dispatch({ type: types.GET_Login_FAILURE });
};

const Getlogout = () => (dispatch) => {
  dispatch({ type: types.GET_Loginout_REQUEST });

  return dispatch({ type: types.GET_Loginout_SUCCESS, payload: null });

  dispatch({ type: types.GET_Loginout_FAILURE });
};

export { Getlogout, Getlogin };
