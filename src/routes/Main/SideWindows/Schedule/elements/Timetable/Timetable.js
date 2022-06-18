import React, { useContext, useState } from 'react';
import { View, SectionList, Text, SafeAreaView, Image, Button } from 'react-native';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Calendar from '../../../../../../components/Calendar/Calendar';
import styles from './styles';
import useApi from '../../../../../../hooks/useApi';
import scheduleAPI from '../../../../../../API/scheduleAPI';
import Spinner from '../../../../../../components/Spinner/Spinner'
import { AuthContext } from '../../../../../../API/AuthContext';
import { AxiosContext } from '../../../../../../API/AxiosProvider';
import axios from 'axios';

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
            <Image style={styles.icon} source={require('../../../../../../../assets/img/online.png')}/>
        </View>
    </View>
);

export const Timetable = () => {
    const axiosContext = useContext(AxiosContext);
    const authContext = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('idle');

    const loadData = async () => {
        setStatus('loading');
        try {
            const response = await axios.get('https://hse-backend-test.herokuapp.com/schedule');
            console.log(response)
            setData(response.data)
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    }

    if (status === 'loading') {
        return <Spinner/>
    }

    return (
        <View>
            <Text>ДАА</Text>
            <Button title="Blya" onPress={loadData}/>
        </View>
    )
    // const getTimetableApi = useApi(scheduleAPI.getTimetables);

    // console.log(getTimetableApi)

    // useEffect(() => {
    //     getTimetableApi.request();
    // }, []);

    // return (
        // <SafeAreaView style={styles.container}>
        //     {getTimetableApi.loading ? <Spinner/> : (
        //         <View style={styles.container}>
        //             <SectionList
        //                 style={{marginLeft: 30}}
        //                 sections={getTimetableApi.data}
        //                 renderItem={Item}
        //                 renderSectionHeader={({section}) => (
        //                     <Text style={styles.header}>{section.title}</Text>
        //                 )} 
        //                 keyExtractor={(item, index) => index.toString()}
        //                 showsVerticalScrollIndicator={false}
        //             />
        //             <View style={{minWidth: '30%'}}>
        //                 {/* <Calendar style={styles.components}/> */}
        //             </View>
        //         </View>
        //             )}
        // </SafeAreaView>
        // <View></View>
    // )
}
