import { TabNavigatorParamList } from '../../../types/navigation';
import { RouteType } from './RouteType';

export type BottomTabComponentProps = {
  routes: RouteType<TabNavigatorParamList>[];
  currentRoute: string | undefined;
};
