import React from 'react';
import {View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Animated } from 'react-native';
import { connect } from 'react-redux';


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
              toValue: 174
            }).start();
          }
        if (this.props.action === 'closeModal') {
            Animated.spring(this.state.top, {
              toValue: screenHeight
            }).start();
        }
    }

    // closeModal = () => {
    //     Animated.spring(this.state.top, {
    //       toValue: screenHeight
    //     }).start();
    // };

    render() {
        return (
            <Animated.View style={{position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.4)',
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                top: this.state.top
                }}>
                <Text>
                </Text>
                <View style={{ backgroundColor: '#eaeaea', height: '80%', width: '80%', }}>
                        <TouchableOpacity onPress={this.props.closeMenu}>
                            <Text style={{color: 'black'}}>Close</Text>
                        </TouchableOpacity>
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
