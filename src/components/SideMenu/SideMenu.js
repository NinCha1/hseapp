import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Courses from '../../routes/Main/SideWindows/Courses/Courses';
import Grades from '../../routes/Main/SideWindows/Grades/Grades';
import Schedule from '../../routes/Main/SideWindows/Schedule/Schedule';
import styles from './stylesSideMenu';


export default class SideMenu extends Component{

    scheduleBtn = () => {
        this.props.parentCallback(Schedule, "Schedule");
    }
    coursesBtn = () => {
        this.props.parentCallback(Courses, "Courses");
    }
    gradesBtn = () => {
        this.props.parentCallback(Grades, "Grades");
    }

    render() {
        return(
            <View style={styles.tab}>
                <TouchableOpacity onPress={this.scheduleBtn} style={styles.button}>
                    <Image source={require('../../img/Schedule.png')} style={styles.icon}/>
                    <Text style={styles.textButton}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.coursesBtn} style={styles.button}>
                    <Image source={require('../../img/Courses.png')} style={styles.icon}/>
                    <Text style={styles.textButton}>Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gradesBtn} style={styles.button}>
                    <Image source={require('../../img/Grades.png')} style={styles.icon}/>
                    <Text style={styles.textButton}>Grades</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text>Log out</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}