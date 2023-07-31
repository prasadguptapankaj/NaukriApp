import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Caption, Card, Chip, Divider, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EarlyAccessJobs = ({item}) => {
    const handleLinkPress = () => {
        navigation.navigate('job');
    };
  return (
      <Card  mode='contained' style={styles.card}>
        {item?.jobTitle ? (
            <Card.Content>
                <Title style={{fontWeight: '700'}}>{item.jobTitle}</Title>
                <Caption>{item.companySector}</Caption>
                <View style={styles.row}>
                    <Chip compact icon={() => <Icon size={15} name='star' color="darkorange"/>} mode='flat' style={styles.chip} textStyle={styles.chiptextStyle}>{item.companyRating}</Chip>
                    <Chip compact textStyle={styles.chiptextStyle} style={styles.chip}>{item.companyOrigin}</Chip>
                    <Chip compact  textStyle={styles.chiptextStyle} style={styles.chip}>{item.companyType}</Chip>
                </View>
                <View style={[styles.row, {justifyContent:'space-between'}]}>
                    <View style={[styles.row, {flex: 1}]}>
                        <Icon name="map-marker-outline" size={18} color="#888" />
                        <Caption numberOfLines={1} ellipsizeMode="tail" style={styles.location}>{item.location}</Caption>
                    </View>
                    <View style={styles.row}>
                        <Icon name="briefcase-outline" size={18} color="#888" style={styles.iconMargin} />
                        <Caption>{item.experienceRequired}</Caption>
                    </View>
                </View>
                <Caption style={{marginTop: 10}}>2d ago</Caption>
                <Divider style={styles.divider} />
                <Caption style={{marginBottom: 0}}>Hiring for one of these companies</Caption>
                <View style={[styles.row, { marginTop: 2}]}>
                    {item.hiringCompanies?.map(({id, imageUrl}) => 
                        <Image key={id} style={styles.logo} source={imageUrl} />
                    )}
                </View>
            </Card.Content>
        ): (
            <Card.Content style={{ alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={handleLinkPress}>
                        <Text style={styles.linkText}>View all</Text>
                    </TouchableOpacity>
                    <Icon size={20} name="chevron-right" color="blue"/>
                </View>
            </Card.Content>
        )}
    </Card>
  )
}

export default EarlyAccessJobs

const styles = StyleSheet.create({
    card: {
        maxWidth: 310,
        minWidth: 150,
        minHeight: 200,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#ffff',
        borderColor: '#C0C0C0',
        justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    chip: {
        marginRight: 8,
        backgroundColor: '#f0f8ff'
    },
    chiptextStyle: {
        fontSize: 12, fontWeight: 'normal' ,color: 'grey'
    },
    location: {
        marginLeft: 4,
        fontSize: 14,
    },
    iconMargin: {
        marginHorizontal: 4,
    },
    divider: {
        marginVertical: 10,
    },
    logo: {
        width: 35,
        height: 35,
        marginRight: 5
    },
    linkText: {
        fontSize: 14,
        color: 'blue'
    }
})