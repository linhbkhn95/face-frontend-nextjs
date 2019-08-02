import {
  takeLatest,
  takeEvery,
  all,
  call,
  put,
  select
} from "redux-saga/effects";
import {
  GET_RESOURCE_FAILURE,
  GET_RESOURCE_SUCCESS,
  GET_RESOURCE_REQUEST,
  CREATE_RESOURCE_REQUEST,
  CREATE_RESOURCE_SUCCESS,
  CREATE_RESOURCE_FAILURE
} from "../constants/resource";
import {
  post,
  get,
} from "../dataProvider";;
// So that we can modify our Client piece of state

export function* getResourceSaga() {
  yield takeEvery(GET_RESOURCE_REQUEST, getResource);
}
export function* createResourceSaga() {
  yield takeEvery(CREATE_RESOURCE_REQUEST, createResource);
}

function* getResource(action) {
  let {
    resolve,
    reject
  } = action;
  try {
    let response = yield call(getResourceAPI, action.path);
    if (response && response.data && response.data.code === 0) {
      if (typeof resolve === "function") {
        console.log("TCL: function*getResource -> resolve")
        resolve(response.data.data);
      } else
        yield put({
          type: GET_RESOURCE_SUCCESS,
          payload: {
            name: action.name,
            data:response.data.data
          }
        });

    } else {
      if (typeof action.reject === "function") {
        reject(response.data.errors);
      } else yield put({
        type: GET_RESOURCE_FAILURE
      });
    }
  } catch (error) {
    console.log("TCL: }catch -> error", error);
    yield put({
      type: GET_RESOURCE_FAILURE
    });
    if (typeof action.reject === "function") {
      reject(error);
    }
  }
}

function* createResource(action) {
  let {
    meta,
    name,
    resolve,
    reject
  } = action;

  try {
    let response = yield call(createResourceAPI, meta);
    if (
      response &&
      response.data &&
      response.data.code == 0
    ) {
      let data = response.data.data;
      resolve(data);
      yield put({
        type: CREATE_RESOURCE_SUCCESS,
        payload: {
          name: name,
          data
        }
      });
    } else {
      console.log("error ==fail.,", response.data.errors);

      reject(response.data.errors);
      yield put({
        type: CREATE_RESOURCE_FAILURE
      });
    }
  } catch (error) {
    console.log("error ==create.,", meta, name);
    reject(error);
    yield put({
      type: CREATE_RESOURCE_FAILURE
    });
  }
}

function getResourceAPI(path) {
  console.log("urlApi", path);
  return get(path);
}

function createResourceAPI({
  path,
  data
}) {
  return post(path, data);
}

function* resource() {
  yield all([
    getResourceSaga(),
    createResourceSaga(),
  ]);
}

export default resource;