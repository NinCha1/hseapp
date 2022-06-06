import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import { Fonts } from '../../common/Fonts';

export default StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.loginBack,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'column',
        // padding: (40, 40, 28),
    },
    loginForm: {
        // flex: 1,
        height: 512, //50%
        width: 480,
        backgroundColor: '#fff',
        borderRadius: 16,
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'center',
        marginTop: '5%',
        justifyContent: 'center', 
        padding: (40, 40, 28),
        gap: 40,
    },
    shadowProp : {
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {width: -24, height: 36},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    header: {
        fontFamily: Fonts.Inter500,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 28,
        color: '#1F4EC7',
        justifyContent: 'center',
        },
    loginInput: {
        backgroundColor: '#F5F5F5',
        // position: 'static',
        width: 400,
        height: 48,
        // alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
        borderRadius: 12,
        // marginVertical: '3%',
        color: 'black',
        // alignItems: 'center',
        fontFamily: Fonts.Inter500,
        fontStyle: 'normal',
        fontSize: 16, 
        lineHeight: 16, 
        marginTop: 16,
        padding: 13,
        // order: 0,
    },
    btn: {
        width: 400,
        height: 48,
        marginVertical: 10,
        flexDirection: 'row',
        // "&:hover": {
        //      background: "#efefef"
        //  }
        // backgroundColor: 'red'
        // left: 10,
    }
})