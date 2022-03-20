import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, TabNavigatorParamList } from '../navigation';

export type RootTabScreenProps<Screen extends keyof TabNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabNavigatorParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
