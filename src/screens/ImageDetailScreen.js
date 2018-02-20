import React from 'react'
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native'

export default ImageDetailScreen = props => {
  const [currentImage] = props.currentImage
  return (
      <View style={styles.container}>
        <Text style={styles.text}>User Name: {currentImage.user}</Text>
        <Text style={styles.text}>Tags: {currentImage.tags}</Text>
        <Text style={styles.text}>Resolution: {currentImage.imageWidth} x {currentImage.imageHeight}</Text>
        <View style={styles.imageContainer}>
          <Image resizeMode='contain' 
                style={styles.image} 
                source={{uri: currentImage.webformatURL}}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    justifyContent: "center"
  },
  imageContainer:{
    margin: 10
  },
  image:{
    width:"100%", 
    height:"100%"
  },
  text:{
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#ccc"
  }
})