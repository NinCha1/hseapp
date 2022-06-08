import Colors from "../../common/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tab: {
        "tabBarInactiveTintColor": "#d9d9d9",
        "tabBarLabelStyle": {
          "textTransform": "none",
          "fontSize": 28,
          "fontFamily": "Inter",
          "fontWeight": "700",
          "marginLeft": -20
        },
        "tabBarIndicatorStyle": {
          "height": null
        },
        "tabBarStyle": {
          "width": 370,
          "height": "15%",
          "justifyContent": "flex-end",
          "marginLeft": 30
        }
    }
})