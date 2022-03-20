import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        order: 2,
        mardgin: (40, 0),
    },
    title: {
        color: Colors.background,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
    }
})