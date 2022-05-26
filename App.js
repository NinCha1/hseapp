import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';
import Calendar from './src/components/Calendar/Calendar';
import SideMenu from './src/components/SideMenu/SideMenu';
import SC from './src/components/SegmentedControl/trialSegmentedControl';
export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>

    )
  }
}