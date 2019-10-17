// @Flow
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { createLogger } from "redux-logger";
import rootReducer from "../state/reducer";
import mySaga from "../state/sagas";

const logger = createLogger({});

export default function configureStore(initialState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  // if (process.env.NODE_ENV === "development") {
  //   middleware.push(logger);
  // }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(mySaga);

  return store;
}
