import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomDrawerItem = () => {
  return (
    <View>
        <List.Item
            titleStyle={styles.name}
            descriptionStyle={styles.viewProfile}
            title="Pankaj"
            description="Update profile"
            left={() => (
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarProgressContainer}>
                        <Avatar.Image source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }} size={40} />
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
    </View>
  )
}

export default CustomDrawerItem

const styles = StyleSheet.create({})