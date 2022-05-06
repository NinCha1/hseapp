import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Courses from '../../routes/Main/SideWindows/Courses/Courses';
import Grades from '../../routes/Main/SideWindows/Grades/Grades';
import Schedule from '../../routes/Main/SideWindows/Schedule/Schedule';
import {navigateToMenu} from '../../routes/Main/Main'
import styles from './stylesSideMenu';
import Colors from '../../common/Colors';


export default class SideMenu extends Component{

    constructor(props){
        super(props);
    }

    navigateToMenu = () => {
        this.props.onPress?.();
    }

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
                <View style={styles.upper}>
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
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={this.navigateToMenu} style={styles.logout}>
                        <Image source={require('../../img/logout.png')} style={styles.icon}/>
                        <Text style={{color: '#C9241A', fontFamily: 'Inter', fontWeight: '500', fontSize: 16, lineHeight: 19}}>Log out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.logout}>
                        <Image source={require('../../img/Settings.png')} style={styles.icon}/>
                        <Text style={{color: Colors.text_second, fontFamily: 'Inter', fontWeight: '500', fontSize: 16, lineHeight: 19}}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}