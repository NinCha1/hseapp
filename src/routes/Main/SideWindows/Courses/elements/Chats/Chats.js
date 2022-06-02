import React, {useState, useEffect, useCallback} from 'react';
import {View, Scroll, Text, Button, StyleSheet, TextInput, TouchableHighlight, FlatList, TouchableOpacity} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRooms, useCurrentRoomId } from '../../../../../../API/store';
import RoomDetails from '../../../../../../components/RoomDetails';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../../../common/Colors';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '',
      userName: 'Nina',
      createdAt: new Date().getHours() + ':',
    }
  ]);
  const [typing, setTyping] = useState('');

  const sendMessage = () => {
    const message = typing;

    messages.push(
      {
        id: 1,
        text: message,
        userName: 'Nina',
        createdAt: new Date().getHours() + ':' + new Date().getMinutes(),
      }
    )

    setTyping('')
  }
  
  console.log(messages)

  useEffect(() => {
    setMessages([
      {
        id: 3,
        text: 'joe mama',
        createdAt: '14:40',
        userName: 'Zamkov',
      },
      {
        id: 2,
        text: 'Иуп)',
        createdAt: '15:40',
        userName: 'HSE',
      },

      {
        id: 1,
        text: '(',
        createdAt: '14:40',
        userName: 'Nina'
      },
    ]);
  }, []);


  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 40}}>
      <View style={{width: 668}}>
      <View style={{height: '90%', }}>
      <FlatList
      data={messages}
      keyExtractor = {(item, index) => index.toString()}
      renderItem = {({item}) => {
        if (item.id == 1) {
          return (
          <View style={{alignSelf: 'flex-end', padding: 12, flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '400', marginRight: 10, maxWidth: 200}}>{item.text}</Text>
              <Text style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: 14}}>{item.createdAt}</Text>
            </View>
          </View>
          )
        } else {
          return (
          <View style={{alignSelf: 'flex-start', padding: 12, flexDirection: 'row', width: 296}}>
            <View style={{backgroundColor: '#C4C4C4', borderRadius: 30, width: 48, height: 48,  marginRight: 12}}/>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginBottom: 8}}>
                <Text style={{color: '#1F4EC7', fontSize: 14, fontWeight: '500', marginRight: 8}}>{item.userName}</Text>
                <Text style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: 14}}>{item.createdAt}</Text>
              </View>
              <Text style={{color: '#000000', fontSize: 14, fontWeight: '400'}}>{item.text}</Text>
            </View>

          </View>
          )
        }
      }
      }
      />
      </View>
      <View style={{height: 48, backgroundColor: Colors.addBack, 
          borderRadius: 12, 
          alignItems: 'center', flexDirection: 'row'}}>
        <TextInput 
          value={typing}
          onChangeText={text => setTyping(text)}
          onKeyPress={(event) => {
            if (event.nativeEvent.key == "Enter") {
              sendMessage()
            }
          }}
          style={{backgroundColor: 'gray', 
          backgroundColor: Colors.addBack, 
          alignItems: 'center',
          color: 'black',
          width: '90%', height: '100%',
          padding: 12}}
        />
      
        <TouchableOpacity onPress={sendMessage}>
          <Text style={{color: 'black'}}>Send</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default ChatScreen;