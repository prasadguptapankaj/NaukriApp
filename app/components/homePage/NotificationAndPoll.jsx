import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

const NotificationAndPoll = () => {
  return (
    <View style={{marginVertical:10, backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 10}}>
      <Card style={{borderColor: '#C0C0C0'}} mode='outlined'>
        <Card.Content>
            <Text style={{marginBottom: 8, fontSize: 16, fontWeight: 'bold'}}>Do you need help introducing yourself confidently in interviews?</Text>
            <Button  mode="outlined" labelStyle={{fontSize: 12, color: '#808080'}}  style={{paddingVertical: 0, marginBottom:8, borderColor: '#C0C0C0'}}>
                Yes, I need help
            </Button>
            <Button mode="outlined" labelStyle={{fontSize: 12, color: '#808080'}}  style={{paddingVertical: 0, borderColor: '#C0C0C0' }}>
                No, I don't need help
            </Button>
            </Card.Content>
      </Card>
    </View>
  )
}

export default NotificationAndPoll

const styles = StyleSheet.create({})