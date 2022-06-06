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
import * as Keychain from 'react-native-keychain';


export const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);

    const onLogin = async () => {
        try {
            const response = await publicAxios.post('/auth/login', {
                email, 
                password,
                role,
            });

            const {accessToken, refreshToken} = response.data;


            authContext.setAuthState({
                accessToken,
                refreshToken,
                authenticated: true,
            });

            await Keychain.setGenericPassword(
                'token',
                JSON.stringify({
                    accessToken,
                    refreshToken,
                }),
            );

        } catch (error) {
            Alert.alert('Login Failed', error.response.data.message);
        }
    };

    const handleRole = (SCdata) => {
        setRole(SCdata)
        console.log(SCdata)
    }

    const loginBtn = () => {
        navigation.navigate('Main')
    }
        return(
            <View style={commonStyles.container}>
                <View style={styles.container}>
                    <View style={[styles.loginForm, styles.shadowProp]}>

                        <Text style={styles.header}>HSE Connect</Text>
                        <View style={{width: '100%', height: 50}}>
                            <SC parentCallback={handleRole}/>
                        </View>
                
                        <TextInput style={styles.loginInput} placeholder="Email" placeholderTextColor = "rgba(0, 0, 0, 0.5)" onChangeText={text => setEmail(text)} value={email}/>
                        <TextInput style={styles.loginInput} placeholder="Password" placeholderTextColor = "rgba(0, 0, 0, 0.5)" onChangeText={text => setPassword(text)} value={password}/>
        
                        <PrimaryButton title='Log in' style={styles.btn} onPress={() => onLogin()}/>

                        <TouchableOpacity style={[styles.btn, {justifyContent: 'center'}]} onPress={() => {}}>
                            <Text style={{color: '#1F4EC7', }}>Can't log in?</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
}