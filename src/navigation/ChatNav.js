import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Courses } from '../routes/Main/SideWindows/Courses/Courses';
import  ChatScreen  from '../routes/Main/SideWindows/Courses/elements/Chats/Chats'
import MessagesScreen from '../routes/Main/SideWindows/Courses/elements/Messages/Messages';
import { RecoilRoot } from 'recoil';


const Stack = createStackNavigator();

export default class ChatNav extends Component{
    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name="Courses" component={Courses} options={{ headerShown: false}}/>
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                />
            </Stack.Navigator>
        )
    }
}