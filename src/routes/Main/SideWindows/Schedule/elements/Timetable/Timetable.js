import React, {Component} from 'react';
import commonStyles from '../../../../../../common/styles';
import { View, SectionList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
// import styles from './styles';


function renameKey( obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}

export const Timetable = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const Item = ({item}) => (
        <View style={styles.item}>
            <Text>{item.timeStart}</Text>
            <Text>{item.timeEnd}</Text>
            <Text>{item.type}</Text>
            <Text>{item.subjectName}</Text>
            <Text>{item.visitType}</Text>
        </View>
    );

    const getSchedule = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/SKYMAN44/FAKEJSONSERVER/timetable/1/schedule');
            const json = await response.json();
            for(var i = 0; i < json.length; i++) {
                delete json[i].timetableId
            }
            const arr = JSON.parse(JSON.stringify(json));
            arr.forEach(element => {
                renameKey(element, 'day','title')
                renameKey(element, 'timeSlot', 'data')
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
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                 <SectionList
                    sections={data}
                    renderItem={Item}
                    renderSectionHeader={({section}) => (
                        <Text style={styles.header}>{section.title}</Text>
                    )} 
                    keyExtractor={(item, index) => index}
                /> 
            )}
            <Text>Blya</Text>
        </SafeAreaView>
    )
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
});
