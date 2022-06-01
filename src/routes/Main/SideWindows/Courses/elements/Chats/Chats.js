import React, {useState, useEffect, useCallback} from 'react';
import {View, Scroll, Text, Button, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRooms, useCurrentRoomId } from '../../../../../../API/store';
import RoomDetails from '../../../../../../components/RoomDetails';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Иуп)',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'HSE',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 2,
        text: '(',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Nina',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => 
    GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...prosp}>
        <View>
          <MaterialCommunityIcons
          name="send-circle"
          style={{marginBottom: 5, marginRight: 5}}
          size={32}
          color="#2e64e5"
          />
        </View>

      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#2e64e5',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        }
      }}
      />
    );
  };

  const scrollToBottomComponent = ()  => {
    return (
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    )
  }

  return (
    // <GiftedChat
    //   messages={messages}
    //   onSend={(messages) => onSend(messages)}
    //   user={{
    //     _id: 1,
    //   }}
    //   renderBubble={renderBubble}
    //   alwaysShowSend
    //   renderSend={renderSend}
    //   scrollToBottomComponent={scrollToBottomComponent}
    // />
    <View>
      <Text style={{color: 'black'}}>Blya</Text>
    </View>
  );
};

export default ChatScreen;