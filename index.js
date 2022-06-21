/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {AuthProvider} from './src/API/AuthContext'
import {AxiosProvider} from './src/API/AxiosProvider'
import React from 'react'
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

const Root = () => {
    return (
        <AuthProvider>
            <AxiosProvider>
                <App/>
            </AxiosProvider>
        </AuthProvider>
    )
}

AppRegistry.registerComponent(appName, () => Root);
