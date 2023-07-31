import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Jobs from '../screens/Jobs';
import Chats from '../screens/Chats';

const Tab = createMaterialTopTabNavigator();


const TopTabNavigation = () => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
            tabStyle: { flex: 1 },
            indicatorStyle: { backgroundColor: 'darkorange', padding: 2 },
            // Add other tabBar options if needed
        }}
    >
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  )
}

export default TopTabNavigation

const styles = StyleSheet.create({})