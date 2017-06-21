import React ,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppStyle } from './style';

const BlueScreen = () => {
  return (
    <View style={[AppStyle.container , AppStyle.color_blue]}>
      <Text style={ AppStyle.welcome }>
          Hello This is Blue Screen !
      </Text>
    </View>
  );
}

export default BlueScreen;
