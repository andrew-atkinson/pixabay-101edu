import {Navigation} from 'react-native-navigation'

const startMainScreens = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "pixabay.ImageSearchScreen",
      title: "Image Search"
    },
    animationType: 'slide-down'
  })
}

export default startMainScreens