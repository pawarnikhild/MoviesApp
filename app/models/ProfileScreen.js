import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

import AppContext from '../context/AppContext';

import ProfileScreenView from '../views/ProfileScreenView';

const ProfileScreen = ({navigation}) => {
  const appGlobals = useContext(AppContext);
  const isFocused = useIsFocused();

  const [showRegLogView, setShowRegLogView] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setShowRegLogView(!appGlobals.loggedIn);
    setCurrentUser(appGlobals.user);
  }, [isFocused]);

  const handleRegisterPress = () => {
    navigation.navigate('RegistrationScreen');
  };
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleLogoutPress = async () => {
    // await AsyncStorage.removeItem('loggedInUser');
    appGlobals.user = null;
    appGlobals.loggedIn = false;
    navigation.replace('ProfileScreen');
  };
  // console.log('appGlobals in ProfileScreen', appGlobals)
  // console.log('showRegLogView', showRegLogView)

  return (
    <ProfileScreenView
      currentUser={currentUser}
      showRegLogView={showRegLogView}
      handleRegisterPress={handleRegisterPress}
      handleLoginPress={handleLoginPress}
      handleLogoutPress={handleLogoutPress}
    />
  );
};

export default ProfileScreen;
