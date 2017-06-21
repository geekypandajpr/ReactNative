/**
 * Copyright (c) 2017-present, $u^^!t $h@r^^@
 * All rights reserved.
 *
 * This Source Code licensed under use for organization for "Rayz Infotech"
 *
 */
import React from 'react';
import { Router ,Scene } from 'react-native-router-flux';

import GreenScreen from './GreenScreen';
import GrayScreen from './GrayScreen';

import RedScreen from './RedScreen';
import SkyScreen from './SkyScreen';

import BlueScreen from './BlueScreen';
import YellowScreen from './YellowScreen';

import { TabIcon } from './TabIcon'
import { AppStyle } from './style';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="tabbar" tabs tabBarStyle={ AppStyle.color_white }>
          <Scene key="first" title="First" icon={ TabIcon }>
            <Scene key="green" component={ GreenScreen } hideNavBar initial/>
            <Scene key="gray" component={ GrayScreen } title=""/>
          </Scene>
          <Scene key="second" title="Second" icon={ TabIcon }>
            <Scene key="red" component={ RedScreen } title="Red Screen" initial/>
            <Scene key="sky" component={ SkyScreen } title="Sky Screen"/>
          </Scene>
          <Scene key="thrid" title="Third" icon={ TabIcon }>
            <Scene key="blue" component={ BlueScreen } title="Blue Screen" initial/>
            <Scene key="yellow" component={ YellowScreen } title="Yellow Screen"/>
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default App;
