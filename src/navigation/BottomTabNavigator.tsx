import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'native-base';
import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PressableWithScale from '../components/Pressables/PressableWithScale';
import { HomeScreen, ListScreen, GraphScreen } from '../screens';
import { RootStackParamList, RootTabParamList } from '../types/navigation';
import BottomTabComponent from './components/BottomTabComponent';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();
  const currentRoute = getFocusedRouteNameFromRoute(route);

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{ tabBarShowLabel: false }}
      tabBar={() => (
        <BottomTabComponent
          currentRoute={currentRoute}
          routes={[
            { name: 'Home', iconName: 'ios-home-outline' },
            { name: 'List', iconName: 'ios-layers-outline' },
            { name: 'Graph', iconName: 'bar-chart-outline' },
          ]}
        />
      )}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={() => ({
          headerRight: () => (
            <PressableWithScale onPress={() => navigation.navigate('Modal')}>
              <Icon as={Ionicons} mr={6} size='sm' name='search' />
            </PressableWithScale>
          ),
        })}
      />
      <BottomTab.Screen name='List' component={ListScreen} options={{}} />
      <BottomTab.Screen name='Graph' component={GraphScreen} options={{}} />
    </BottomTab.Navigator>
  );
}
