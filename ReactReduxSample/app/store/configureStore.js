import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import { createLogger }  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

//Configure Logger 
const loggerMiddleware = createLogger({ predicate : (getState,action) => __DEV__});

//Configure Store 
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer,initialState,enhancer)
}

export default configureStore;