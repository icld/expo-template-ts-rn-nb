import { NavigatorScreenParams } from '@react-navigation/native';
import {
  DrawerNavigatorParamList,
  TabNavigatorParamList,
} from '../../types/navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<TabNavigatorParamList> | undefined;
  Drawer: NavigatorScreenParams<DrawerNavigatorParamList> | undefined;
  Search: undefined;
  Error: undefined;
};
