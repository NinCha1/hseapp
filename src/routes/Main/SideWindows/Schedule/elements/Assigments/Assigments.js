import React, {Component} from 'react';
import commonStyles from '../../../../../../common/styles';
import { View, SectionList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Calendar from '../../../../../../components/Calendar/Calendar';
import styles from './styles';
import Filter from '../../../../../../components/Filter/Filter';
import scheduleAPI from '../../../../../../API/scheduleAPI';
import useApi from '../../../../../../hooks/useApi';

export const Assigments = () => {
    const getAssigmentsApi = useApi(scheduleAPI.getAssigments, 'day', 'assignments', 'deadlineId');
    const [filter, setFilter] = useState('all');
    const [filterData, setfilterData] = useState([]);

    useEffect(() => {
        getAssigmentsApi.request(1);
    }, []);


    // useEffect(() => {
    //     filterDeadlines()
    // }, );

    function filterDeadlines ()  {
        const newData = JSON.parse(JSON.stringify(getAssigmentsApi.data));
        filtering(newData)
    }
     
    const HandleFilter = (value) => {
        setFilter(value)
    }

    const Item = ({item}) => (
        <View style={styles.item}>
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
        </View>
    );


    function filtering (data) {
        if (filter.filter == 'all') {
            setfilterData(data)
        } else {
            data.map((element) => {
                element.data = element.data.filter(item => {
                    return item.type == filter.filter
                })
            })
            setfilterData(data)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {getAssigmentsApi.loading ? <ActivityIndicator/> : (
                 <SectionList
                    style={{marginLeft: 30}}
                    sections={getAssigmentsApi.data} 
                    renderItem={Item}
                    renderSectionHeader={({section}) => (
                        <Text style={styles.header}>{section.title}</Text>
                    )} 
                    keyExtractor={(item, index) => index}
                />
            )}
            <View>
                <Filter HandleFilter={HandleFilter}/>
                <Calendar style={styles.components}/>
            </View>
        </SafeAreaView>
    )
}

