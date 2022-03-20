import { NativeBaseProvider } from 'native-base';
import { ReactElement } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './navigation';
import AppLoading from 'expo-app-loading';
import {
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/noto-sans';

export default function App(): ReactElement {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    noto400: NotoSans_400Regular,
    noto400i: NotoSans_400Regular_Italic,
    noto700b: NotoSans_700Bold,
    noto700bi: NotoSans_700Bold_Italic,
  });

  if (!fontsLoaded) <AppLoading />;

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
      </NativeBaseProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
