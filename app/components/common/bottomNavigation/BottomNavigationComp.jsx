import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../../../screens/HomeScreen';
import AppliesScreen from '../../../screens/AppliesScreen';
import InboxScreen from '../../../screens/InboxScreen';
import ProfileScreen from '../../../screens/ProfileScreen';


const BottomNavigationComp = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'applies', title: 'Applies', focusedIcon: 'send-circle', unfocusedIcon: 'send-circle-outline' },
    { key: 'inbox', title: 'Inbox', focusedIcon: 'message-reply-text', unfocusedIcon: 'message-reply-text-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    applies: AppliesScreen,
    inbox: InboxScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      dense
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationComp;