import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNav from './navigation/RootStackNav';

function App() {
  return (
    <NavigationContainer>
      <RootStackNav/>
    </NavigationContainer>
  );
}

export default App;