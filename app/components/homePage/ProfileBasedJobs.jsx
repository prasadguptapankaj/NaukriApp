import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Card, Divider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import JobCard from './JobCard';

const ProfileBasedJobs = () => {
    const handleLinkPress = () => {
        navigation.navigate(screenName);
    };
    const data = [
        {
            id: '1',
            companyLogo: 'https://www.google.com/search?sxsrf=AB5stBjy-Eog1uTo6edlHEsHDRDFj_RlAw:1689821845198&q=traxon+logo&tbm=isch&sa=X&ved=2ahUKEwjh_sP2pJyAAxUrhGMGHfJRATMQ0pQJegQIFRAB&biw=1920&bih=910&dpr=1#imgrc=MSsxR9Bz1wkGFM',
            jobTitle: 'Tracxn-Senior Software Engineer',
            companyName: 'Tracxn',
            rating: 4.5,
            location: 'New York',
            datePosted: '2023-07-19',
        },
        {
            id: '2',
            companyLogo: 'https://example.com/company2_logo.png',
            jobTitle: 'Data Scientist',
            companyName: 'Webguru',
            rating: 3.8,
            location: 'San Francisco',
            datePosted: '2023-07-18',
        },
        {
            id: '3',
            companyLogo: 'https://example.com/company3_logo.png',
            jobTitle: 'UX/UI Designer',
            companyName: 'BlueCopper',
            rating: 4.2,
            location: 'London',
            datePosted: '2023-07-17',
        },
        {
            id: '4',
            companyLogo: 'https://example.com/company3_logo.png',
            jobTitle: '',
            companyName: 'BlueCopper',
            rating: 4.2,
            location: 'London',
            datePosted: '2023-07-17',
        },
        // Add more dummy data objects as needed
    ];

    return (
        <View style={{marginVertical:10, backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.title}>Jobs based on your profile <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>(75)</Text></Text>
                <TouchableOpacity onPress={handleLinkPress}>
                    <Text style={styles.linkText}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <JobCard item={item}/>}
            />
        </View>
    )
}

export default ProfileBasedJobs

const styles = StyleSheet.create({
    title: {flex: 1, fontSize: 18, fontWeight: '700', color: 'black', },
    linkText: {
        flex: 1,
        fontSize: 18,
        color: 'blue'
    }
})