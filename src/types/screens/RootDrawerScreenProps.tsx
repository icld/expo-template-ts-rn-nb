import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from '../navigation';

export type RootStackScreenProps<Screen extends keyof RootDrawerParamList> =
  NativeStackScreenProps<RootDrawerParamList, Screen>;
