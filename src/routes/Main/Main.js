import React, {Component} from 'react';
import {View} from 'react-native';
import SideMenu from '../../components/SideMenu/SideMenu';
import {Schedule} from './SideWindows/Schedule/Schedule';
import styles from './stylesMain';
import { Login } from '../Login/Login';



export default class Main extends Component {
    constructor () {
        super();
    }
    
    state = {screen : Schedule, name: "Schedule"}
    callBackFunction = (screenData, nameScreen) => {
        this.setState({screen: screenData})
        this.setState({name: nameScreen})
    }

    navigateToLogin = () => {
        return (
            <Login/>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <SideMenu style={styles.sideMenu} parentCallback = {this.callBackFunction}  onPress={this.navigateToLogin}/>
                {/* <SideMenuNav screenData = {this.state.screen} nameScreen={this.state.name}/> */}
                <this.state.screen style={styles.show}/>
            </View>
        )
    }
}