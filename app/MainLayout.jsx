import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomNavigationComp, Header } from './components'
import { Badge } from 'react-native-paper';

export default function MainLayout() {
  return (
    <View style={{flex:1}}>
      <Header/>
      <BottomNavigationComp/>
    </View>
  )
}

const styles = StyleSheet.create({})