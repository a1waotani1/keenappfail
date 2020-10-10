import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import IonIcons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Intro"
                component={IntroScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: '#fff',
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <IonIcons.Button
                                name="chevron-back-outline"
                                size={30}
                                backgroundColor="#fff"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    )
                })
                }
            />
        </Stack.Navigator>
    );
};

export default AuthStack;