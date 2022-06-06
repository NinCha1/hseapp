import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';
import { AuthContext } from './src/API/AuthContext';
import * as Keychain from 'react-native-keychain';
import { Login } from './src/routes/Login/Login';
import Main from './src/routes/Main/Main';
import Spinner from './src/components/Spinner/Spinner';

export const App = () => {
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    const loadJWT = useCallback(async () => {
      try {
        const value = await Keychain.getGenericPassword();
        const jwt = JSON.parse(value.password);

        authContext.setAuthState({
          accessToken: jwt.accessToken || null,
          refreshToken: jwt.refreshToken || null,
          authenticated: jwt.accessToken !== null,
        });

        setStatus('success');
      } catch (error) {
        setStatus('error')
        console.log(`Keychain Error: ${error.message}`);
        authContext.setAuthState({
          accessToken: null,
          refreshToken: 'null',
          authenticated: false,
        });
      }
    }, []);

    useEffect(() => {
      loadJWT();
    }, [loadJWT]);
    console.log(authContext?.authState?.authenticated)

    if (status === 'loading') {
      return <Spinner/>
    }

    if (authContext?.authState?.authenticated === false) {
      return (
        <Login/>
      )
    } else {
      return (
        <NavigationContainer>
          <Main/>
        </NavigationContainer>
      )
    }
}