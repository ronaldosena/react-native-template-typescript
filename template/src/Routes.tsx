import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, About } from '~/screens';

export type RouteParams = {
  Home: undefined;
  About: { content: string } | undefined;
};

const Tab = createBottomTabNavigator<RouteParams>();

const Routes: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="About" component={About} />
  </Tab.Navigator>
);

export default Routes;
