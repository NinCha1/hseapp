import React, {Component} from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {Timetable} from "./elements/Timetable/Timetable";
import {Assigments} from "./elements/Assigments/Assigments";
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

export const Schedule = () => {
        return (
            <Tab.Navigator
            tabBarOptions={styles.tab}>
                <Tab.Screen name="Timetable" component={Timetable}
                options={{
                }}/>
                <Tab.Screen name="Assigments" component={Assigments}/>
            </Tab.Navigator>
        )
}