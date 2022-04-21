import React, {Component} from 'react';
import commonStyles from '../../../../../../common/styles';
import { View, SectionList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
// import styles from './styles';


const Item = ({day}) => {
    <View style={styles.item}>
        <Text style={styles.title}>{day}</Text>
    </View>
}

export const Timetable = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getSchedule = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/SKYMAN44/FAKEJSONSERVER/timetable/1/schedule');
            const json = await response.json();
            setData(json);
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
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Item day={item.timeSlot}/>}
                    renderSectionHeader={({section: {day}}) => (
                        <Text style={styles.header}>{day}</Text>
                    )}
                    
                />
            )}
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
