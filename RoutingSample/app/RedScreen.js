import React ,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { AppStyle } from './style';

const RedScreen = () => {
  return (

    <View style={[AppStyle.container , AppStyle.color_red]}>
      <Text style={ AppStyle.welcome }>
          Hello This is Red Screen !
      </Text>
    </View>

  );
}

export default RedScreen;
