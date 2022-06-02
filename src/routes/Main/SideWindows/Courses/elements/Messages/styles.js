import { StyleSheet } from "react-native";
import Colors from "../../../../../../common/Colors";
import { Inter_100Thin } from "@expo-google-fonts/inter";
export default StyleSheet.create(
    {
        container: {
            flex:1,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
        },

        card: {
            width: '100%',
        },

        userInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        userImgWrapper: {
            paddingTop: 15,
            paddingBottom: 15,
        },

        UserImg: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },

        textSection: {
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 15,
            paddingLeft: 0,
            marginLeft: 10,
            width: 516,
            borderBottomWidth: 1,
            borderBottomColor: "#cccccc"
        },

        UserInfoText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },


        chatName: {
            fontWeight: '500',
            color: 'black',
            fontSize: 16,
        },

        lastSender: {
            fontWeight: '400',
            fontSize: 14,
            color: Colors.text_prim,
        },

        containerAdd: {
            flexDirection: 'row',
        },

        PostTime: {
            fontSize: 14,
            color: Colors.text_second,
            fontWeight: 400,
        },

        MessageText: {
            fontSize: 14,
            color: Colors.text_second,
            fontWeight: 400,
        }
    }
)