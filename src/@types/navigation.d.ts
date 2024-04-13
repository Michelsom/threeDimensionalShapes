import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NewTransactionParamList = {
  rotation?: number;
  id?: number;
  color?: string;
  shapeType?: number;
};

export type SettingsProps = NativeStackScreenProps<
  NewTransactionParamList,
  'Settings'
>;

export type AppParamList = {
  Home: undefined;
  Settings: NewTransactionParamList;
};
export type NavigationProp = StackNavigationProp<AppParamList>;

declare module '@react-navigation/core' {
  export function useNavigation<T = NavigationProp>(): T;
}
declare module '@react-navigation/native' {
  export function useNavigation<T = NavigationProp>(): T;
}
