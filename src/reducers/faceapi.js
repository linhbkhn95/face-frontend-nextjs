import {
    SET_FACEAPI,
} from "../constants/resource";
// reducer with initial state
const initialState = null

export default function reducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case SET_FACEAPI:
            return {
                ...state, payload
            };

        default:
            return state;
    }
}