import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, TextInput, Button, IconButton, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Header() {

    const [notificationCount, setNotificationCount] = useState(5);

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');

    const navigation = useNavigation();

    const handleToggleDrawer = () => {
        navigation.toggleDrawer();
    };

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={handleToggleDrawer} />
            <TextInput
                dense
                mode="outlined"
                placeholder="Search new jobs here"
                placeholderTextColor="#909090"
                style={{
                    flex: 1,
                }}
                outlineColor="#909090"
                activeOutlineColor="#909090"
                theme={{ roundness: 30 }}
                left={<TextInput.Icon color="#909090" icon="magnify" size={20} />}
            />
            <View style={{ position: 'relative' }}>
                <IconButton
                    icon="bell"
                    color="#000"
                    onPress={() => {
                    // Handle notification icon press
                    }}
                />
                {notificationCount > 0 && (
                    <Badge
                    size={18}
                    style={{ position: 'absolute', top: 2, right: 4 }}
                    >
                    {notificationCount}
                    </Badge>
                )}
            </View>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({})