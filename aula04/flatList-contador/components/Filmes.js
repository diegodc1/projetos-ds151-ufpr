import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  ActivityIndicator
} from 'react-native'
import { FlatList } from 'react-native-web'

export default function Filmes() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const handleLoadButton = async () => {
    setLoading(true)
    const req = await fetch('https://api.b7web.com.br/cinema/')
    const json = await req.json()

    if (json) {
      setMovies(json)
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Carregar Filmes em Cartaz"
        onPress={handleLoadButton}
      ></Button>

      {loading && (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color="#FFF" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}
      {!loading && (
        <>
          <Text style={styles.movieTotalTitle}>
            Total de filmes em cartaz: {movies.length}
          </Text>
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <View style={styles.movieItem}>
                <Text style={styles.movieTitle}>{item.titulo}</Text>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.movieImage}
                  resizeMode="contain"
                />
              </View>
            )}
            keyExtractor={item => item.titulo}
          />
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    color: '#FFF'
  },
  totalMoviesText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  movieTotalTitle: {
    color: '#2C1383',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  list: {
    flex: 1
  },
  movieItem: {
    marginBottom: 30,
    backgroundColor: '#83A4F8',
    padding: 10,
    borderRadius: 20,
    paddingBottom: 20,
    margin: 10
  },
  movieImage: {
    height: 300
  },
  movieTitle: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 600
  }
})
