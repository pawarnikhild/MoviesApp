import React from 'react';
import {Text, View} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomLink from '../components/CustomLink';

import GlobalStyles from '../utils/GlobalStyles';
import {AppColor} from '../utils/StyleConstants';
import LoginScreenStyle from '../styles/LoginScreenStyle';

const LoginScreenView = props => {
  const {
    userName,
    password,
    setUserName,
    setPassword,
    userNameError,
    passwordError,
    validateUserName,
    validatePassword,
    handleLinkPress,
    login,
  } = props;
  return (
    <View style={GlobalStyles.appContainer}>
      <CustomLink title="Don't have Account" onPress={handleLinkPress} />

      <CustomTextInput
        style={LoginScreenStyle.textInput}
        placeholder="Username"
        value={userName}
        onChangeText={txt => {
          setUserName(txt);
          validateUserName(txt);
        }}
      />
      {userNameError && (
        <Text style={LoginScreenStyle.error}>{userNameError}</Text>
      )}

      <CustomTextInput
        style={LoginScreenStyle.textInput}
        placeholder="Password"
        value={password}
        onChangeText={txt => {
          setPassword(txt);
          validatePassword(txt);
        }}
      />
      {passwordError && (
        <Text style={LoginScreenStyle.error}>{passwordError}</Text>
      )}

      <View style={GlobalStyles.horizontalCenterContainer}>
        <CustomButton
          style={LoginScreenStyle.button}
          title="Login"
          color={AppColor.primary}
          onPress={login}
        />
      </View>
    </View>
  );
};

export default LoginScreenView;