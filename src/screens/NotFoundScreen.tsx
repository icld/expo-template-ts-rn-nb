import { Button, Text, View } from 'native-base';
import { RootStackScreenProps } from '../types/types';

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <Button onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </Button>
    </View>
  );
}
