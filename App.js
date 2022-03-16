import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native'

export default function App() {
  const [number, setNumber] = React.useState(0)

  const [guess, setGuess] = React.useState('')

  const [text, setText] = React.useState('')

  const [counter, setCounter] = React.useState(1)

  React.useEffect(() => reset(), [])

  const reset = () => {
    setNumber(Math.floor(Math.random() * 100) + 1)
    setGuess('')
    setCounter(1)
    setText('Guess a number between 0 and 100')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>{text}</Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          value={guess}
          onChangeText={(text) => setGuess(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title=" MAKE GUESS "
          onPress={() => {
            if (parseInt(guess) === number) {
              Alert.alert(
                'You guessed the right number in ' + counter + ' guesses',
              )
              reset()
            } else if (parseInt(guess) > number) {
              setText('Your guess ' + guess + ' is too high')
              setGuess('')
            } else {
              setText('Your guess ' + guess + ' is too low')
              setGuess('')
            }
            setCounter((prevCounter) => prevCounter + 1)
          }}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 5,
    width: 80,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
})
