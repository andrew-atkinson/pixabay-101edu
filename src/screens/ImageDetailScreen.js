import React from 'react'
import {View, Text, Image} from 'react-native'

export default ImageDetailScreen = props => {
  const [currentImage] = props.currentImage
  return (
    <View>
      <Image resizeMode='contain' 
             style={{width:"100%", height:"100%"}} 
             source={{uri: currentImage.webformatURL}}
      />
    </View>
  )
}
