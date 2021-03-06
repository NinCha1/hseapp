import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './src/API/AuthContext';
import { Login } from './src/routes/Login/Login';
import Main from './src/routes/Main/Main';
import Spinner from './src/components/Spinner/Spinner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import { createStore } from 'redux'

const store = createStore(reducer);

export const App = () => {
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    const loadJWT = useCallback(async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        const jwt = JSON.parse(value);

        authContext.setAuthState({
          accessToken: jwt.accessToken || null,
          refreshToken: jwt.refreshToken || null,
          authenticated: jwt.accessToken !== null,
        });

        setStatus('success');
      } catch (error) {
        setStatus('error')
        console.log(`AsyncStorage Error: ${error.message}`);
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
          <Provider store={store}>
            <Main/>
          </Provider>
        </NavigationContainer>
      )
    }
}