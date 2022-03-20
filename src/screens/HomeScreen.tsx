import { Text, View } from 'native-base';
import { RootTabScreenProps } from '../types/screens';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View>
      <Text>Tab One</Text>
      <View />
    </View>
  );
}
