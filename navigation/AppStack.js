import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MainStack from '../navigation/MainStack';
import CommunityScreen from '../screens/CommunityScreen';
import SearchScreen from '../screens/SearchScreen';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const UserStack = createStackNavigator();


const AppStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HomeDrawer" component={MainStack} />
            <Drawer.Screen name="User" component={UserScreen} />
        </Drawer.Navigator>

    )
}

export default AppStack;