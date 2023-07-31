import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const JobCard = ({item}) => {
  const handleLinkPress = () => {
    navigation.navigate('job');
  };
  return (
    <Card mode="outlined" style={styles.card}>
      {item.jobTitle ? (
        <Card.Content>
          {/* Company Logo */}
          <View style={styles.logoContainer}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../../assets/download.png')}
            />
          </View>

          {/* Job Title */}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.jobTitle}>{item.jobTitle}</Text>

          {/* Company Name and Rating */}
          <View style={styles.companyContainer}>
            <Text style={styles.companyName}>{item.companyName}</Text>
            <Icon size={14} style={{marginRight: 4}} name="star" color="darkorange" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>

          {/* Location */}
          <View style={styles.locationContainer}>
            <Icon size={14} style={styles.locationIcon} name="map-marker-outline"/>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>

          {/* Date of Post */}
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>2d ago</Text>
          </View>
        </Card.Content>
      ) : (
        <Card.Content style={{ alignItems: 'center', justifyContent: 'center'}}>
         <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleLinkPress}>
              <Text style={styles.linkText}>View all 75 jobs</Text>
            </TouchableOpacity>
            <Icon size={20} name="chevron-right" color="blue"/>
         </View>
        </Card.Content>
      )}
    </Card>
  )
}

export default JobCard

const styles = StyleSheet.create({
    card: {
      maxWidth: 280,
      minWidth: 150,
      height: 200,
      marginRight: 20,
      marginTop: 10,
      backgroundColor: '#ffff',
      borderColor: '#C0C0C0',
      justifyContent: 'center'
    },
    logoContainer: {
      marginBottom: 8,
      borderRadius: 10,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'red'
    },
    jobTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 8,
    },
    companyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    companyName: {
      fontSize: 14,
      marginRight: 8,
    },
    rating: {
      fontSize: 14,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    locationIcon: {
      fontSize: 16,
      marginRight: 4,
    },
    locationText: {
      fontSize: 14,
      fontWeight: '400'
    },
    dateContainer: {
      flexDirection: 'row',
    },
    dateText: {
      fontSize: 10,
      marginTop: 10,
      color: '#888', // Use a lighter color for the date text
    },
    linkText: {
      fontSize: 14,
      color: 'blue'
    }
})