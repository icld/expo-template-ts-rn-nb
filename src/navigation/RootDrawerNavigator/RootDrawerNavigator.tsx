import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigatorParamList } from '../../types/navigation';

import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='User'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
