import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../globalStyles';
import JobItem from '../components/inbox/JobItem';

const Jobs = () => {
  const jobsData = [
    {
      id: '1',
      name: 'John Doe',
      company: 'ABC Corp',
      jobTitle: 'PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '2',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '3',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '4',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '5',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '6',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '7',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },
    {
      id: '8',
      name: 'Pankaj Prasad Gupta',
      company: 'T-WEB EXPONENT SERVICES PRIVATE LIMITED',
      jobTitle: 'Job | Immediate job openings | React Native | PHP Developer',
      date: 'Jul 30, 2023',
    },

    // Add more job items as needed
  ];

  const renderItem = ({ item }) => (
    <JobItem
      name={item.name}
      company={item.company}
      jobTitle={item.jobTitle}
      date={item.date}
      avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzw8_87ASKSkDuQx7gbTSbjJtcxUQ7aXD9Q&usqp=CAU"
    />
  );

  return (
    <FlatList
      data={jobsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  )
}

export default Jobs

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})