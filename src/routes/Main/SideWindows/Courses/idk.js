import React from "react";
import ChatNav from '../../../../navigation/ChatNav'
import { View, Text } from 'react-native';
import styles from "./styles";

export const IDK = () => {
    return (
        <View style= {{flex: 1,
        flexDirection: 'column',
        minHeight: 100,
        backgroundColor: 'white'}}>
            <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Courses 
                    </Text>
            </View>
            <ChatNav/>
        </View>
    )
}