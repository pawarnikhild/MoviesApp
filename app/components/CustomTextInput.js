import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {AppColor, FontFamily, FontSize} from '../utils/StyleConstants';

export default CustomTextInput = ({
  onChangeText,
  value,
  placeholder,
  error,
  required,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeText}
        style={{...styles.textInput, ...props.style}}
        placeholder={placeholder}
        placeholderTextColor={AppColor.gray}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // paddingVertical: 10,
  },

  textInput: {
    height: 56,
    borderWidth: 2,
    borderColor: AppColor.gray,
    borderRadius: 8,
    paddingLeft: 20,
    fontSize: FontSize.Subtitle,
  },
});
