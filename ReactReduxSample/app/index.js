import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

// create the store
const store = configureStore({});

const App = () => {
  return (
    <Provider store={ store }>
      <AppContainer/>
    </Provider>
  );
}

export default App;
