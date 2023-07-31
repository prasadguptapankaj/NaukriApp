import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Appbar, PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import store from '../store';
import { Provider as StoreProvider } from 'react-redux';
import { requestUserPermission, notificationListner } from '../utils/notificationService';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue', // Your custom primary color
      accent: '#FFC107', // Your custom accent color
      // Add more custom colors if needed
    },
  };

  useEffect(() => {
    requestUserPermission();
    notificationListner();
  }, [])
  
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator/>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({})