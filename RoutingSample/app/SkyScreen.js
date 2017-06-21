import React , { Component } from 'react';
import {
      StyleSheet,
      View,
      Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { AppStyle } from './style';

const SkyScreen = () => {

  return (

    <View style={[AppStyle.container , AppStyle.color_sky]}>
      <Text style={ AppStyle.welcome }>
          Hello This is Sky Screen !
      </Text>
    </View>
  );

}

export default SkyScreen;
