import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Screens/Home'
import Conte_nos from './src/Screens/Conte_nos'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>

        <Stack.Screen name="Home"
          component={Home}
        />

        <Stack.Screen name="Conte_nos"
          component={Conte_nos}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

