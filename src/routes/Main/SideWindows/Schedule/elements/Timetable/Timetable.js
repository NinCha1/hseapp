import React from 'react';
import { View, SectionList, Text, SafeAreaView, Image } from 'react-native';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Calendar from '../../../../../../components/Calendar/Calendar';
import styles from './styles';
import useApi from '../../../../../../hooks/useApi';
import scheduleAPI from '../../../../../../API/scheduleAPI';



const Item = ({item}) => (
    <View style={styles.item}>
        <View style={styles.timeCont}>
            <Text style={styles.timeStart}>{item.timeStart}</Text>
            <Text style={styles.timeEnd}>{item.timeEnd}</Text>
        </View>
        <View style={styles.delimeter}/>
        <View style={styles.infoCont}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.subjectName}>{item.subjectName}</Text>
            <Text style={styles.visitType}>{item.visitType}</Text>
            <Image style={styles.icon} source={require('../../../../../../img/online.png')}/>
        </View>
    </View>
);

export const Timetable = () => {
    const getTimetableApi = useApi(scheduleAPI.getTimetables, 'day', 'timeSlot', 'timetableId');

    useEffect(() => {
        getTimetableApi.request(1);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {getTimetableApi.loading ? <ActivityIndicator style={{alignSelf: 'center'}}/> : (
                <View style={styles.container}>
                    <SectionList
                        style={{marginLeft: 30}}
                        sections={getTimetableApi.data}
                        renderItem={Item}
                        renderSectionHeader={({section}) => (
                            <Text style={styles.header}>{section.title}</Text>
                        )} 
                        keyExtractor={(item, index) => index}
                    />
                    <View style={{minWidth: '30%'}}>
                        <Calendar style={styles.components}/>
                    </View>
                </View>
                    )}
        </SafeAreaView>
    )
}
