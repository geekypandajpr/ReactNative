import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import { createLogger }  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/';
import SplashScreen from './components/splash/SplashScreen'

//Importing Styles from differnt files
import { AppStyle } from './style';

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

const store = createStore({});

const App = () => {
  return (
    <Provider store={ store }>
      <SplashScreen/>
    </Provider>
    
  );
}

export default App;
