import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User1 from './User1';
import User2 from './User2';

const Tab = createBottomTabNavigator();

export default function Profile() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="user1" component={User1} options={{headerShown: false, tabBarBadge: 3}}/>
      <Tab.Screen name="user2" component={User2} options={{headerShown: false, tabBarBadge: 1}}/>
    </Tab.Navigator>
  );
}