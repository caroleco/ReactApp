import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './components/Home'
import Principal from './components/Principal'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Principal: {
    screen: Principal
  }
});

const App = createAppContainer(RootStack);

export default App;
