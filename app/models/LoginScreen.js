import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppContext from '../context/AppContext';
import LoginScreenView from '../views/LoginScreenView';

const LoginScreen = ({navigation}) => {
  const appGlobals = useContext(AppContext);

  const [allUserData, setAllUserData] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    fetchalldata();
  }, []);

  const fetchalldata = async () => {
    const data = await AsyncStorage.getItem('usersData');
    if (data) {
      setAllUserData(JSON.parse(data));
    } else {
      alert('No registered users found! First register and then login');
    }
  };

  const validateUserName = param => {
    let reg = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
    if (param.length < 3) {
      setUserNameError('User name must be at least 3 characters');
      return false;
    } else if (!reg.test(param)) {
      setUserNameError('Enter valid User name');
      return false;
    } else {
      setUserNameError(null);
      return true;
    }
  };

  const validatePassword = param => {
    const regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (param.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    } else if (!regx.test(param)) {
      setPasswordError(
        'Password must be atleast 8 characters including one alphanumeric and one special characters.',
      );
      return false;
    } else {
      setPasswordError(null);
      return true;
    }
  };

  const validate = () => {
    var flag = true;
    if (!validateUserName(userName)) {
      flag = false;
    }
    if (!validatePassword(password)) {
      flag = false;
    }
    return flag;
  };

  const login = () => {
    if (validate()) {
      const data = allUserData.filter(
        item => item.username === userName && item.password === password,
      );
      if (data.length > 0) {
        // AsyncStorage.setItem('loggedInUser', JSON.stringify(data[0]));
        // console.log('loggedInUser', data[0])
        appGlobals.user = data[0];
        appGlobals.loggedIn = true;
        alert('Logged In Successfully!');
        // navigation.replace('ProfileScreen');
        navigation.goBack();
      } else {
        alert('Invalid User name or Password');
      }
    }
  };

  const handleLinkPress = () => {
    navigation.replace('RegistrationScreen');
  };

  // console.log('appGlobals in LoginScreen', appGlobals)
  return (
    <LoginScreenView
      userName={userName}
      password={password}
      setUserName={setUserName}
      setPassword={setPassword}
      userNameError={userNameError}
      passwordError={passwordError}
      validateUserName={validateUserName}
      validatePassword={validatePassword}
      handleLinkPress={handleLinkPress}
      login={login}
    />
  );
};

export default LoginScreen;