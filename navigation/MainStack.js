import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SearchScreen from '../screens/SearchScreen';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const UserStack = createStackNavigator();


const MainStack = () => (
    <Tab.Navigator
        initialRouteName="ホーム"
        tabBarOptions={{
            inactiveTintColor: '#000000',
            activeTintColor: '#7DCEA0',

        }}
    >
        <Tab.Screen
            name="ホーム"
            component={HomeStackScreen}
            options={{
                tabBarLabel: ' ',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="home-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="マイページ"
            component={UserStackScreen}
            options={{
                tabBarLabel: ' ',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="map" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="コミュニティ"
            component={CommunityScreen}
            options={{
                tabBarLabel: ' ',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="account-group-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="検索"
            component={SearchScreen}
            options={{
                tabBarLabel: ' ',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="search" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainStack;

const HomeStackScreen = ({ navigation }) => (

    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen
            name=" "
            component={HomeScreen}
            options={{
                headerLeft: () => (
                    <Icons.Button name="menu" size={30} backgroundColor="#fff" color="#000000" onPress={() => navigation.openDrawer()}></Icons.Button>
                )
            }}
        />

    </HomeStack.Navigator >
);

const UserStackScreen = () => (
    <UserStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <UserStack.Screen
            name="User"
            component={UserScreen}
            options={{
                headerRight: () => (
                    <MaterialIcons.Button name="search" size={30} backgroundColor="#fff" color="#000000"></MaterialIcons.Button>
                )
            }}
        />
    </UserStack.Navigator>
);


