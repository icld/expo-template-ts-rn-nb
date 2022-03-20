import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ComponentType, ReactNode } from 'react';

export type RouteType<paramlist> = {
  name: keyof paramlist;
  icon: string;
  Component: ComponentType<ReactNode>;
  options?: BottomTabNavigationOptions;
};
