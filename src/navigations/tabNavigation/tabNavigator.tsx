import * as React from 'react';
import {Characters, Episodes, Locations} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../styles';
import CustomTab from './CustomTab';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

const TabNavigator = (props: TabNavigatorProps) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTab {...props} />}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
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

export default TabNavigator;
