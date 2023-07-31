import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from './globalStyles'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import {setUserDetails} from '../store/userSlice'

const GuestLayout = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({})

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '333026925461-4jrunlhah3mje0g6lranoijnalpkdkbl.apps.googleusercontent.com', // You need to get this from the Google Developer Console
    });
    
  }, [])
  
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(setUserDetails(userInfo));

    } catch (error) {
      console.log('Error:', error.code, error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services are not available or outdated');
      } else {
        console.log('Unknown error occurred', error);
      }
    }
  };

  return (
    <View style={[{flex: 1}, globalStyles.center]}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  )
}

export default GuestLayout

const styles = StyleSheet.create({

})