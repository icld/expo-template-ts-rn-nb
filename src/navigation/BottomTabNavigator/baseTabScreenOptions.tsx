import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Heading, View } from 'native-base';

const baseTabScreenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  headerBackground: () => <View bg='white' w='full' h='full' />,
  headerTitle: ({ children }) => (
    <Heading color='gray.800' size='md'>
      {children}
    </Heading>
  ),
};

export default baseTabScreenOptions;
