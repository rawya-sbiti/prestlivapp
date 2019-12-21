
import React from 'react';
import {StyleSheet} from 'react-native';
import {View,Text} from 'react-native';
import {Screen1,SignInScreen,RegisterScreen,SplashScreen,CheckPrestLivScreen,HomeScreen,CommandeDetailScreen} from './screens';
import {CustomDrawerItem} from './components'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

export default function App() {
  const MainStack = createDrawerNavigator({
    Commandes: {
      screen: HomeScreen,
    },
    Photos:
    {
      screen: CommandeDetailScreen
    }
  },{
    initialRouteName: 'Commandes',
    contentComponent: CustomDrawerItem,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    contentOptions: {
      activeTintColor: '#000000',
      activeBackgroundColor: '#e6e6e6',
    }
  });
const Navigator = createSwitchNavigator(
  {
    AppLiv: {
      screen: MainStack,
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
