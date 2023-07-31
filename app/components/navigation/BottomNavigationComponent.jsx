import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, BottomNavigationTab } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavigationComponent = () => {
  const [index, setIndex] = useState(0);

  const navigationItems = [
    { label: 'Home', icon: 'home' },
    { label: 'Inbox', icon: 'inbox' },
    { label: 'Profile', icon: 'account' },
  ];

  const renderTab = ({ label, icon }) => (
    <BottomNavigationTab key={label} icon={() => <Icon name={icon} size={24} />} />
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Your content or other components */}
      
      <BottomNavigation
        navigationState={{ index, routes: navigationItems }}
        onIndexChange={setIndex}
        renderScene={() => null} // Placeholder; you can replace this with your own screens
        renderTabBar={props => (
          <BottomNavigation
            {...props}
            barStyle={{ backgroundColor: 'white' }} // Set your background color
            activeColor="#6200EE" // Set your active tab color
            inactiveColor="#757575" // Set your inactive tab color
          />
        )}
        renderTab={renderTab}
      />
    </View>
  );
};

export default BottomNavigationComponent;
