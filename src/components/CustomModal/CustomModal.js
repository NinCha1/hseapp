import React from 'react';
import {View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../common/Colors';
import ModalContent from './ModalContent';


const screenHeight = Dimensions.get('window').height;

class CustomModal extends React.Component {
    state = {
        top: new Animated.Value(screenHeight)
    }

    componentDidMount() {
        this.toggleModal()
    }

    componentDidUpdate() {
        this.toggleModal()
    }

    toggleModal = () => {
        if (this.props.action === 'openModal') {
            Animated.spring(this.state.top, {
              toValue: 0,
            }).start();
          }
        if (this.props.action === 'closeModal') {
            Animated.spring(this.state.top, {
              toValue: screenHeight
            }).start();
        }
    }

    render() {
        return (
            <Animated.View style={{position: 'absolute',
                backgroundColor: Colors.text_tret,
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                top: this.state.top
                }}>
                <Text>
                </Text>
                <View style={{ backgroundColor: 'white', height: '90%', width: 820, padding: 60}}>
                        <TouchableOpacity onPress={this.props.closeModal} style={{height: 30, 
                          width: 50, alignSelf: 'flex-end'}}>
                            <Text style={{color: 'black'}}>Close</Text>
                        </TouchableOpacity>
                        <ModalContent/>
                </View>
            </Animated.View>
        )
    }
}

function mapStateToProps(state) {
    return { action: state.action };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      closeModal: () =>
        dispatch({
          type: 'CLOSE_MODAL'
        })
    };
    }

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
