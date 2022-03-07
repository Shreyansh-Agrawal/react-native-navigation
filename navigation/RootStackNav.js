import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootDrawerNav from './RootDrawerNav';
import DetailsScreen from '../src/screens/Home/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function RootStackNav(){
    return (
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={RootDrawerNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
      );
}