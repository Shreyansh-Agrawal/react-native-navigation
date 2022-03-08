import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RootStackNav from './navigation/RootStackNav';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white"/>
      <RootStackNav/>
    </NavigationContainer>
  );
}

export default App;