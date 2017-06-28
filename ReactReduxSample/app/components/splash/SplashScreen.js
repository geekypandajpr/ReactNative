import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { AppStyle }  from '../../style';
const {
    View,
    Text,
    TouchableHighlight
} = ReactNative;

const SplashScreen = (props) => (
    <View style={ AppStyle.container }>
        <Text style={ AppStyle.welcome }>
            This is AppContainer! Reciepe Count : { props.recipeCount }
        </Text>
        <TouchableHighlight onPress={ () => { props.addRecipe() }}>
            <Text style={ AppStyle.welcome } > Click To Increase Counter </Text>
        </TouchableHighlight>    
    </View>
);

function mapStateToProps(state){
    return {
        recipeCount : state.recipeCount,
        routes      : state.routes
    }
}

export default connect(mapStateToProps)(SplashScreen);