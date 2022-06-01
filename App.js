import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';
import MessagesScreen from './src/routes/Main/SideWindows/Courses/elements/Messages/Messages';
import ChatNav from './src/navigation/ChatNav';
import ChatScreen from './src/routes/Main/SideWindows/Courses/elements/Chats/Chats';
import { Courses } from './src/routes/Main/SideWindows/Courses/Courses';
import {IDK} from './src/routes/Main/SideWindows/Courses/idk';
export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
      // <Courses/>
    )
  }
}