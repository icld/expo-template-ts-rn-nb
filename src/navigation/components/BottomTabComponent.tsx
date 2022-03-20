import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Heading, HStack, Icon, IIconProps } from 'native-base';
import PressableWithScale from '../../components/Pressables/PressableWithScale';
import {
  RootStackParamList,
  TabNavigatorParamList,
} from '../../types/navigation';

import { BottomTabComponentProps } from '../BottomTabNavigator/types';

const BottomTabComponent: React.FC<BottomTabComponentProps> = ({
  currentRoute,
  routes,
}) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList & TabNavigatorParamList>>();

  return (
    <HStack
      direction='row'
      alignItems='center'
      justifyContent={'space-evenly'}
      w='full'
      bg='muted.50'
      h='16'
      _dark={{ bg: 'muted.800', borderTopColor: 'muted.600' }}
      pb={6}
      pt={1}
      px={4}
      borderTopWidth={0.5}
      borderTopColor='gray.200'
    >
      {routes ? (
        routes.map(({ name, icon }) => (
          <PressableWithScale
            onPress={() => navigation.navigate(name)}
            key={name}
          >
            <Icon
              w={6}
              as={Ionicons}
              name={icon}
              size='sm'
              color={name === currentRoute ? 'rose.600' : 'gray.700'}
            />
          </PressableWithScale>
        ))
      ) : (
        <Heading size='md'>No Routes</Heading>
      )}
    </HStack>
  );
};

export default BottomTabComponent;
