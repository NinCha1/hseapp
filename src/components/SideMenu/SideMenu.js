import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, TouchableHighlight} from 'react-native';
import Courses from '../../routes/Main/SideWindows/Courses/Courses';
import Grades from '../../routes/Main/SideWindows/Grades/Grades';
import Schedule from '../../routes/Main/SideWindows/Schedule/Schedule';
import {navigateToMenu} from '../../routes/Main/Main'
import styles from './stylesSideMenu';
import Colors from '../../common/Colors';


export default class SideMenu extends Component{

    constructor(props){
        super(props);

        this.state = {
            subjCategory: [
                {id: 'sc', text: 'Schedule', imagePress:require('../../img/Schedule.png'), imageOff: require('../../img/ScheduleOff.png'), func: this.scheduleBtn},
                {id: 'cou', text: 'Courses', imagePress: require('../../img/Courses.png'), imageOff: require('../../img/CoursesOff.png'), func: this.coursesBtn},
                {id: 'gr', text: 'Grades', imagePress: require('../../img/Grades.png'), imageOff: require('../../img/GradesOff.png'), func: this.gradesBtn},
            ],
            selectedItem: null,
        }
    }

    _choosed(selectedItem) {
        this.setState({selectedItem});
    }

    _renderList = ({item}) => {
        const isSelected = (this.state.selectedItem === item.id);
        const backgroundColor = isSelected ? Colors.loginBack : Colors.addBack;
        const colortext = isSelected ? Colors.primary : Colors.text_prim;
        const image = isSelected ? item.imagePress : item.imageOff;

        return (
            <TouchableOpacity
                onPress={() => {this._choosed(item.id); item.func()}}
            >
                <View style={{padding: 2, flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                    <View style={[styles.button, {backgroundColor}]}>
                        <Image source={image} style={styles.icon}/>
                        <Text style={[styles.textButton,{color: colortext}]}>{item.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
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
                    <FlatList
                        data={this.state.subjCategory}
                        renderItem={this._renderList}
                        keyExtractor={(item, index) => item}
                    />
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