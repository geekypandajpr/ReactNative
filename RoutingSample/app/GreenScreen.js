/**
 * Copyright (c) 2017-present, $u^^!t $h@r^^@
 * All rights reserved.
 *
 * This Source Code licensed under use for organization for "Rayz Infotech"
 *
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppStyle } from './style';

const GreenScreen = () => {
  return (
    <View style={[AppStyle.container , AppStyle.color_green]}>
      <Text style={ AppStyle.welcome } onPress={ () => Actions.gray()}>
        Hello This is Green Screen !
        Click to Go to Gray Screen !
      </Text>
    </View>
  );
}

export default GreenScreen;
