import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  const data = [
    { title: 'Card 1', subtitle: 'Subtitle for Card 1' },
    { title: 'Card 2', subtitle: 'Subtitle for Card 2' },
    { title: 'Card 3', subtitle: 'Subtitle for Card 3' },
    // Add more cards here if needed
  ];

  return (
    <View>
      <ScrollView>
      {data.map((item, index) => (
        <View key={index} style={{ margin: 10 }}>
          <Card>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.subtitle}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      ))}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})