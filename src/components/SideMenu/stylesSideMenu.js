import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    tab: {
        width: '20%',
        backgroundColor: Colors.addBack,
        alignItems: 'center',
        flexDirection: 'column',
        direction: 'flex',
        // justifyContent: 'space-between',
    },
    containerSide: {
        width: '15%',
        height: 48,
    },
    button: {
        marginTop: 15,
        width: '90%',
        height: '5%',
        left: 0,
        top: 0,
        borderRadius: 8,
        backgroundColor: Colors.loginBack,
        // padding: (12, 16, 12, 16),
        radius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textButton: {
        marginLeft: 6,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    icon: {
        marginLeft: 5,
    }
})