import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

export default class SC extends Component{ 
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree: 0,
        translateX: new Animated.Value(0),
    }


    handleSlide = type => {
        let { active, xTabOne, xTabTwo, xTabThree, translateX} = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 50,
            useNativeDriver: true
        }).start()
    }
    render() {
        const sendData = (role) => {
            this.props.parentCallback(role)
        }

        let {xTabOne, xTabTwo, xTabThree, translateX, active} = this.state;

        return (
            <View style={{flex: 1}}>
                <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <View 
                    style={{
                        flexDirection: 'row', 
                        position: 'relative',
                        height: 36
                        }}>
                        <Animated.View style={{position: 'absolute', width: '33.3%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(31, 78, 199, 0.15)', borderRadius: 4,  transform: [{
                            translateX
                        }]}}/>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center',  borderTopRightRadius: 0, borderBottomRightRadius: 0,  borderRadius: 0, 
                       }}
                        onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x})}
                        onPress={() => {this.setState({active: 0}, () => this.handleSlide(xTabOne)); sendData('STUDENT')}}
                        >
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Student</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         style={{flex: 1, justifyContent: 'center', alignItems: 'center',  borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0,}}
                         onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x})}
                         onPress={() => {this.setState({active: 1}, () => this.handleSlide(xTabTwo)); sendData('ASSISTANT')}}
                        >
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Assistant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         style={{flex: 1, justifyContent: 'center', alignItems: 'center',  borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0,  borderRadius: 4}}
                         onLayout={event => this.setState({xTabThree: event.nativeEvent.layout.x})}
                         onPress={() => {this.setState({active: 2}, () => this.handleSlide(xTabThree)); sendData('PROFESSOR')}}
                        >
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Professor</Text>
                        </TouchableOpacity>
                    </View>

                </View>
             </View>
        )
    }
}