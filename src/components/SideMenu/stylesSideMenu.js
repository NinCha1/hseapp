import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
// import "inter-ui/inter.css";

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

export default StyleSheet.create({
    tab: {
        width: '20%',
        backgroundColor: Colors.addBack,
        flexDirection: 'column',
        direction: 'flex',
        justifyContent: 'space-between',
    },

    button: {
        marginTop: 10,
        width: '90%',
        height: '7%',
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
        // fontFamily: Inter_100Thin,
        fontStyle: 'normal',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    icon: {
        marginLeft: 8,
        marginRight: 17,
    },
    upper: {
        height: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    bottom: {
        // width: '100%',
        height: '100%',
        justifyContent: 'flex-start',

    },
    logout: {
        marginTop: 15,
        marginLeft: 25,
        flexDirection: 'row',
        alignItems: 'center'
    }
})