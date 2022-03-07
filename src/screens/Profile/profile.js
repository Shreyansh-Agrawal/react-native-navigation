import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import User1 from './User1';
import User2 from './User2';

const Tab = createBottomTabNavigator();

export default function Profile() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="user1" component={User1} options={{headerShown: false}}/>
      <Tab.Screen name="user2" component={User2} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}