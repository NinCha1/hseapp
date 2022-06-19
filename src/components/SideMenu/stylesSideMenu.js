import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    tab: {
        width: 282,
        backgroundColor: Colors.addBack,
        flexDirection: 'column',
        direction: 'flex',
        justifyContent: 'space-between',
        padding: (48, 24, 24),
        height: '100%',
    },

    button: {
        // marginTop: 7,
        width: '100%',
        height: 40,
        minHeight: 30,
        minWidth: 100,
        left: 0,
        top: 0,
        borderRadius: 8,
        radius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textButton: {
        marginLeft: '2%',
        fontStyle: 'normal',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    icon: {
        marginLeft: 8,
        marginRight: 17,
        width: 24, 
        height: 24
    },
    upper: {
        height: '85%',
        alignItems: 'center',
        marginTop: 20,
    },
    bottom: {
        height: '100%',
        justifyContent: 'flex-start',

    },
    logout: {
        marginLeft: '2%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    account: {
        color: Colors.text_second,  
        fontWeight: '500', 
        fontSize: 16, 
        lineHeight: 19
    },
})