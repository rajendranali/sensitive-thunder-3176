import { getLocalData ,setdata} from "../../Pages/Utils/Savedata";
import * as types from "./Actiontype";
const intial = {
  isAuth:getLocalData("token")==1?true:false,
  token: getLocalData("token")|| null,
  isLoading: false,
  isError: false,
};
// getLocalData("token")?true:false
console.log(getLocalData("token"),'getlocal')
export const reducer = (state = intial, action) => {
  const { type, payload } = action;
console.log(payload,"payloadlogout")
  switch (type) {
    case types.GET_Login_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_Login_SUCCESS:
      setdata("token",payload)
      return { ...state, isLoading: false, isAuth: true, token: 1 };
    case types.GET_Login_FAILURE:
      return { ...state, isError: true };
    case types.GET_Loginout_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_Loginout_SUCCESS:
      setdata("token",payload)
      return { ...state, isLoading: false, isAuth: false, token: payload };
    case types.GET_Loginout_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
