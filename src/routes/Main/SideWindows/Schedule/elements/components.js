import React from 'react';
import {View, Text, Image} from 'react-native';

const ItemTimetable = ({item, styles}) => (
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

export default {ItemTimetable};