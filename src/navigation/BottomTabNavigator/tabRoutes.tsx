import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import PressableWithScale from '../../components/Pressables/PressableWithScale';
import { GraphScreen, HomeScreen, ListScreen } from '../../screens';
import {
  RootDrawerParamList,
  TabNavigatorParamList,
} from '../../types/navigation';
import { RouteType } from '../../types/navigation/BottomTabNavigation';

const TabRoutes = () => {
  const { navigate } = useNavigation<NavigationProp<RootDrawerParamList>>();

  const tabRoutes: Record<string, RouteType<TabNavigatorParamList>> = {
    home: {
      name: 'Home',
      icon: 'ios-home-outline',
      Component: HomeScreen,
      options: {
        headerRight: () => (
          <PressableWithScale
            onPress={() => navigate('Stack', { screen: 'Search' })}
          >
            <Icon as={Ionicons} mr={6} size='sm' name='search' />
          </PressableWithScale>
        ),
      },
    },
    list: {
      name: 'List',
      icon: 'ios-layers-outline',
      Component: ListScreen,
      options: {},
    },
    graph: {
      name: 'Graph',
      icon: 'ios-bar-chart-outline',
      Component: GraphScreen,
      options: {},
    },
  };

  return { tabRoutes };
};

export default TabRoutes;
