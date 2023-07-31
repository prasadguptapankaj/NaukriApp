import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Badge, Caption } from 'react-native-paper'
import globalStyles from '../../globalStyles'

const JobItem = ({ name, company, avatarURL, jobTitle, date }) => {
  return (
    <View style={styles.container}>
      <View style={[globalStyles.row, globalStyles.justifyContentBetween]}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={48}
            source={{ uri: avatarURL }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={[globalStyles.row, globalStyles.justifyContentBetween]}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Caption numberOfLines={1} ellipsizeMode="tail" style={[{ color: '#888', opacity: 0.7,}, styles.company]}>
            {company}
          </Caption>
          <View style={[globalStyles.row, globalStyles.justifyContentBetween, {marginTop: 6}]}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <Badge size={15} style={styles.badge}>
              1
            </Badge>
          </View>
        </View>
      </View>
    </View>
  )
}

export default JobItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
      },
      avatarContainer: {
        marginRight: 10,
      },
      avatar: {
        alignSelf: 'center', // Align avatar in the center of its container
      },
      detailsContainer: {
        flex: 1, // Allow details to take available space horizontally
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      date: {
        fontSize: 12,
        color: '#888',
      },
      company: {
        fontSize: 14,
        color: '#888',
      },
      jobTitle: {
        fontSize: 14,
      },
      badge: {
        marginTop: 8,
      },
})