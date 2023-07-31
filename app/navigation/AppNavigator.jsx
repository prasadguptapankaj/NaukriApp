import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/navigation/drawer/CustomDrawerContent';
import MainLayout from '../MainLayout';
import { useSelector, useDispatch } from 'react-redux';
import GuestLayout from '../GuestLayout';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {setUserDetails} from '../../store/userSlice'

const Drawer = createDrawerNavigator();

const AppNavigator = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  
  useEffect(() => {
    getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      dispatch(setUserDetails(currentUser));
    };
    getCurrentUser();
  }, [])
  

  return (
    <>
      {user?.name ? 
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
                headerShown: true,
                header: () => null, // Hide the default app bar
            }}>
                <Drawer.Screen name="Home" component={MainLayout} />
            </Drawer.Navigator>
        </NavigationContainer>
      :
        <GuestLayout/>
      }
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})