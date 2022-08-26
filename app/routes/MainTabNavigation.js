import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppContext from '../context/AppContext';

import {FontSize} from '../utils/StyleConstants';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);

  const appGlobals = {
    user: user,
    loggedIn: loggedIn,
  };

  // console.log('appGlobals in MainTab', appGlobals);

  return (
    <AppContext.Provider value={appGlobals}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLabel,
          }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{tabBarLabel: 'Home'}}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{tabBarLabel: 'Profile'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default MainTabNavigation;

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: FontSize.Title,
  },
});
