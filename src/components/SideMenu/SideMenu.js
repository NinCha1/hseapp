import React, {Component, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, TouchableHighlight} from 'react-native';
import { CoursesScreen } from '../../routes/Main/SideWindows/Courses/CoursesScreen';
import {Grades} from '../../routes/Main/SideWindows/Grades/Grades';
import {Schedule} from '../../routes/Main/SideWindows/Schedule/Schedule';
import styles from './stylesSideMenu';
import Colors from '../../common/Colors';
import { AuthContext } from '../../API/AuthContext';
import { Account } from '../../routes/Main/SideWindows/Account/Account';
export default class SideMenu extends Component{

    static contextType = AuthContext

    constructor(props){
        super(props);

        this.state = {
            subjCategory: [
                {id: 'sc', text: 'Schedule', imagePress:require('../../../assets/img/Schedule.png'), imageOff: require('../../../assets/img/ScheduleOff.png'), func: this.scheduleBtn},
                {id: 'cou', text: 'Courses', imagePress: require('../../../assets/img/Courses.png'), imageOff: require('../../../assets/img/CoursesOff.png'), func: this.coursesBtn},
                {id: 'gr', text: 'Grades', imagePress: require('../../../assets/img/Grades.png'), imageOff: require('../../../assets/img/GradesOff.png'), func: this.gradesBtn},
            ],
            selectedItem: 'sc',
        }
    }

    _choosed(selectedItem) {
        this.setState({selectedItem});
    }

    _renderList = ({item}) => {
        const isSelected = (this.state.selectedItem === item.id);
        const backgroundColor = isSelected ? Colors.loginBack : Colors.addBack;
        const colortext = isSelected ? Colors.primary : Colors.text_second;
        const image = isSelected ? item.imagePress : item.imageOff;

        return (
            <TouchableOpacity
                onPress={() => {this._choosed(item.id); item.func()}}
            >
                <View style={{padding: 2, flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                    <View style={[styles.button, {backgroundColor}]}>
                        <View style={styles.icon}>
                            <Image source={image}/>
                        </View>
                        <Text style={[styles.textButton,{color: colortext}]}>{item.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    scheduleBtn = () => {
        this.props.parentCallback(Schedule, "Schedule");
    }
    coursesBtn = () => {
        this.props.parentCallback(CoursesScreen, "Courses");
    }
    gradesBtn = () => {
        this.props.parentCallback(Grades, "Grades");
    }

    accountBtn = () => {
        this.props.parentCallback(Account, "Account");
    }

    loginOut = () => {
        this.context.logout()
    }

    render() {

        return(
            <View style={styles.tab}>
                <View style={styles.upper}>
                    <FlatList
                        data={this.state.subjCategory}
                        renderItem={this._renderList}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={this.loginOut} style={styles.logout}>
                        <View style={styles.icon}>
                            <Image source={require('../../../assets/img/logout.png')}/>
                        </View>
                        <Text style={{color: '#C9241A', fontFamily: 'Inter', fontWeight: '500', fontSize: 16, lineHeight: 19}}>Log out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.accountBtn} style={styles.logout}>
                        <View style={styles.icon}> 
                            <Image source={require('../../../assets/img/Settings.png')}/>
                        </View>
                         <Text style={styles.account}>Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}