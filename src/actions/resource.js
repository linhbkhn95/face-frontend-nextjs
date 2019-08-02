import {
  GET_RESOURCE_REQUEST,
  CREATE_RESOURCE_REQUEST,
  SET_FACEAPI
} from "../constants/resource";

export function getResourceRequest(name, path, resolve, reject) {
  return {
    type: GET_RESOURCE_REQUEST,
    name,
    path,
    resolve,
    reject
  };
}

export function createResourceRequest(name, path, data, resolve, reject) {
  return {
    type: CREATE_RESOURCE_REQUEST,
    name,
    meta: {
      data,
      path
    },
    resolve,
    reject
  };
}
export function setFaceApi(payload) {
  return {
    type: SET_FACEAPI,
    payload
  };
}