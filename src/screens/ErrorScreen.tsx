import { Button, Text, View } from 'native-base';
import { RootStackScreenProps } from '../types/screens';

export default function ErrorScreen({
  navigation,
}: RootStackScreenProps<'Error'>) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <Button onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </Button>
    </View>
  );
}
