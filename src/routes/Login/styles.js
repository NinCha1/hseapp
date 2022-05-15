import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.loginBack,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'column'
    },
    loginForm: {
        // flex: 1,
        height: 465, //50%
        width: 430,
        backgroundColor: '#fff',
        borderRadius: 16,
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center', 
    },
    header: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 28,
        // alignSelf: 'center',
        color: '#1F4EC7',
        // width: 300, //30%
        // height: 34, //9%
        // marginLeft:'30%',
        justifyContent: 'center',
        },
    loginInput: {
        backgroundColor: '#F5F5F5',
        // position: 'static',
        width: 400,
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 15,
        // marginVertical: '3%',
        paddingVertical: 12,
        color: 'black',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16, 
        lineHeight: 16, 
        // order: 0,
    },
    btn: {
        width: 400,
        height: 48,
        marginVertical: 10,
        flexDirection: 'row',
        // backgroundColor: 'red'
        // left: 10,
    }
})