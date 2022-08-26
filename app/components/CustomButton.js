import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { AppColor, FontSize } from '../utils/StyleConstants';

const CustomButton = props => {
  let color = props.color ? props.color : 'red';
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        {...styles.customButton, ...props.style},
        {backgroundColor: color},
      ]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    height: 40,
    borderRadius: 8,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColor.white,
    fontSize: FontSize.ButtonText,
  },
});