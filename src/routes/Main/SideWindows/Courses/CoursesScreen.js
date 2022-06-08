import React, { useState } from "react";
import ChatNav from '../../../../navigation/ChatNav'
import { View, Text } from 'react-native';
import styles from "./styles";


export const CoursesScreen = () => {

    const [title, setTitle] = useState('Linear Algebra');

    const HandleTitle = (value) => {
        setTitle(value)
    }

    return (
        <View style= {{flex: 1,
        flexDirection: 'column',
        minHeight: 100,
        backgroundColor: 'white'}}>
            <ChatNav parentCallBack={HandleTitle}/>
        </View>
    )
}