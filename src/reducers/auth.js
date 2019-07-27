import {
  CLIENT_SET,
  CLIENT_UNSET,
  UPDATE_AVATAR,
  SET_CURRENT_USER,
  RESET_COUNT_NOTIFI,
  SET_COUNT_NOTIFI
} from "../constants/auth";
import jwtDecode from "jwt-decode";
import localStorage from 'localStorage'
import {
  initialState
} from 'constants/initialState';
const authInitialState = initialState.get('auth');

function initialUser() {
  try {
    return localStorage.getItem("token") ?
      jwtDecode(localStorage.getItem("token")) : {};
  } catch (error) {
    return null;
  }
}
let data = initialUser();
const initialSate = {
  ...authInitialState,
  user: data,
  token: localStorage.getItem("token")
};

function getUserFromToken(token) {
  try {
    let user = jwtDecode(token);
    return {
      user,
      token
    };
  } catch (error) {
    return {
      user: null,
      token: null,
      userDetail: {
        countNotification: 0
      }
    };
  }
}
const reducer = function clientReducer(state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      return getUserFromToken(action.token);

    case CLIENT_UNSET:
      return {
        user: null,
          token: null
      };
    case SET_CURRENT_USER:
      return {
        user: action.user,
        isAuthenticated: action.user ? true : false
      };
    case RESET_COUNT_NOTIFI:
      return {
        ...state,
        userDetail: {
          ...state.userDetail,
          countNotification: 0
        }
      };
    case SET_COUNT_NOTIFI:
      let copyState = {
        ...state
      };
      return {
        ...state,

        userDetail: {
          ...state.userDetail,
          countNotification: copyState.userDetail ?
            copyState.userDetail.countNotification + 1 : 0
        }
      };
    case UPDATE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.data
        }
      };

    default:
      return state;
  }
};

export default reducer;