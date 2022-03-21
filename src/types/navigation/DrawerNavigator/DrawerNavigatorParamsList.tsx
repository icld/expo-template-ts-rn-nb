import { NavigatorScreenParams } from '@react-navigation/native';
import { TabNavigatorParamList } from '../BottomTabNavigation/TabNavigatorParamList';
import { StackNavigatorParamList } from '../StackNavigator/StackNavigatorParams';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}

export type RootDrawerParamList = {
  Stack: NavigatorScreenParams<StackNavigatorParamList> | undefined;
  User: undefined;
};
