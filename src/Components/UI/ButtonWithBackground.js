import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native'

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.container}>
    <View style={[styles.button, {backgroundColor:props.color}]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: "80%"
  },
  button:{
    padding:10,
    borderWidth:1,
    borderColor: "black",
  },
  text:{
    textAlign: "center"
  }
})

export default ButtonWithBackground