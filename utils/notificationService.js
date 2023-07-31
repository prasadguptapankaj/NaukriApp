import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  }
}

const getFcmToken = async () => {

    let fcmtoken = await AsyncStorage.getItem('fcmToken');

    if(!fcmtoken){

        try {
            // Get the FCM token
            const fcmToken = await messaging().getToken();
    
            // Save the FCM token to AsyncStorage
            await AsyncStorage.setItem('fcmToken', fcmToken);
        } catch (error) {
            console.log('Error saving FCM Token:', error);
        }
    }
};
  
export const notificationListner = async() => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });


  messaging().onMessage(remoteMessage => {
    console.log(
      'Notification received on foreground',
      remoteMessage,
    );
  });

  // Check whether an initial notification is available
  messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage.notification,
      );
      setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
    }
  });
}

