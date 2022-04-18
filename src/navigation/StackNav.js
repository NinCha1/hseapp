import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../routes/Login/Login'
import Main from '../routes/Main/Main'
const Stack = createStackNavigator();

export default class StackNav extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false}}/>
            </Stack.Navigator>
        )
    }
}