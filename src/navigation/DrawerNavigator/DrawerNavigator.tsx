import { createDrawerNavigator } from '@react-navigation/drawer';
import { SearchScreen, ErrorScreen, UserScreen } from '../../screens';
import { RootDrawerParamList } from '../../types/navigation';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import StackNavigator from '../StackNavigator/StackNavigator';

export default function DrawerNavigator() {
  const { Navigator, Screen, Group } =
    createDrawerNavigator<RootDrawerParamList>();

  return (
    <Navigator initialRouteName='Stack' screenOptions={{ headerShown: false }}>
      <Screen
        name='User'
        component={UserScreen}
        options={{ headerShown: false }}
      />

      <Screen name='Stack' component={StackNavigator} />
    </Navigator>
  );
}
