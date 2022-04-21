import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SideMenu from '../../components/SideMenu/SideMenu';
import SideMenuNav from '../../navigation/SideMenuNav';
import Schedule from './SideWindows/Schedule/Schedule';
import styles from './stylesMain';



export default class Main extends Component {
    
    state = {screen : Schedule, name: "Schedule"}
    callBackFunction = (screenData, nameScreen) => {
        this.setState({screen: screenData})
        this.setState({name: nameScreen})
    }
    render() {
        return(
            <View style={styles.container}>
                <SideMenu style={styles.sideMenu} parentCallback = {this.callBackFunction}/>
                {/* <SideMenuNav screenData = {this.state.screen} nameScreen={this.state.name}/> */}
                <this.state.screen style={styles.show}/>
            </View>
        )
    }
}