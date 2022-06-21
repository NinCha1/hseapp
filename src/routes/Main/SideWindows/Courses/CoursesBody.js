import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TextInput, FlatList, Image, ScrollView} from 'react-native';
import Filter from '../../../../components/Filter/Filter';
import styles from './styles';
import coursesDATA from './coursesDATA';
import MessagesScreen from './elements/Messages/Messages';
import ChatNav from '../../../../navigation/ChatNav'
import { NavigationHelpersContext } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../../../../API/AuthContext';
import { AxiosContext } from '../../../../API/AxiosProvider';
import Spinner from '../../../../components/Spinner/Spinner';

export const CoursesBody = ({navigation}) => {
    const {publicAxios} = useContext(AxiosContext);
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');
    const [courses, setCourses] = useState(null)
    const [formatedData, setFormatedData] = useState([]);
    const [courseInfo, setcourseInfo] = useState(null)

    const yourConfig = {
        headers: {
           Authorization: "Bearer " + authContext.authState.accessToken
        }
    }

    const loadCourses = async () => {
        setStatus('loading');
        try {
            const responseList = await publicAxios.get(`https://hse-backend-test.herokuapp.com/users/courses`, yourConfig);
            processFilter(responseList.data.courses)
        } catch (error) {
            setStatus('error');
        }
    }

    const loadCourseInfo = async () => {
        setStatus('loading');
        try {
            const responseList = await axios.get(`https://hse-backend-test.herokuapp.com/courses/course/?id=${filter}`, yourConfig);
            setcourseInfo(responseList.data)
            setStatus('success')
        } catch (error) {
            setStatus('error')
        }
    }

    useEffect(() => {
        loadCourses();
    }, []);


    const filters = {
        subjCategory: 
            formatedData
        ,
        selectedItem: 1,
    }


    const processFilter = (dict) => {
        const keys = Object.keys(dict);
        keys.sort(function(lhs, rhs){
            return new Date(lhs) - new Date(rhs); 
        })

        const object = {
            id: undefined,
            courseName: undefined
        }

        
        const data = keys.map(key => {
            const obj = Object.create(object)
            obj.id = dict[key].id
            obj.courseName = dict[key].courseName

            return obj
        })
        setFormatedData(data)
    }

    const [filter, setFilter] = useState(1);
    // const [filterData, setfilterData] = useState([]);
    // const [title, setTitle] = useState('Linear Algebra')
    const navigaTo = () => navigation.navigate('Chat')
    // function navigaTo () {
    //     navigation.navigate('Chat', {title: title})
    // }

    const HandleFilter = (value) => {
        setFilter(value.filter)
    }

    useEffect(() => {
        loadCourseInfo()
    },[filter]);

    // const sendData = (titleHeader) => {
    //     parentCallBack(titleHeader)
    // }


    const Item = ({item}) => (
        <View>
            <Text style={styles.headerList}>Chats</Text>
            {/* <MessagesScreen navTo={navigaTo}/> */}
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

    // function filtering (data) {
    //     data = data.filter((item) => {
    //         return item.id == filter.filter
    //     })
    //     setfilterData(data)
    //     data.map((el) => setTitle(el.subjName))
    // }

    if (status === 'loading') {
        return (
            <View style={styles.container}>
                <Spinner/>
            </View>
            )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Courses · {courseInfo.courseName}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>

                    <View style={styles.contentContainer}>
                        {/* <FlatList
                        data={filterData}
                        keyExtractor={(item, index) => index}
                        renderItem={Item}
                        showsVerticalScrollIndicator={false}
                        />  */}
                            <Text style={styles.headerList}>Chats</Text>
                            <View style={{width: '100%', height: 300}}>
                            <MessagesScreen navTo={navigaTo}/>
                            </View>
                            <Text style={styles.headerList}>Course description</Text>
                            <Text style={styles.courseDescription} selectable={true}>{courseInfo.courseDesc}</Text>

                            {/* <Text style={styles.headerList}>Grading Formula</Text> */}

                            {/* <Text style={styles.headerList}>Teaching Staff</Text> */}
                    </View>
                    <View style={styles.rightContainer}>
                        <Filter filter={filters} HandleFilter={HandleFilter}/>
                    </View>
                </View>

            </View>

        )
                    }
}