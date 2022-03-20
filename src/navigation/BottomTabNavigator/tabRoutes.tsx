import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import PressableWithScale from '../../components/Pressables/PressableWithScale';
import { GraphScreen, HomeScreen, ListScreen } from '../../screens';
import { TabNavigatorParamList } from '../../types/navigation';
import { RouteType } from './types';

const TabRoutes = () => {
  const { navigate } = useNavigation();

  const tabRoutes: Record<string, RouteType<TabNavigatorParamList>> = {
    home: {
      name: 'Home',
      icon: 'ios-home-outline',
      Component: HomeScreen,
      options: {
        title: 'Home Screen',
        headerRight: () => (
          <PressableWithScale onPress={() => navigate('Search')}>
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
