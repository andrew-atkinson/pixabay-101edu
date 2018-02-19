// redux set up
import {Provider} from 'react-redux'
import configureStore from './src/store/config'
const store = configureStore();

//screen set up
import {Navigation} from 'react-native-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'

//register screens
Navigation.registerComponent("pixabay.SearchScreen", () => SearchScreen, store, Provider)
Navigation.registerComponent("pixabay.ResultsScreen", () => ResultsScreen, store, Provider)

//start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "pixabay.SearchScreen",
    title: "Image Search"
  }
})