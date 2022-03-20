import { Text, View } from 'native-base';
import { ReactElement } from 'react';
import { RootTabScreenProps } from '../types/screens';

export default function HomeScreen(): ReactElement {
  return (
    <View>
      <Text>Tab One</Text>
      <View />
    </View>
  );
}
