import { View, Text, StyleSheet, Button } from "react-native"
import React from "react"

export default function Review({ route,navigation }) {
  const { title, body, rating } = route.params
  function handlePress(){
    navigation.navigate('home')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{body}</Text>
      <Text style={styles.text}>{rating}</Text>
      <Button onPress={handlePress} title="Go Back"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "yellow"
  },
  text: {
    color: "black"
  }
})
