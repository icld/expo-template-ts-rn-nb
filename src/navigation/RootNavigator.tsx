import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen, NotFoundScreen } from '../screens';
import { RootStackParamList } from '../types/types';
import BottomTabNavigator from './BottomTabNavigator';

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
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
