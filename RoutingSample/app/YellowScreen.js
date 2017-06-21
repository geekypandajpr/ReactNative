import React ,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { AppStyle } from './style';

const YellowScreen = () => {
  return (
    <View style={[AppStyle.container , AppStyle.color_yellow]}>
      <Text style={ AppStyle.welcome }>
          Hello This is Yellow Screen !
      </Text>
    </View>
  );
}

export default YellowScreen;
