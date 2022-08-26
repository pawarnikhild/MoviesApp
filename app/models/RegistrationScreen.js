import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RegistrationScreenView from '../views/RegistrationScreenView';

const RegistrationScreen = ({navigation}) => {
  const [allUserData, setAllUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const [userNameError, setUserNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [repasswordError, setRepasswordError] = useState(null);

  useEffect(() => {
    fetchalldata();
  }, []);

  const fetchalldata = async () => {
    // await AsyncStorage.removeItem('usersData');
    const data = await AsyncStorage.getItem('usersData');
    if (data) {
      setAllUserData(data);
    } else {
      // alert('Error in fetching users');
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

  const validateEmail = email => {
    const emailregx =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailregx.test(email)) {
      setEmailError('Enter valid email address');
      return false;
    } else {
      setEmailError(null);
      return true;
    }
  };
  const validatePhone = param => {
    let reg = /^([0-9]){10,12}$/;
    if (param.length < 10) {
      setPhoneError('Phone number must be at least 10 digits');
      return false;
    } else if (!reg.test(param)) {
      setPhoneError('Enter valid phone number');
      return false;
    } else {
      setPhoneError(null);
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
  const validateRePassword = param => {
    if (param == '') {
      setRepasswordError('Please enter password');
      return false;
    }
    if (param !== password) {
      setRepasswordError('Password does not match');
      return false;
    } else {
      setRepasswordError(null);
      return true;
    }
  };
  const validate = () => {
    var flag = true;
    if (!validateUserName(userName)) {
      flag = false;
    }
    if (!validateEmail(email)) {
      flag = false;
    }
    if (!validatePhone(phone)) {
      flag = false;
    }
    if (!validatePassword(password)) {
      flag = false;
    }
    if (!validateRePassword(repassword)) {
      flag = false;
    }
    return flag;
  };

  const createUserAcc = async () => {
    const data = await AsyncStorage.getItem('usersData');
    setAllUserData(data);
    const userData = {
      username: userName,
      email: email,
      phone: phone,
      password: password,
    };
    if (validate()) {
      let users = [];
      if (data == null) {
        users.push(userData);
      } else {
        users = JSON.parse(data);
        const checked = users.find(user => {
          return (
            user.username == userName ||
            user.email == email ||
            user.phone == phone
          );
        });
        if (checked && Object.keys(checked).length > 0) {
          alert('User already exists');
          return;
        }
        users.push(userData);
      }
      AsyncStorage.setItem('usersData', JSON.stringify(users));
      alert('Registered Successfully');
      navigation.replace('LoginScreen');
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleLinkPress = () => {
    navigation.replace('LoginScreen');
  };
  console.log('allUserData', allUserData);

  return (
    <RegistrationScreenView
      userName={userName}
      email={email}
      phone={phone}
      password={password}
      repassword={repassword}
      setUserName={setUserName}
      setEmail={setEmail}
      setPhone={setPhone}
      setPassword={setPassword}
      setRepassword={setRepassword}
      userNameError={userNameError}
      emailError={emailError}
      phoneError={phoneError}
      passwordError={passwordError}
      repasswordError={repasswordError}
      validateUserName={validateUserName}
      validateEmail={validateEmail}
      validatePhone={validatePhone}
      validateRePassword={validateRePassword}
      validatePassword={validatePassword}
      handleLinkPress={handleLinkPress}
      createUserAcc={createUserAcc}
    />
  );
};

export default RegistrationScreen;