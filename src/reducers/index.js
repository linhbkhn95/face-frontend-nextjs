import {
  combineReducers
} from 'redux-immutable';
import auth from './auth'
import resource from './resource'

const rootReducer = combineReducers({
  auth,
  resource
});

export default rootReducer;