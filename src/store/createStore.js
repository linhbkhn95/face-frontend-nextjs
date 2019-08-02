import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  createLogger
} from 'redux-logger';
import rootReducer from 'reducers';
import {
  initialState
} from 'constants/initialState';
import rootSaga from 'sagas';
import thunk from "redux-thunk";
import root from "window-or-global";

// import {
//   composeWithDevTools,
//   devToolsEnhancer
// } from "redux-devtools-extension";
const stateLogger = createLogger({
  stateTransformer: state => state.toJS()
});

export const initStore = (preloadState = initialState) => {

  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === "development") {
    const devToolsExtension = root.devToolsExtension;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }
  const sagaMiddleware = createSagaMiddleware();
  // Add all middlewares into an array
  // const middleware = [sagaMiddleware,stateLogger];
  const middleware = [sagaMiddleware];

  // Add the Redux dev tools and middleware code together
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    
    ...enhancers
    // root && root.devToolsExtension ? root.devToolsExtension() : f => f
  );
  const store = createStore(
    rootReducer,
    preloadState,
    // applyMiddleware(sagaMiddleware, stateLogger)
    composedEnhancers

  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}