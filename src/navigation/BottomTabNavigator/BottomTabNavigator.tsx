import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import {
  RootStackParamList,
  TabNavigatorParamList,
} from '../../types/navigation';
import BottomTabComponent from '../components/BottomTabComponent';
import baseTabScreenOptions from './baseTabScreenOptions';
import TabRoutes from './tabRoutes';

export default function BottomTabNavigator() {
  const { Navigator, Screen } =
    createBottomTabNavigator<TabNavigatorParamList>();
  const { tabRoutes } = TabRoutes();
  const route = useRoute<RouteProp<RootStackParamList>>();

  const currentRoute = getFocusedRouteNameFromRoute(route);

  const routing = [tabRoutes.home, tabRoutes.list, tabRoutes.graph];

  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={baseTabScreenOptions}
      tabBar={() => (
        <BottomTabComponent currentRoute={currentRoute} routes={routing} />
      )}
    >
      {routing.map(({ name, options, Component }) => (
        <Screen
          name={name}
          component={Component}
          options={options}
          key={name}
        />
      ))}
    </Navigator>
  );
}
