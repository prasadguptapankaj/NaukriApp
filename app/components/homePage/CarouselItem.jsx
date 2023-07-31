import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CarouselItem = ({ item, width }) => {
    return (
      <View style={{padding: 10, width: width}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={item.titleIcon} size={12} color="blue" style={{marginRight: 5}}/>
          <Text style={styles.statusText}>{item.title}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.informationText}>{item.content}</Text>
          <Button mode="outlined" labelStyle={{fontSize: 12}}  style={{paddingVertical: 0, marginLeft: 5}}>
            {item.buttonLabel}
          </Button>
        </View>
      </View>
    )
  }

export default CarouselItem

const styles = StyleSheet.create({
    statusText: {
        fontSize: 12,
        color: 'blue'
    },
    informationText: {
        fontSize: 14,
        flex: 1,
        fontWeight: '700'
    },
})