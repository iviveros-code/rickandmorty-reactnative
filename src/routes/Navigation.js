import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Characters, Episodes, Locations, Welcome} from '../screens';
import {ROUTES_NAME} from '../config/constants/routeConstants';
import {colors} from '../styles';
import CustomTab from './CustomTab';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {CHARACTERS_SCREEN, LOCATIONS_SCREEN, EPISODES_SCREEN} = ROUTES_NAME;
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTab {...props} />}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        name={CHARACTERS_SCREEN}
        component={Characters}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={LOCATIONS_SCREEN}
        component={Locations}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={EPISODES_SCREEN}
        component={Episodes}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="television" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function StackNavigation() {
  const {WELCOME_SCREEN, TABNAVIGATOR_NAVIGATION} = ROUTES_NAME;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={TABNAVIGATOR_NAVIGATION}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={WELCOME_SCREEN} component={Welcome} />
        <Stack.Screen name={TABNAVIGATOR_NAVIGATION} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
