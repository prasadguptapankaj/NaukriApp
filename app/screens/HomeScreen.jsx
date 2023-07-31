import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Card, Avatar } from 'react-native-paper';
import { CustomCarousel, EarlyAccess, HeroCard, NotificationAndPoll, ProfileBasedJobs } from '../components';

export default function HomeScreen() {
  const data = [
    { title: 'Pankaj Gupta', status: 'Update profile',notificationText: '2 Missing details', navigateTo: 'profile', avatarUrl: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png', avatarText: '' },
    { title: 'Search appearances', status: 'last 90 days',notificationText: 'View all', navigateTo: 'seachapperance', avatarUrl: '', avatarText: '101' },
    { title: 'Recruiter actions', status: 'Last 30 days',notificationText: 'View all', navigateTo: 'recruiteraction', avatarUrl: '', avatarText: '46' },
  ];

  return (
    <View style={{backgroundColor: '#f0f0f0'}}>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <HeroCard 
              key={index} 
              avatarUrl={item.avatarUrl}
              title={item.title}
              caption={item.status}
              navigateTo={item.navigateTo}
              notificationText={item.notificationText}
              avatarText={item.avatarText}
            />
          ))}
        </ScrollView>
        <CustomCarousel/>
        <NotificationAndPoll/>
        <ProfileBasedJobs/>
        <EarlyAccess/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
})