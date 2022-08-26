import { StyleSheet } from 'react-native';
import { AppColor, FontSize } from './StyleConstants';

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: AppColor.white,
        paddingHorizontal: 16,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalCenterContainer: {
        alignItems: 'center',
    },
});