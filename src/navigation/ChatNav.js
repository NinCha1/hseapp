import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CoursesBody } from '../routes/Main/SideWindows/Courses/CoursesBody';
import  ChatScreen  from '../routes/Main/SideWindows/Courses/elements/Chats/Chats'


const Stack = createStackNavigator();

export default class ChatNav extends Component{

    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name="Courses" component={CoursesBody} options={{ headerShown: false}}/>
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                />
            </Stack.Navigator>
        )
    }
}