import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Avatar, Divider, IconButton, List, ProgressBar } from 'react-native-paper';
import { blue100 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {logoutAndRemoveUserDetails} from '../../../../store/userSlice'

const CustomDrawerContent = (props) => {
    const dispatch = useDispatch();

    signOut = async () => {
        try {
            await GoogleSignin.signOut();
            dispatch(logoutAndRemoveUserDetails());
        } catch (error) {
            console.error(error);
        }
    };

    const itemsData = [
        { title: 'Search jobs', description: 'Item description', icon: 'magnify' },
        { title: 'Recommended jobs', description: 'Another item description' , icon: 'briefcase-outline' },
        { title: 'Saved jobs', description: 'Another item description' , icon: 'bookmark-outline' },
        { title: 'Profile Performance', description: 'Another item description' , icon: 'poll' },
        // Add more data objects as needed
    ];

    const {name, photo:avatarURL } = useSelector((state) => state.user.user);

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <List.Item
                    style={{paddingLeft: 15}}
                    titleStyle={styles.name}
                    descriptionStyle={styles.viewProfile}
                    title={name ? name : ''}
                    description="Update profile"
                    left={() => (
                        <View style={styles.avatarContainer}>
                            <View style={styles.avatarProgressContainer}>
                                <Avatar.Image source={{ uri: avatarURL }} size={40} />
                                <View style={styles.progressBarContainer}>
                                    <ProgressBar
                                        progress={10}
                                        color="#007AFF" 
                                        style={styles.progressBar}
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                    onPress={() => {}}
                    right={() => (
                        <IconButton
                            icon="chevron-left"
                            size={20}
                            onPress={() => {}}
                            color="#007AFF"
                        />
                    )}
                />
                <Divider style={{ marginBottom: 20}}/>
                {itemsData.map((item, index) => (
                    <List.Item
                        style={{paddingVertical: 0}}
                        titleStyle={{fontSize: 13}}
                        key={index}
                        title={item.title}
                        left={props => <List.Icon {...props} icon={item.icon}/>}
                        onPress={() => {}}
                        
                    />
                ))}
                <Divider style={{marginTop: 20, marginBottom: 20}} />
                {itemsData.map((item, index) => (
                    <List.Item
                        style={{paddingVertical: 0}}
                        titleStyle={{fontSize: 13}}
                        key={index}
                        title={item.title}
                        left={props => <List.Icon {...props} icon={item.icon}/>}
                        onPress={() => {}}
                        
                    />
                ))}
                <Divider style={{marginTop: 20}} />
                <List.Item
                    style={{paddingVertical: 0}}
                    titleStyle={{fontSize: 13}}
                    title='Sign Out'
                    left={props => <List.Icon {...props} icon="logout" />}
                    onPress={signOut}
                />
            </View>
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    drawerItem: {
        paddingLeft: 15,
        paddingRight: 15,
      },
      avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      },
      avatarProgressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
      },
      progressBarContainer: {
        position: 'absolute',
        top: '100%',
        left: 20,
        right: 20,
        zIndex: -1,
      },
      progressBar: {
        borderRadius: 5,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      viewProfile: {
        fontSize: 14,
        color: '#0000ff'
      },
})