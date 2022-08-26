import {StyleSheet} from 'react-native';
import {AppColor, FontSize} from '../utils/StyleConstants';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    bottom: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieTitle: {
    color: AppColor.white,
    fontSize: FontSize.Large,
    fontWeight: 'bold',
  },
  releaseDate: {
    color: AppColor.white,
    fontSize: 15,
  },
  rating: {
    marginTop: '3%',
    color: AppColor.white,
    fontSize: 15,
  },
  movieDescription: {
    marginTop: '1%',
    color: AppColor.white,
    fontSize: 14,
    fontWeight: '700',
  },
});