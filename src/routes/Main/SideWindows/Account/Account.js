import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { AxiosContext } from '../../../../API/AxiosProvider';
import { AuthContext } from '../../../../API/AuthContext';
import axios from 'axios';
import Spinner from '../../../../components/Spinner/Spinner';
import styles from './styles';

export const  Account = () => {
    const axiosContext = useContext(AxiosContext);
    const authContext = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('loading');
    const yourConfig = {
        headers: {
           Authorization: "Bearer " + authContext.authState.accessToken
        }
     }

    const loadData = async () => {
        try {
            const response = await axios.get('https://hse-backend-test.herokuapp.com/users/profile', yourConfig);
            setData(response.data)
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    if (status === 'loading') {
        return <Spinner/>
    } else {
        return (
            <ScrollView>
                <View style={{flexDirection: 'row', padding: 40}}>
                    <View style={{marginRight: 30}}>
                        <View style={{borderRadius: 100, backgroundColor: 'gray', width: 160, height: 160}}/>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.currentRole}>{data.currentRole}</Text>
                        <Text style={styles.name}>{data.name} {data.surname}</Text>
                        <Text style={styles.header}>Corporate e-mail</Text>
                        <Text selectable={true} style={styles.content}>{data.email}</Text>
                        <Text style={styles.header}>Faculty</Text>
                        <Text style={styles.content}>{data.faculty}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}