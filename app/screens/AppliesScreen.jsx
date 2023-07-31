import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../store/counterSlice'; // Import the action creators

export default function AppliesScreen() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  )
}

const styles = StyleSheet.create({
 
})