import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { AppColor, FontSize } from '../utils/StyleConstants';

const CustomLink = props => {
  let color = props.color ? props.color : 'red';
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{...styles.customLink, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomLink;

const styles = StyleSheet.create({
  customLink: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: AppColor.blue,
    fontSize: FontSize.Large,
    textDecorationLine: 'underline',
  },
});
