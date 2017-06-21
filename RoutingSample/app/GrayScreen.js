/**
 * Copyright (c) 2017-present, $u^^!t $h@r^^@
 * All rights reserved.
 *
 * This Source Code licensed under use for organization for "Rayz Infotech"
 *
 */
import React ,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppStyle } from './style';

const GrayScreen = () => {
    return (
      <View style={[AppStyle.container , AppStyle.color_gray]}>
        <Text
          style={ AppStyle.welcome }
          onPress={() => Actions.green()}>
            Hello This is Gray Screen !
            Click here to Move to Green Screen
        </Text>
      </View>
    );
}


export default GrayScreen;
