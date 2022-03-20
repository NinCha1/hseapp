import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/routes/Login/Login';

export default class App extends Component {
  render() {
    return(
      <Login></Login>
    )
  }
}