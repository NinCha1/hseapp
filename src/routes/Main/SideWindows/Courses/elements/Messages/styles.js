import { StyleSheet } from "react-native";

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


        userName: {
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily: 'Lato-Regular',
            color: 'black'
        },

        containerAdd: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        PostTime: {
            fontSize: 12,
            color: '#666',
            fontFamily: 'Lato-Regular',
        },

        MessageText: {
            fontSize: 14,
            color: '#333333'
        }
    }
)