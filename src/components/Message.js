import { Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useCurrentUserId, useUser } from '../API/store';

export default function Message({ uid, message }) {
    const user = useUser(uid);
    const currentUserId = useCurrentUserId();
    const isCurrentUser = currentUserId === uid;

    return (
        <View>
            <View>
                <Text style={{color: 'black'}}>{message}</Text>
            </View>
        </View>
    )
}