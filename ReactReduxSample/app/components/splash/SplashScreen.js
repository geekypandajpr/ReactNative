import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { AppStyle }  from '../../style';


const SplashScreen = () => {
    return (
        <View style={AppStyle.container}>
            <Text style={AppStyle.welcome}>
                This is Splash Screen!
            </Text>
        </View>
    );
}

export default SplashScreen;