import { StyleSheet } from "react-native";
import Colors from "../../../../common/Colors";

export default StyleSheet.create(
    {
        currentRole: {
            fontWeight: '500',
            fontSize: 12,
            color: Colors.primary,
            marginBottom: 12,
        },

        name: {
           color: Colors.text_prim,
           fontWeight: '700',
           marginBottom: 24, 
           fontSize: 28
        },

        header: {
            color: Colors.text_prim,
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 12,
        },

        content: {
            color: Colors.text_second,
            fontWeight: '400',
            marginBottom: 24,
            fontSize: 14,
        }
    }
)