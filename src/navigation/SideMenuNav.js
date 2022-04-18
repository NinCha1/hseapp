import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class SideMenuNav extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name={this.props.nameScreen} component={this.props.screenData} options={{ headerShown: false}}/>
            </Stack.Navigator>
        )
    }
}