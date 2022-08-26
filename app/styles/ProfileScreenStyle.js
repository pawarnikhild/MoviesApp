import {StyleSheet} from 'react-native';
import {AppColor, FontSize} from '../utils/StyleConstants';

export default StyleSheet.create({
  heading: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: FontSize.Title,
    color: AppColor.black,
  },
  button: {
    width: '70%',
    height: 80,
    marginVertical: 40,
  },
  label: {
    marginTop: '5%',
    color: AppColor.black,
    fontSize: FontSize.Large,
    fontWeight: '600',
  },
  valuetxt: {
    borderWidth: 2,
    borderColor: AppColor.lightGray,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: FontSize.Large,
    color: AppColor.black,
    padding: 10,
  },
  logoutButton: {
    width: '80%',
    height: 56,
    marginVertical: 40,
  },
});
