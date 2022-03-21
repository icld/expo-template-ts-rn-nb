import { NavigatorScreenParams } from '@react-navigation/native';
import { TabNavigatorParamList } from '../BottomTabNavigation/TabNavigatorParamList';

export type StackNavigatorParamList = {
  Root: NavigatorScreenParams<TabNavigatorParamList> | undefined;
  Error: undefined;
  Search: undefined;
};
