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


const SplashScreen = (props) => (
    <View style={ AppStyle.container }>
        <Text style={ AppStyle.welcome }>
            This is Splash { props.scene } ! Reciepe Count : { props.recipeCount }
        </Text>
        <TouchableHighlight onPress={ () => { props.addRecipe() }}>
            <Text style={ AppStyle.welcome } > Click To Increase Counter </Text>
        </TouchableHighlight>    
        <TouchableHighlight onPress={ Actions.home }>
            <Text style={ AppStyle.welcome } > Click For Home Screen </Text>
        </TouchableHighlight>
    </View>       
);

function mapStateToProps(state) {
    return {
        recipeCount : state.recipeCount
    }
}

export default connect(mapStateToProps)(SplashScreen);