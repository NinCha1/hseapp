import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import {useCurrentRoomId, useSendMessage } from '../API/store';
import styles from './Filter/styles';

export default function MessageInput({roomId}) {
    const [message, setMessage] =useState('');
    const currentRoomId = useCurrentRoomId();
    const sendMessage = useSendMessage(roomId, message);
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            setMessage('');
            inputRef.current.focus();
        }
    }, [inputRef, currentRoomId]);

    const handleSend = () => {
        if (message.length === 0) {
            return;
        }

        setMessage('');
        sendMessage();
    };

    return (
        <View>
            <TextInput
            ref={inputRef}
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={handleSend}
            placeholder="Send message..."
            style={styles.input}
            />
        </View>
    )
}