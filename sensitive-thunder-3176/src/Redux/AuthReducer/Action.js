import * as types from "./Actiontype";

import axios from "axios";
const Getlogin = (params) => (dispatch) => {



  dispatch({ type: types.GET_Login_REQUEST });

  return axios
    .post("https://reqres.in/api/login",params)
    .then((r) => {
      dispatch({ type: types.GET_Login_SUCCESS, payload: r.data.token });
    })
    .catch((err) => {
      dispatch({ type: types.GET_Login_FAILURE });
    });
};


const Getlogout = () => (dispatch) => {
  dispatch({ type: types.GET_Loginout_REQUEST });

  return dispatch({ type: types.GET_Loginout_SUCCESS, payload: undefined });

};

export { Getlogout, Getlogin };
