import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../src/screens/Home/HomeScreen';
import Profile from '../src/screens/Profile/profile';
import Settings from '../src/screens/Settings';

const Drawer = createDrawerNavigator();

export default function RootDrawerNav(){
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={Profile}/>
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      );
}