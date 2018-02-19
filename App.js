// redux set up
import {Provider} from 'react-redux'
import configureStore from './src/store/config'
const store = configureStore();

//screen set up
import {Navigation} from 'react-native-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'
import ImageDetailScreen from './src/screens/ImageDetailScreen'

//register screens
Navigation.registerComponent("pixabay.SearchScreen", () => SearchScreen, store, Provider)
Navigation.registerComponent("pixabay.ResultsScreen", () => ResultsScreen, store, Provider)
Navigation.registerComponent("pixabay.ImageDetailScreen", () => ImageDetailScreen)

//start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "pixabay.SearchScreen",
    title: "Image Search"
  }
})