import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Heading, HStack, Icon, IIconProps } from 'native-base';
import PressableWithScale from '../../components/Pressables/PressableWithScale';
import { RootStackParamList, RootTabParamList } from '../../types/navigation';

type BottomTabComponentProps = {
  routes: { name: keyof RootTabParamList; iconName: IIconProps['name'] }[];
  currentRoute: string | undefined;
};

const BottomTabComponent: React.FC<BottomTabComponentProps> = ({
  currentRoute,
  routes,
}) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList & RootTabParamList>>();

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
        routes.map((route) => (
          <PressableWithScale onPress={() => navigation.navigate(route.name)}>
            <Icon
              w={6}
              as={Ionicons}
              name={route.iconName}
              size='sm'
              color={route.name === currentRoute ? 'rose.600' : 'gray.700'}
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
