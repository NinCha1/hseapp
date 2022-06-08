import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState} from 'react';
const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        accessToken: null,
        refreshToken: null,
        authenticated: null,
    });

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token')
            setAuthState({
                accessToken: null,
                refreshToken: null,
                authenticated: false,
            });
        } catch (error) {
            console.log(`${error.message}`)
        }

    };

    const getAccessToken = () => {
        return authState.accessToken;
    };

    return (
        <Provider
        value={{
            authState,
            getAccessToken,
            setAuthState,
            logout,
        }}>
            {children}
        </Provider>
    );
};

export {AuthContext, AuthProvider}