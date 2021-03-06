import Colors from "../../common/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: 270,
        height: 290,
        backgroundColor: Colors.addBack,
        marginTop: 40,
        marginRight: 40, 
        borderRadius: 12, 
        // alignItems: 'flex-start',
        padding: 16, 
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    month: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: Colors.text_prim,
    },
    body: {
        height: '100%',
    },

})