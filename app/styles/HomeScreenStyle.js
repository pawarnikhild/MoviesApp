import {StyleSheet} from 'react-native';
import {AppColor, FontSize} from '../utils/StyleConstants';

export default StyleSheet.create({
  userName: {
    fontSize: FontSize.Title,
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  textInput: {
    width: 270,
    color: AppColor.textMain,
  },
  button: {
    backgroundColor: AppColor.primary,
    width: '24%',
    height: 56,
  },
  flatlist: {},
});
