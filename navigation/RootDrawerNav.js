import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../src/screens/Home/HomeScreen";
import Profile from "../src/screens/Profile/profile";
import Settings from "../src/screens/Settings";

const Drawer = createDrawerNavigator();

export default function RootDrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#000",
          width: 240,
        },
        drawerLabelStyle:{
          fontSize:18,
          color:"#fff"
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My Home",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My Profile",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "My Settings",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
