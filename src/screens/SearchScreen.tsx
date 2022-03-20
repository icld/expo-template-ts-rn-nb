import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Text, View } from 'native-base';

export default function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
      <View />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
