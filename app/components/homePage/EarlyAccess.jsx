import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Caption, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EarlyAccessJobs from './EarlyAccessJobs';

const EarlyAccess = () => {
    const handleLinkPress = () => {
        navigation.navigate(screenName);
    };
    const data = [
        {
          jobTitle: 'Front End Developer',
          companySector: 'Leading IT Company',
          companyName: 'Tech Solutions Pvt Ltd',
          companyRating: 4.5,
          companyOrigin: 'Indian MNC',
          companyType: 'Service',
          location: 'Bangalore/Kolkata/Pune/Chennai',
          experienceRequired: '4-5 years',
          postedDate: '2023-07-19', // Format: YYYY-MM-DD
          hiringCompanies: [
                {
                    id: 1,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 2,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 3,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 4,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 5,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 6,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 7,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
            ], // Replace with actual logo path or use a URL
        },
        {
          jobTitle: 'Software Engineer',
          companySector: 'Software Development',
          companyName: 'Innovative Products Inc',
          companyRating: 4.8,
          companyOrigin: 'Foreign MNC',
          companyType: 'Product-based',
          location: 'Bangalore/Kolkata/Pune/Chennai',
          experienceRequired: '3-5 years',
          postedDate: '2023-07-18',
          hiringCompanies: [
                {
                    id: 1,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 2,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 3,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 4,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 5,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 6,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 7,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
            ],
        },
        {
          jobTitle: 'Data Scientist',
          companySector: 'Foreign IT Consulting MNC',
          companyName: 'Data Insights Ltd',
          companyRating: 4.2,
          companyOrigin: 'Foriegn MNC',
          companyType: 'Product',
          location: 'Bangalore/Kolkata/Pune/Chennai',
          experienceRequired: '5-7 years',
          postedDate: '2023-07-17',
          hiringCompanies: [
                {
                    id: 1,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 2,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 3,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 4,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 5,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 6,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
                {
                    id: 7,
                    imageUrl: require('../../../assets/download.png'), // Replace with actual logo path or use a URL
                },
            ],
        },
        {
            jobTitle: ''
        }
        // Add more job data objects as needed
    ];
      
      
  return (
    <View style={styles.earlyAccessContainer}>
        <View style={styles.titleHeaderContainer}>
        <View style={styles.titleContainer}>
            <Avatar.Image
                size={50}
                style={{marginRight: 8}}
                source={require('../../../assets/download.png')}
            />
            <View>
                <View style={styles.textWrapper}>
                    <Title style={[styles.title, {marginRight: 6}]}>
                        Early access roles
                    </Title>
                    <Icon size={18} color="blue" name="help-circle-outline"/>
                </View>
                <Caption style={styles.caption}>Fresh roles from recruiter searches</Caption>
            </View>
        </View>
        <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.linkText}>View all</Text>
        </TouchableOpacity>
        </View>
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <EarlyAccessJobs item={item}/>}
        />

    </View>
  )
}

export default EarlyAccess

const styles = StyleSheet.create({
    earlyAccessContainer: {
        marginBottom:10, 
        paddingVertical: 20, 
        paddingHorizontal: 10
    },
    titleHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    linkText: {
        fontSize: 18,
        color: 'blue'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 20
    },
    caption: {
        marginTop: 0,
        padding:0,
        lineHeight: 15
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})