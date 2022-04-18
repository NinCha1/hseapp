import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.loginBack,
        width: '100%',
    },
    loginForm: {
        height: 512, //50%
        width: 426,
        backgroundColor: '#fff',
        borderRadius: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        display: 'flex',
        // left: 0,
        // top: 0,
        alignSelf: 'stretch',
        marginTop: 75,
        // marginBottom: '38.3%',
        marginLeft: '33.3%',
        justifyContent: 'center', 
    },
    header: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        alignItems: 'center',
        color: '#1F4EC7',
        width: 300, //30%
        height: 46, //9%
        marginLeft:'30%',
        justifyContent: 'center',
        },
    loginInput: {
        backgroundColor: '#F5F5F5',
        position: 'static',
        width: 400,
        height: 46,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 32,
        marginVertical: '3%',
        paddinVertical: 12,
        color: 'black',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16, 
        lineHeight: 16, 
        order: 0,
    },
    btn: {
        width: 400,
        height: 48,
        marginVertical: 10,
        flexDirection: 'row',
        left: 10,
    }
})