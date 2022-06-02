import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import FeedScreen from './Screens/Feed'
import UsersScreen from './Screens/Users/index'
import SettingsScreen from './Screens/Settings'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="FeedScreen">
        <Drawer.Screen name="News" component={FeedScreen} />
        <Drawer.Screen name="Users" component={UsersScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}