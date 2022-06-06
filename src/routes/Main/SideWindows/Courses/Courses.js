import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import Filter from '../../../../components/Filter/Filter';
import styles from './styles';
import coursesDATA from './coursesDATA';
import MessagesScreen from './elements/Messages/Messages';
import ChatNav from '../../../../navigation/ChatNav'
import { NavigationHelpersContext } from '@react-navigation/native';

export const Courses = ({navigation}) => {
    const filters = {
        subjCategory: [
            {id: 'la', text: 'Linear Algebra'},
            {id: 'ts', text: 'Time Series'},
            {id: 'ecm', text: 'Econometrics'},
            {id: 'de', text: 'Differential Equations'},
            {id: 'db', text: 'Databases'},
            {id: 'ml1', text: 'Machine Learning 1'},
        ],
        selectedItem: 'la',
    }

    const [filter, setFilter] = useState([]);
    const [filterData, setfilterData] = useState([]);
    const [title, setTitle] = useState('Linear Algebra')
    // const navigaTo = () => navigation.navigate('Chat')
    function navigaTo () {
        navigation.navigate('Chat')
    }

    const HandleFilter = (value) => {
        setFilter(value)
    }

    useEffect(() => {
        filterCourses();
    },[filter]);

    function filterCourses () {
        const newData = JSON.parse(JSON.stringify(coursesDATA.DATA));
        filtering(newData)
    }


    const Item = ({item}) => (
        <View>
            <MessagesScreen navTo={navigaTo}/>
            <Text style={styles.headerList}>Course description</Text>
            <Text style={styles.courseDescription}>{item.courseDesc}</Text>

            <Text style={styles.headerList}>Grading Formula</Text>

            <View style={styles.gradesContainer}>
                <Text style={styles.gradeFormula}>{item.gradeFormula}</Text>
            </View>

            <Text style={styles.headerList}>Teaching Staff</Text>
            <View style={styles.teachersContainer}>
            {
                item.teachers.map((element) => {
                    return (
                    <View style={{padding: 12, alignItems: 'center', flexDirection: 'row'}}>
                        <View>
                            <Image style={styles.icon} source={require('../../../../../assets/img/profile.png')}/>
                        </View>
                        <View>
                            <Text style={styles.teacherName}>{element.name}</Text>
                            <Text style={styles.teacherInfo}>{element.role} · {element.group}</Text>
                        </View>
                    </View>
                    
                    )
                })
            }
            </View>
        </View>
    )

    function filtering (data) {
        data = data.filter((item) => {
            return item.id == filter.filter
        })
        setfilterData(data)
        data.map((el) => setTitle(el.subjName))
    }


        return (
            <View style={styles.container}>
                {/* <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Courses · {title}
                    </Text>
                </View> */}
                <View style={{flexDirection: 'row'}}>

                    <View style={styles.contentContainer}>
                        <FlatList
                        data={filterData}
                        ListHeaderComponent={
                            <View>
                                <TextInput 
                                placeholder="Search" 
                                placeholderTextColor = "rgba(0, 0, 0, 0.5)" 
                                style={styles.inputField}
                                />
                            </View>
                        }
                        keyExtractor={(item, index) => index}
                        renderItem={Item}
                        showsVerticalScrollIndicator={false}
                        /> 
                    </View>

                    <View style={styles.rightContainer}>
                        <Filter filter={filters} HandleFilter={HandleFilter}/>
                    </View>
                </View>
            </View>
        )
}