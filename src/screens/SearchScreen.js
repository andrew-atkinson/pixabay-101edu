import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View, TextInput, Button, StyleSheet, ImageBackground} from 'react-native'
import ButtonWithBackground from '../Components/UI/ButtonWithBackground'

import {setSearch} from '../store/reducers/currentSearch'
import {getImageQueryResults} from '../store/reducers/getImageQuery'

import imageBackground from '../assets/bg.jpg'

class SearchScreen extends Component {
  constructor(props) {
    super(props)
  }

  onSubmitSearch = () => {
    if (this.props.currentSearch.trim() === '') 
      return;
    this.props.onQuerySubmit(this.props.currentSearch)
    this.props.navigator.push({
        screen: "pixabay.ResultsScreen",
        title: this.props.currentSearch,
        passProps: {
          query: this.props.query
        }
      })
  }

  onChangeTextHandler = currentSearch => {
    this.props.onTextChange(currentSearch)
  }

  render() {
    return (
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <View style={styles.container}>
          <TextInput
            placeholder="Search for images"
            onChangeText={this.onChangeTextHandler}
            style={styles.textInput}/>
          <ButtonWithBackground onPress={this.onSubmitSearch} color="goldenrod">Search</ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20
  },
  imageBackground: {
    flex: 1
  },
  textInput: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    margin: 5
  }
})

const mapStateToProps = state => {
  return {currentSearch: state.currentSearch, query: state.query}
}

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: text => {
      dispatch(setSearch(text))
    },
    onQuerySubmit: text => {
      dispatch(getImageQueryResults({text}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)