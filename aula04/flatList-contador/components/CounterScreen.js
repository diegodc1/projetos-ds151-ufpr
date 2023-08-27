import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native'
import { Button } from 'react-native-paper'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button
        title="Incrementa"
        onPress={() => setCounter(counter + 1)}
        style={{ marginTop: 60, backgroundColor: '#EE4232' }}
      />
      <Text>{counter}</Text>
    </View>
  )
}

export default CounterScreen
