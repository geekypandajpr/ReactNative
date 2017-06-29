import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { AppStyle }  from '../../style';
const {
    View,
    Text,
    TouchableHighlight
} = ReactNative;

const HomeScreen = (props) => (
    <View style={ AppStyle.container }>
        <Text style={ AppStyle.welcome }>
            This is Home Screen
        </Text>
        <TouchableHighlight onPress={ () => { props.routes.splash }}>
            <Text style={ AppStyle.welcome } > Click To Increase Counter </Text>
        </TouchableHighlight>   
        <TouchableHighlight onPress={ () => { Actions.splash() }}>
            <Text style={ AppStyle.welcome } > Back To Splash </Text>
        </TouchableHighlight> 
    </View>
);

function mapStateToProps(state){
    return {
        recipeCount : state.recipeCount,
        routes : state.routes
    }
}

export default connect(mapStateToProps)(HomeScreen);