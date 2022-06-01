import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLastRoomMessage, useSetCurrentRoomId } from '../API/store';

export default function RoomDetails({roomId, name, picture, selected }) {
    const setCurrentRoom = useSetCurrentRoomId();
    const lastMessage = useLastRoomMessage(roomId);

    return (
        <Pressable
        onPress={() => {}}
        >
            <View>
                <Text style={{color: 'black'}}>{name}</Text>
                <Text style={{color: 'black'}}>
                    {lastMessage}
                </Text>
            </View>
        </Pressable>
    )
}