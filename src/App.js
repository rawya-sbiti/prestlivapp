
import React from 'react';
import {StyleSheet} from 'react-native';
import {View,Text} from 'react-native';
import {Screen1,SignInScreen,RegisterScreen,SplashScreen,CheckPrestLivScreen} from './screens';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
export default function App() {

const Navigator = createSwitchNavigator(
  {
    AppLiv: {
      screen: RegisterScreen,
    },
    SplashScreen: {
      screen: SplashScreen,
    },
    AppPrest: {
      screen: Screen1,
    },
    Check:{
      screen:CheckPrestLivScreen,
    },
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(Navigator);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
      </PersistGate>
    </Provider>
  );
}
