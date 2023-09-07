import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-web'

export default function HomeScreen({ navigation }) {
  return (
    <View style={style.mainView}>
      <Text>Home Screen</Text>
      <Button
        title="Ir para a galeria!"
        onPress={() => navigation.navigate('Home2')}
        style={style.button}
      />
      <Button
        title="Ir para counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Ir para form!"
        onPress={() => navigation.navigate('Form')}
      />
      <Button
        title="Ir para Filmes - API"
        onPress={() => navigation.navigate('Filmes')}
      />
    </View>
  )
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10
  },
  button: {
    backgroundColor: '#fff',
    width: 100,
    color: '#EE4'
  }
})
