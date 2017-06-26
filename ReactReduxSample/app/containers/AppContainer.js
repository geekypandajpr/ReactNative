import React, { Component } from 'react';
import ReactNative from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions/';
import SplashScreen from '../components/splash/SplashScreen';

const AppContainer = (props) => (
    <SplashScreen {...props}/>
);

function mapDispatchToPros(dispatch){
    return bindActionCreators(ActionCreators,dispatch);
}
    
export default connect( () => { return {} },mapDispatchToPros )(AppContainer);