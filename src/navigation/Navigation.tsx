import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import { DrawerNavigator } from './DrawerNavigator';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
}
