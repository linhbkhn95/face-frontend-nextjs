import {
  CLIENT_SET,
  CLIENT_UNSET,
  LOGIN_REQUESTING,
  LOGOUT_REQUEST,
  REGISTER_REQUESTING,
  UPDATE_AVATAR,
  SET_CURRENT_USER,
  GET_CURRENT_USER_REQUEST,
  RESET_COUNT_NOTIFI_REQUEST,
  RESET_COUNT_NOTIFI,
  SET_COUNT_NOTIFI
} from "../constants/auth";
// there's literally no reason these are in a different
// format from the other component actions other than
// that I just lost track

export const registerRequest = function registerRequest(data, resolve, reject) {
  return {
    type: REGISTER_REQUESTING,
    data: data,
    resolve,
    reject
  };
};

export const loginRequest = function loginRequest(
  { username, password },
  resolve,
  reject
) {
  return {
    type: LOGIN_REQUESTING,
    username,
    password,
    resolve,
    reject
  };
};
export function resetCountnotifiRequest() {
  return {
    type: RESET_COUNT_NOTIFI_REQUEST
  };
}
export function setCountnotifi() {
  return {
    type: SET_COUNT_NOTIFI
  };
}
export function resetCountNotifi() {
  return {
    type: RESET_COUNT_NOTIFI
  };
}
export const logoutRequest = function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
};
export function setClient(token) {

  return {
    type: CLIENT_SET,
    token
  };
}

export function getCurrentUserRequest() {
  return {
    type: GET_CURRENT_USER_REQUEST
  };
}
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
export function unsetClient() {
  return {
    type: CLIENT_UNSET
  };
}
export const establishCurrentUser = () => dispatch =>
  new Promise(resolve => {
    let tokenFromCookie = Cookies.getJSON("myToken");

    if (tokenFromCookie) {
      dispatch(setClient(tokenFromCookie));
      resolve(tokenFromCookie);
    } else {
      resolve({});
    }
  });

export function updateAvatar(data) {
  return {
    type: UPDATE_AVATAR,
    data
  };
}
