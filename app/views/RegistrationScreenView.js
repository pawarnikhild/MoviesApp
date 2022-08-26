import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomLink from '../components/CustomLink';

import GlobalStyles from '../utils/GlobalStyles';
import {AppColor} from '../utils/StyleConstants';
import RegistrationStyles from '../styles/RegistrationStyles';

const RegistrationScreenView = props => {
  const {
    userName,
    email,
    phone,
    password,
    repassword,
    setUserName,
    setEmail,
    setPhone,
    setPassword,
    setRepassword,
    nameError,
    emailError,
    phoneError,
    passwordError,
    repasswordError,
    validateUserName,
    validateEmail,
    validatePhone,
    validateRePassword,
    validatePassword,
    handleLinkPress,
    createUserAcc,
  } = props;
  return (
    <View style={GlobalStyles.appContainer}>
      <ScrollView>
        <CustomLink title="Already have Account" onPress={handleLinkPress} />

        <CustomTextInput
          style={RegistrationStyles.textInput}
          placeholder="Username"
          value={userName}
          onChangeText={param => {
            setUserName(param);
            validateUserName(param);
          }}
        />
        {nameError && <Text style={RegistrationStyles.error}>{nameError}</Text>}

        <CustomTextInput
          style={RegistrationStyles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={param => {
            setEmail(param);
            validateEmail(param);
          }}
        />
        {emailError && (
          <Text style={RegistrationStyles.error}>{emailError}</Text>
        )}
        <CustomTextInput
          style={RegistrationStyles.textInput}
          placeholder="Enter Mobile no."
          value={phone}
          onChangeText={param => {
            setPhone(param);
            validatePhone(param);
          }}
        />
        {phoneError && (
          <Text style={RegistrationStyles.error}>{phoneError}</Text>
        )}

        <CustomTextInput
          style={RegistrationStyles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={param => {
            setPassword(param);
            validatePassword(param);
          }}
        />
        {passwordError && (
          <Text style={RegistrationStyles.error}>{passwordError}</Text>
        )}
        <CustomTextInput
          style={RegistrationStyles.textInput}
          placeholder="Confirm Password"
          value={repassword}
          onChangeText={param => {
            setRepassword(param);
            validateRePassword(param);
          }}
        />
        {repasswordError && (
          <Text style={RegistrationStyles.error}>{repasswordError}</Text>
        )}

        <View style={GlobalStyles.horizontalCenterContainer}>
          <CustomButton
            style={RegistrationStyles.button}
            title="Register"
            color={AppColor.primary}
            onPress={createUserAcc}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreenView;