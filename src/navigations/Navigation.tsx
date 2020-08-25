import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from './screens';
import {TabNavigator} from './tabNavigation';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNav"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="TabNav" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
