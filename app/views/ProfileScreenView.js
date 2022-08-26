import React from 'react';
import {View, Text} from 'react-native';

import CustomButton from '../components/CustomButton';

import {AppColor} from '../utils/StyleConstants';
import GlobalStyles from '../utils/GlobalStyles';
import ProfileScreenStyle from '../styles/ProfileScreenStyle';

const ProfileScreenView = props => {
  const {
    showRegLogView,
    currentUser,
    handleRegisterPress,
    handleLoginPress,
    handleLogoutPress,
  } = props;
  return showRegLogView ? (
    <View style={GlobalStyles.appContainer}>
      <Text style={ProfileScreenStyle.heading}>Profile Screen</Text>
      <View style={GlobalStyles.centerContainer}>
        <CustomButton
          style={ProfileScreenStyle.button}
          title="Register"
          color={AppColor.primary}
          onPress={handleRegisterPress}
        />
        <CustomButton
          style={ProfileScreenStyle.button}
          title="Login"
          color={AppColor.primary}
          onPress={handleLoginPress}
        />
      </View>
    </View>
  ) : (
    <View style={GlobalStyles.appContainer}>
      <Text style={ProfileScreenStyle.label}>Username</Text>
      <Text style={ProfileScreenStyle.valuetxt}>{currentUser.username} </Text>
      <Text style={ProfileScreenStyle.label}>Email</Text>
      <Text style={ProfileScreenStyle.valuetxt}>{currentUser.email}</Text>
      <Text style={ProfileScreenStyle.label}>Phone number </Text>
      <Text style={ProfileScreenStyle.valuetxt}>{currentUser.phone}</Text>
      <View style={GlobalStyles.centerContainer}>
        <CustomButton
          style={ProfileScreenStyle.logoutButton}
          title="Log Out"
          color={AppColor.red}
          onPress={handleLogoutPress}
        />
      </View>
    </View>
  );
};

export default ProfileScreenView;
