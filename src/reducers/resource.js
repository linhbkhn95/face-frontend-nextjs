import {
  GET_RESOURCE_REQUEST,
  GET_RESOURCE_FAILURE,
  GET_RESOURCE_SUCCESS
} from "../constants/resource";
// reducer with initial state
const initialState = {
  startGetResouce: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RESOURCE_REQUEST:
      return { ...state, startGetResouce: true };
    case GET_RESOURCE_SUCCESS:
      return {
        ...state,
        [payload.name]: payload.data,
        startGetResouce: false
      };
    case GET_RESOURCE_FAILURE:
      return { ...state, successGetTopTourist: false };
    default:
      return state;
  }
}
