import {
  GET_RESOURCE_REQUEST,
  CREATE_RESOURCE_REQUEST
} from "../constants/resource";

export function getResourceRequest(name, meta) {
  return {
    type: GET_RESOURCE_REQUEST,
    name,
    meta
  };
}

export function createResourceRequest(path, name, data, resolve, reject) {
  return {
    type: CREATE_RESOURCE_REQUEST,
    name,
    meta: { data, path },
    resolve,
    reject
  };
}
