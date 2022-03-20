import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Icon, Pressable } from 'native-base';
import * as React from 'react';
import PressableWithScale from '../components/Pressables/PressableWithScale';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen, ListScreen } from '../screens';
import GraphScreen from '../screens/GraphScreen';
import { RootStackParamList, RootTabParamList } from '../types/navigation';
import { RootTabScreenProps } from '../types/screens';
import BottomTabComponent from './components/BottomTabComponent';
import TabIcon from './components/TabIcon';

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
