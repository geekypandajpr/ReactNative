import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import SplashScreen from '../components/splash/SplashScreen';

export const Scenes = Actions.create(
    <Scene key="root">
        <Scene key="splash" title="Splash Screen" component={ SplashScreen } initial/>
    </Scene>
); 