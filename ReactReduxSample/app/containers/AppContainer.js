import React, { Component } from 'react';
import ReactNative from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { ActionCreators } from '../actions/';
import { Scenes } from '../scenes';

const RouterWithRedux = connect()(Router);

const AppContainer = (props) => (
    <RouterWithRedux scenes={ Scenes } {...props}/>
);

function mapDispatchToPros(dispatch){
    return bindActionCreators(ActionCreators,dispatch);
}
    
export default connect( () => { return {} },mapDispatchToPros )(AppContainer);