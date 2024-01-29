import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import analytics from "@react-native-firebase/analytics"

export default function About() {
  React.useEffect(() => {
    analytics().logScreenView({
      screen_name: 'About Screen',
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"lime"
    },
    text:{
        color:"white"
    }
})