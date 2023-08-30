import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native'

export default function MediaNotas() {
  const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcMedia = () => {
    const aux = parseFloat(nota1) + parseFloat(nota2)
    setResultado(aux / 2)
  }

  return (
    <View style={style.mainView}>
      <View style={style.box}>
        <Text style={style.text}>Digite a primeira nota:</Text>
        <TextInput
          style={style.textInput}
          placeholder="Digite a primeira nota"
          placeholderTextColor="#999"
          value={nota1}
          onChangeText={t => setNota1(t)}
        />

        <Text style={style.text}>Digite a segunda nota:</Text>
        <TextInput
          style={style.textInput}
          placeholder="Digite a segunda nota"
          placeholderTextColor="#999"
          value={nota2}
          onChangeText={t => setNota2(t)}
        />

        <Button title="Calcular Média" onPress={calcMedia} style={style.btn} />

        {resultado != 0 && (
          <View
            style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}
          >
            <Text style={{ fontSize: 20 }}>Resultado: {resultado}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  mainView: {
    display: 1,
    justifyContent: 'center',
    height: '90vh',
    width: '100vw',
    backgroundColor: '#FFFF',
    padding: 20
  },
  textInput: {
    backgroundColor: '#EEE',
    padding: 10,
    marginBottom: 10,
    borderRadius: 25
  },
  box: {
    backgroundColor: '#ccaaf1',
    padding: 15,
    borderRadius: 25
  },
  btn: {
    marginTop: 30,
    borderRadius: 25
  },
  text: {
    fontWeight: 500
  }
})
