import {
  take,
  fork,
  cancel,
  call,
  put,
  all,
  cancelled,
  takeEvery,
  takeLatest
  // stopSubmit,
  // startSubmit
} from "redux-saga/effects";
import {
  SubmissionError
} from "redux-form";
// We'll use this function to redirect to different routes based on cases
// import { browserHistory } from 'react-router'
// Helper for api errors
;
import {
  createBrowserHistory,
  createMemoryHistory
} from "history";

import {
  login,
  setCurrentUser,
  resetCountNotifi
} from "../actions/auth";
// Our login constants
import localStorage from 'localStorage'

import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLIENT_UNSET,
  LOGOUT_REQUEST,
  REGISTER_REQUESTING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_CURRENT_USER_REQUEST,
  RESET_COUNT_NOTIFI_REQUEST
} from "../constants/auth";
import {
  setClient,
  unsetClient
} from "../actions/auth";
import {
  post,
  get,
} from "../dataProvider";
import {
  func
} from "prop-types";
import Router from "next/router";

// So that we can modify our Client piece of state
// const loginUrl = `${process.env.REACT_APP_API_URL}/api/Clients/login`
const history = createMemoryHistory();

function loginApi(username, password) {
  console.log('loginApi: ', username, password);

  return post("/api/auth/login", {
    username,
    password
  });

}

function logoutApi() {
  return post("/api/logout-sso");
}

function getMeApi() {
  return get("/api/auth/me");

}


function* logout() {
  // dispatches the CLIENT_UNSET action
  yield put(setCurrentUser(null));

  // remove our token
  // localStorage.removeItem("token");

  // redirect to the /login screen
  window.location.href = '/login';

}

function* logoutFlow() {
  try {
    let data = yield call(logoutApi);
    if (data.data.code == 0) {
      yield call(logout);
    } else {}
  } catch (error) {}
}

function* getMeFlow() {
  console.log('getMeFlow: ');
  try {
    let data = yield call(getMeApi);
    console.log('data: ', data);
    if (data.data.code == 0) {
      yield put(setCurrentUser(data.data.data));
    } else {
      history.push("/login");
      window.location.href = '/login';

    }
  } catch (error) {
    // window.location.href = '/login';


    Router.push("/login");
  }
}



function* registerFlow(action) {
  const {
    resolve,
    reject
  } = action;
  try {
    let data = yield call(registerApi, action.data);
    if (data.data.code == 0) {
      const {
        returnTo,
        url
      } = data.data.data;
      console.log('dataCb: ', data.data.data);
      // inform Redux to set our client token, this is non blocking so...
      // yield put(setClient(token));
      alert('oc cho')
      // .. also inform redux that our login was successful
      yield put({
        type: REGISTER_SUCCESS
      });
      // if (returnTo) {
      //   const dataCb = yield call(getUrlCallback, url);
      //   console.log('dataCb: ', dataCb);
      //   if (dataCb.data.code == 0);
      //   // window.location.href = dataCb.data.data

      // } else {
      //   alert('oc cho')
      // }
      // set a stringified version of our token to localstorage on our domain
      localStorage.setItem("token", token);

      // redirect them to WIDGETS!
      // resolve(token);
      // history.push("/");
    } else {
      console.log("loi cmmmm");
    }
  } catch (error) {
    yield put({
      type: REGISTER_ERROR,
      error
    });
    // throw new SubmissionError({ _error: "Some error message" });

    // const formError = new SubmissionError({
    //   login: "User with this login is not found", // specific field error
    //   _error: {
    //     email: "Login failed, please check your credentials and try again"
    //   } // global form error
    // });
    if (typeof reject === "function") {
      reject(error);
    }
  }
}

function* loginFlow(actions) {
  const {
    username,
    password,
    resolve,
    reject
  } = actions;
  try {
    // try to call to our loginApi() function.  Redux Saga
    // will pause here until we either are successful or
    // receive an error
    // yield put(startSubmit("Login"));

    let res = yield call(loginApi, username, password);
    console.log('data: ', res.data.data);
    if (res.data) {
      const {
        data = {}
      } = res.data;
      const {
        returnTo,
        url = '/'
      } = data;
      // .. also inform redux that our login was successful
      yield put({
        type: LOGIN_SUCCESS
      });
      window.location.href = url;
    } else {
      reject(res);
    }
  } catch (error) {
    console.log('error: ', error);

    // error? send it to redux

    yield put({
      type: LOGIN_ERROR,
      error
    });

    if (typeof reject === "function") {
      console.log('reject: ', reject);
      reject(error);
    }
  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to login

    if (yield cancelled()) {
      history.push("/login");
    }
  }

  // return the token for health and wealth
}



export function* registerSaga() {
  yield takeEvery(REGISTER_REQUESTING, registerFlow);
}
export function* loginSaga() {
  yield takeEvery(LOGIN_REQUESTING, loginFlow);
}
export function* logoutSaga() {
  yield takeEvery(LOGOUT_REQUEST, logoutFlow);
}
export function* getMeSaga() {
  console.log('getMeSaga: ');
  yield takeEvery(GET_CURRENT_USER_REQUEST, getMeFlow);
}


function* auth() {
  yield all([
    loginSaga(),
    registerSaga(),
    logoutSaga(),
    getMeSaga(),
  ]);
}

export default auth;