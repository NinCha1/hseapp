import React, {Component} from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Timetable from "./elements/Timetable/Timetable";
import Assigments from "./elements/Assigments/Assigments";

const Tab = createMaterialTopTabNavigator();

export default class Schedule extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Timetable" component={Timetable}/>
                <Tab.Screen name="Assigments" component={Assigments}/>
            </Tab.Navigator>
        )
    }
}