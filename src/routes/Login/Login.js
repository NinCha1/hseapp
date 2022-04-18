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
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';


export default class Login extends Component{
    loginBtn = () => {
        this.props.navigation.navigate('Main')
    }
    render() {
        return(
            <View style={commonStyles.container}>
                <View style={styles.container}>
                    <View style={styles.loginForm}>
                        <Text style={styles.header}>HSE Connect</Text>
                        <SegmentedControl tabs={['Student', 'Assistant', 'Teacher']} onChange={() => {}} paddingVertical={5}/>
                        <TextInput style={styles.loginInput} placeholder="Email" placeholderTextColor = "rgba(0, 0, 0, 0.5)"/>
                        <TextInput style={styles.loginInput} placeholder="Password" placeholderTextColor = "rgba(0, 0, 0, 0.5)"/>
                        <PrimaryButton title='Log in' style={styles.btn} onPress={this.loginBtn}/>
                        <TouchableOpacity style={styles.btn} onPress={() => {}}>
                            <Text>Can't log in?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}