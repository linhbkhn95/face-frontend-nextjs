import { takeLatest, takeEvery,all, call, put, select } from "redux-saga/effects";
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
  try {
    let response = yield call(getResourceAPI, action.meta);
    if (response && response.data && response.data.data) {
      let data = response.data.data;
      if (!data.length) {
        data = response.data.data;
      }

      yield put({
        type: GET_RESOURCE_SUCCESS,
        payload: {
          name: action.name,
          data
        }
      });
    } else {
      yield put({ type: GET_RESOURCE_FAILURE });
    }
  } catch (error) {
    console.log("TCL: }catch -> error", error);
    yield put({ type: GET_RESOURCE_FAILURE });
  }
}
function* createResource(action) {
  let { meta, name, resolve, reject } = action;

  try {
    let response = yield call(createResourceAPI, meta);
    if (
      response &&
      response.data &&
      response.data.code == 0 &&
      response.data.data
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
      yield put({ type: CREATE_RESOURCE_FAILURE });
    }
  } catch (error) {
    console.log("error ==create.,", meta, name);
    reject(error);
    yield put({ type: CREATE_RESOURCE_FAILURE });
  }
}
function getResourceAPI({ urlApi }) {
  console.log("urlApi", urlApi);
  return get(urlApi);
}
function createResourceAPI({ path, data }) {
  return post(path, data);
}
function* resource() {
  yield all([
    getResourceSaga(),
    createResourceSaga(),
  ]);
}

export default resource;