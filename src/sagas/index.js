import {
  all,
  fork
} from 'redux-saga/effects';

import auth from './auth'
import resource from './resource'
function* rootSaga() {
  yield all([
    fork(auth),
    fork(resource)
  ])
}

export default rootSaga;