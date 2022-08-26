import {StyleSheet} from 'react-native';
import {AppColor, FontSize} from '../utils/StyleConstants';

export default StyleSheet.create({
  textInput: {
    width: '100%',
    marginVertical: 8,
    color: AppColor.black,
  },
  button: {
    width: '70%',
    height: 50,
    marginVertical: 40,
    backgroundColor: AppColor.primary,
  },
  error: {
    marginLeft: 8,
    color: AppColor.red,
    fontSize: FontSize.Small,
  },
});