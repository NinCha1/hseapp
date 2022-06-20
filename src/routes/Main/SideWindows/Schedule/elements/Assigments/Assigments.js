import React from 'react';
import commonStyles from '../../../../../../common/styles';
import { View, SectionList, Text, SafeAreaView, TouchableOpacity, Animated, Easing } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import Calendar from '../../../../../../components/Calendar/Calendar';
import styles from './styles';
import Filter from '../../../../../../components/Filter/Filter';
import scheduleAPI from '../../../../../../API/scheduleAPI';
import useApi from '../../../../../../hooks/useApi';
import { AuthContext } from '../../../../../../API/AuthContext';
import { AxiosContext } from '../../../../../../API/AxiosProvider';
import axios from 'axios';
import { connect, useSelector, useDispatch} from 'react-redux';
import CustomModal from '../../../../../../components/CustomModal/CustomModal';
import Spinner from '../../../../../../components/Spinner/Spinner';


export const Assigments = () => {

    const filters = {
        subjCategory: [
            {id: 'all', courseName: 'All'},
            {id: 'hw', courseName: 'Homework'},
            {id: 'cw', courseName: 'Midterm'},
            {id: 'ex', courseName: 'Exam'},
        ],
        selectedItem: 'all',
    }

    const action = useSelector((state) => state)
    const dispatch = useDispatch()

    const state = { scale: new Animated.Value(1), opacity: new Animated.Value(1)}


    const getAssigmentsApi = useApi(scheduleAPI.getAssigments, 'day', 'assignments', 'deadlineId');
    const [filter, setFilter] = useState('all');
    const [filterData, setfilterData] = useState([]);

    function toggleModal () {
        if (action.action == 'openModal') {
            Animated.timing(state.scale, {
                toValue: 0.9,
                duration: 300,
                easing: Easing.in()
              }).start();

            Animated.spring(state.opacity, {
                toValue: 0.5
            }).start();
        }

        if (action.action == 'closeModal') {
            Animated.timing(state.scale, {
              toValue: 1,
              duration: 300,
              easing: Easing.in()
            }).start();
            Animated.spring(state.opacity, {
              toValue: 1
            }).start();
        }

    }


    useEffect(() => {
        getAssigmentsApi.request(1);
    }, []);

    useEffect(() => {
        toggleModal()
    }, [])

    useEffect(() => {
        filterDeadlines();
    }, [filter]);

    function filterDeadlines ()  {
        const newData = JSON.parse(JSON.stringify(getAssigmentsApi.data));
        filtering(newData)
    }
     
    const HandleFilter = (value) => {
        setFilter(value.filter)
    }

    const Item = ({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => dispatch({type: 'OPEN_MODAL'})}>
            <View style={styles.delimeter}/>
            <View style={styles.content}>
                <Text style={styles.subjectName}>{item.subjectName}</Text>
                <Text style={styles.assigmentName}>{item.assigmentName}</Text>
                <View style={styles.infoCont}>
                    <View style={[styles.infoView, {backgroundColor: '#F5F5F5'}]}>
                        <Text style={styles.deadlineTime}>{item.deadlineTime}</Text>
                    </View>
                    <View style={[styles.infoView, {backgroundColor: '#F5F5F5', marginLeft: 10}]}>
                        <Text style={styles.submissionTIme}>{item.sumbisionTIme}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


    function filtering (data) {
        if (filter == 'all') {
            setfilterData(data)
        } else {
            data.map((element) => {
                element.data = element.data.filter(item => {
                    return item.type == filter
                })
            })
            setfilterData(data)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            {getAssigmentsApi.loading ? <Spinner/> : (
                <Animated.View style={[styles.container, {
                    transform: [{ scale: state.scale }],
                    opacity: state.opacity
                  }]}>
                    <SectionList
                        style={{marginLeft: 30}}
                        sections={filterData} 
                        renderItem={Item}
                        renderSectionHeader={({section}) => (
                            <Text style={styles.header}>{section.title}</Text>
                        )} 
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                    <View>
                        <Filter HandleFilter={HandleFilter} filter={filters}/>
                        <Calendar style={styles.components}/>
                    </View>
                </Animated.View>
            )} 
        </SafeAreaView>
    )
}

