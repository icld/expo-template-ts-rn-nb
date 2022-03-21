import { TabNavigatorParamList } from '..';
import { RouteType } from './RouteType';

export type BottomTabComponentProps = {
  routes: RouteType<TabNavigatorParamList>[];
  currentRoute: string | undefined;
};
