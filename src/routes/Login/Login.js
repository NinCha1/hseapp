import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import commonStyles from '../../common/styles';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
// import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import SegmentedControlTab from'react-native-segmented-control-tab';
import SC from '../../components/SegmentedControl/trialSegmentedControl';


export default class Login extends Component{
    constructor(){
        super()
        this.state = {
          selectedIndex: 0,
        };
      }
  
    handleIndexChange = (index) => {
        this.setState({
          ...this.state,
          selectedIndex: index,
        });
    }

    loginBtn = () => {
        this.props.navigation.navigate('Main')
    }
    render() {
        return(
            <View style={commonStyles.container}>
                <View style={styles.container}>
                    <View style={[styles.loginForm, styles.shadowProp]}>

                        <Text style={styles.header}>HSE Connect</Text>
                        {/* <SegmentedControlTab values={['Student', 'Assistant', 'Teacher']} 
                        selectedIndex={this.state.selectedIndex} 
                        onTabPress={this.handleIndexChange}
                        tabStyle={{backgroundColor: '#FFFFFF', borderColor: 'white'}}
                        tabsContainerStyle={{marginVertical: 10, padding: 7, width: 400, height: 50}}
                        tabTextStyle={{fontFamily: 'Inter', fontStyle: 'normal', fontSize: 15, color: 'black'}}
                        activeTabStyle={{backgroundColor: '#FFFFFF', borderEndColor: 'red'}}
                        activeTabTextStyle={{fontFamily: 'Inter', fontStyle: 'normal', fontSize: 15, color: '#1F4EC7'}}
                        // tabBadgeContainterStyle={{color: 'red', borderRadius: 8}}
                        /> */}
                        <View style={{width: '100%', height: 50}}>
                            <SC/>
                        </View>
                
                        <TextInput style={styles.loginInput} placeholder="Email" placeholderTextColor = "rgba(0, 0, 0, 0.5)"/>
                        <TextInput style={styles.loginInput} placeholder="Password" placeholderTextColor = "rgba(0, 0, 0, 0.5)"/>
                        <TouchableOpacity  style={styles.btn}onPress={() => {}}>
                            <Text style={{color: '#1F4EC7'}}>Recover</Text>
                        </TouchableOpacity>
                        <PrimaryButton title='Log in' style={styles.btn} onPress={this.loginBtn}/>
                        <TouchableOpacity style={[styles.btn, {justifyContent: 'center'}]} onPress={() => {}}>
                            <Text style={{color: '#1F4EC7', }}>Can't log in?</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{width: 100, height: 100}}>
                        <TouchableOpacity style={[styles.btn, {justifyContent: 'center', alignSelf: 'center'}]} onPress={() => {}}>
                                <Text style={{color: '#1F4EC7', }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}