import React, {Component} from 'react';
import commonStyles from '../../../../../../common/styles';
import { View, SectionList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Calendar from '../../../../../../components/Calendar/Calendar';
import styles from './styles';
import Filter from '../../../../../../components/Filter/Filter';


function renameKey( obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}


export const Assigments = () => {
    
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    // const [filterData, setfilterData] = useState([]);
    // const [filteredData, setfilteredData] = useState(data);

    const HandleFilter = (value) => {
        setFilter(value)
    }


    
    const Item = ({item}) => (
        <View style={styles.item}>
            <View style={styles.delimeter}/>
            <View>
                <Text style={styles.subjectName}>{item.subjectName}</Text>
                <Text style={styles.assigmentName}>{item.assigmentName}</Text>
                <View style={styles.infoCont}>
                    <View style={[styles.infoView, {backgroundColor: '#F5F5F5'}]}><Text style={styles.deadlineTime}>{item.deadlineTime}</Text></View>
                    <View style={[styles.infoView, {backgroundColor: '#F5F5F5', marginLeft: 10}]}><Text style={styles.submissionTIme}>{item.sumbisionTIme}</Text></View>
                </View>
            </View>
        </View>
    );

    const getSchedule = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/SKYMAN44/FAKEJSONSERVER/deadline/1/deadlines');
            const json = await response.json();
            for(var i = 0; i < json.length; i++) {
                delete json[i].deadlineId
            }
            const arr = JSON.parse(JSON.stringify(json));
            arr.forEach(element => {
                renameKey(element, 'day','title')
                renameKey(element, 'assignments', 'data')
            });
            const updatedJson = JSON.stringify(arr);

            setData(arr);
        } catch(error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSchedule();
        filtering(newData);
    }, []);

    function filtering (data) {
        data.map((element) => {
        element.data = element.data.filter(item => {return item.type == filter.filter})
        console.log(data)
        return  JSON.parse(JSON.stringify(data));
    })}


    const newData = JSON.parse(JSON.stringify(data));
    function whichData1 (filter) {
        switch(filter.filter) {
            case 'all' : return JSON.parse(JSON.stringify(data));
            case 'cw' :  return filtering(newData);
            case 'hw' :  return filtering(newData);
            case 'ex' :  return filtering(newData);
        }
    }

    // if (filter. == )
    filtering(newData)
    // console.log(whichData('all'))
    const allSelected = (filter.filter == 'all');
    // console.log(allSelected)
    // var returnValue = this.filtering(newData)
    // console.log(returnValue)
    const whichData = allSelected ? JSON.parse(JSON.stringify(data)) : JSON.parse(JSON.stringify(data))
    // console.log(whichData('all'))
    // const check = {filtering}
    // console.log(whichData1('all'))
    // const newData = data
    // filtering(newData)

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                 <SectionList
                    sections={whichData}
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

