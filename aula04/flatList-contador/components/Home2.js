import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native'

const DATA = [
  {
    uri: 'https://source.unsplash.com/random/520x350/?wallpaper,landscape',
    with: '60%'
  },
  {
    uri: 'https://source.unsplash.com/random/580x550/?wallpaper,landscape',
    with: '100%'
  },
  {
    uri: 'https://source.unsplash.com/random/620x350/?wallpaper,landscape',
    with: '30%'
  }
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
export default function Home2() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          contentContainerStyle={{ display: 1 }}
          renderItem={({ item }) => (
            <Image
              style={{ width: item.with, height: 200 }}
              source={{ uri: item.uri }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})
