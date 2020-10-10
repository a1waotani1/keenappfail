import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const UserScreen = () => {
    const { user } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> This is my User screen </Text>
        </View>
    );
}

export default UserScreen;