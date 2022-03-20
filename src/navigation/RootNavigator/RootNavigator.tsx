import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen, ErrorScreen } from '../../screens';
import { RootStackParamList } from '../../types/navigation';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import { RootDrawerNavigator } from '../RootDrawerNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Drawer'
        component={RootDrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Error'
        component={ErrorScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Search' component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
