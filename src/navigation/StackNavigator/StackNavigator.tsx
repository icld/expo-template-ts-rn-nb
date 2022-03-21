import { createStackNavigator } from '@react-navigation/stack';
import { ErrorScreen, SearchScreen } from '../../screens';
import {
  RootDrawerParamList,
  StackNavigatorParamList,
} from '../../types/navigation';
import { BottomTabNavigator } from '../BottomTabNavigator';

export default function StackNavigator() {
  const { Navigator, Screen, Group } =
    createStackNavigator<StackNavigatorParamList>();

  return (
    <Navigator initialRouteName='Root' screenOptions={{ headerShown: true }}>
      <Screen
        name='Root'
        component={BottomTabNavigator}
        // options={{ headerShown: false }}
      />

      <Screen
        name='Error'
        component={ErrorScreen}
        options={{ title: 'Oops!' }}
      />
      <Group screenOptions={{ presentation: 'modal' }}>
        <Screen name='Search' component={SearchScreen} />
      </Group>
    </Navigator>
  );
}
