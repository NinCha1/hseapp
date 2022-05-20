import Colors from "../../common/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tab: {
        inactiveTintColor: '#d9d9d9',
        indicatorStyle: {height: null,},
                // upperCaseLabel: false,
        labelStyle: { 
            textTransform: "none", 
            fontSize: 28, 
            fontFamily: 'Inter',
            fontWeight: '700',
            marginLeft: -20,
        },
        style: {
            width: 370,
            height: '15%',
                // alignItem: 'left',
            justifyContent: 'flex-end',
            marginLeft: 30,
        },
        shadowOffset: { height: 0, width: 0 }
    }
})