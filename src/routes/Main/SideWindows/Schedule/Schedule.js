import React, {Component} from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Timetable} from "./elements/Timetable/Timetable";
import {Assigments} from "./elements/Assigments/Assigments";

const Tab = createMaterialTopTabNavigator();

export default class Schedule extends Component {
    render() {
        return (
            <Tab.Navigator
            tabBarOptions={{
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
            }}>
                <Tab.Screen name="Timetable" component={Timetable}
                options={{
                }}/>
                <Tab.Screen name="Assigments" component={Assigments}/>
            </Tab.Navigator>
        )
    }
}