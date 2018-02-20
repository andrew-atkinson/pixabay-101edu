import React from 'react'
import {View, Text, Image} from 'react-native'

export default ImageDetailScreen = props => {
  const [currentImage] = props.currentImage
  return (
    <View>
      <Text>User Name: {currentImage.user}</Text>
      <Text>Tags: {currentImage.tags}</Text>
      <Text>Resolution: {currentImage.imageWidth} x {currentImage.imageHeight}</Text>
      <Image resizeMode='contain' 
             style={{width:"100%", height:"100%"}} 
             source={{uri: currentImage.webformatURL}}
      />
    </View>
  )
}
