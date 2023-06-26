import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'black',
            // top: 10,
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ color }) => {
            let Icon;
            if (route.name === 'Home') {
              Icon = <Foundation name="home" size={25} color={color} />;
            } else if (route.name === 'Search') {
              Icon = <Entypo name="magnifying-glass" size={25} color={color} />;
            } else if (route.name === 'Add') {
              Icon = <Octicons name="diff-added" size={25} color={color} />;
            } else if (route.name === 'Reel') {
              Icon = (
                <MaterialIcons name="video-library" size={25} color={color} />
              );
            } else {
              Icon = <AntDesign name="user" size={25} color={color} />;
            }
            return Icon;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Add" component={Home} />
        <Tab.Screen name="Reel" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
