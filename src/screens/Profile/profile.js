import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import User1 from "./User1";
import User2 from "./User2";

const Tab = createBottomTabNavigator();

export default function Profile() {
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#000",
      height: 80,
      borderRadius: 40,
      margin: 10,
    },
    tabBarItemStyle: {
      backgroundColor: "#fff",
      margin: 10,
      borderRadius: 30,
    },
  };

  return (
    <Tab.Navigator
      {...{ screenOptions }}

      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#555",
        labelStyle: { fontSize: 20 },
      }}
    >
      <Tab.Screen
        name="user1"
        component={User1}
        options={{ headerShown: false, tabBarBadge: 3, title:"USER 1" }}
      />
      <Tab.Screen
        name="user2"
        component={User2}
        options={{ headerShown: false, tabBarBadge: 1, title:"USER 1" }}
      />
    </Tab.Navigator>
  );
}