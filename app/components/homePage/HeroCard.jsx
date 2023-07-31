import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper';

const HeroCard = ({avatarUrl, title, caption, navigateTo, notificationText, avatarText}) => {
    const data = [
        { title: 'Card 1', subtitle: 'Subtitle for Card 1' },
        { title: 'Card 2', subtitle: 'Subtitle for Card 2' },
        { title: 'Card 3', subtitle: 'Subtitle for Card 3' },
        // Add more cards here if needed
    ];
    return (
        <Card mode="outlined" style={{ margin: 10, borderColor: '#ccc'}}>
            <Card.Content style={{flexDirection: 'row', alignItems: 'center'}}>  
                <View style={{paddingHorizontal: 10}}>
                   {avatarUrl ? (
                       <Avatar.Image source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' }} size={40} />
                   ) : 
                   (
                    <Text style={{fontSize: 18, fontWeight: 'bold', borderRadius: 50, borderBottomColor: 'black', padding: 10}}>{avatarText}</Text>
                   )
                   } 
                </View>
                <View style={{paddingHorizontal: 10}}>
                    <Text style={styles.userName}>{title}</Text>
                    <Text style={styles.captionText}>{caption}</Text>
                    <Text style={styles.linkText}>{notificationText}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

export default HeroCard

const styles = StyleSheet.create({
    userName: {
        fontSize: 14,
        fontWeight: 'bold'
    },
        captionText: {
        fontSize: 12,
        color: '#888', // You can customize the color to your preference
    },
    linkText: {
        marginTop:8,
        fontSize: 12,
        color: 'blue',
        fontWeight: 'bold'
    }
})