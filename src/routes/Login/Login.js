import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './styles';
import commonStyles from '../../common/styles';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import SC from '../../components/SegmentedControl/trialSegmentedControl';
import { AuthContext } from '../../API/AuthContext';
import { AxiosContext } from '../../API/AxiosProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');

    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    const onLogin = async () => {
        try {
            const response = await publicAxios.post('/auth/login', {
                email, 
                password,
                role,
            });

            const accessToken = response.data.token
            const refreshToken = response.data.token

            authContext.setAuthState({
                accessToken: response.data.token,
                refreshToken: response.data.token,
                authenticated: true,
            });

            await AsyncStorage.setItem(
                'token',
                JSON.stringify({
                    accessToken,
                    refreshToken,
                })
            );

        } catch (error) {
            Alert.alert('Login Failed', error.response.data.message);
        }
    };


    const handleRole = (SCdata) => {
        setRole(SCdata)
    }

        return(
            <View style={commonStyles.container}>
                <View style={styles.container}>
                    <View style={[styles.loginForm, styles.shadowProp]}>

                        <Text style={styles.header}>HSE Connect</Text>
                        <View style={{width: '100%', height: 50}}>
                            <SC parentCallback={handleRole}/>
                        </View>
                
                        <TextInput 
                            style={styles.loginInput} 
                            placeholder="Email" 
                            placeholderTextColor = "rgba(0, 0, 0, 0.5)" 
                            onChangeText={text => setEmail(text)} 
                            value={email}
                        />

                        <TextInput 
                            style={styles.loginInput} 
                            placeholder="Password" 
                            placeholderTextColor = "rgba(0, 0, 0, 0.5)" 
                            onChangeText={text => setPassword(text)} 
                            value={password} 
                            secureTextEntry
                        />
        
                        <PrimaryButton title='Log in' style={styles.btn} onPress={() => onLogin()}/>

                        <TouchableOpacity style={[styles.btn, {justifyContent: 'center'}]} onPress={() => {}}>
                            <Text style={{color: '#1F4EC7', }}>Can't log in?</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
}