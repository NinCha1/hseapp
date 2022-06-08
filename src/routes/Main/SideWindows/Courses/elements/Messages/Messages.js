import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Message from '../../../../../../components/Message';
import MessageInput from '../../../../../../components/MessageInput';
import { useCurrentRoomId, useRoom, useRoomMessages } from '../../../../../../API/store';
import styles from './styles';


const Messages = [
    {
      id: '1',
      userName: 'Important',
      messageTime: '4m',
      lastSender: 'Me',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'Professors/Assistants/Students',
      messageTime: '1h',
      lastSender: 'Me',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Students Only',
      messageTime: '2h',
      lastSender: 'Me',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    }
  ];

const MessagesScreen = ({navTo}) => {
  

    return (
        <View style={styles.container}>
            <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={navTo}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper}>
                    <View style={{width: 60, height: 60, backgroundColor: '#C4C4C4', borderRadius: 30}}></View>
                      </View>
                    <View style={styles.textSection}>
                            <Text style={styles.chatName}>{item.userName}</Text>
                        <Text style={styles.lastSender}>{item.lastSender}</Text>
                        <View style={styles.containerAdd}>
                            <Text style={styles.MessageText}>{item.messageText}</Text>
                            <Text style={styles.PostTime}> · {item.messageTime}</Text>
                        </View>
                    </View>
                    </View>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default MessagesScreen;
