import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {setSearch} from '../store/reducers/currentSearch'

class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSearch: ''
    }
  }

  onSubmitSearch = () => {
    console.warn("here it is...")
  }

  onChangeTextHandler = currentSearch => {
    this.props.onTextChange(currentSearch)
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TextInput
          placeholder="Search for images"
          onChangeText={this.onChangeTextHandler}/>
        <Button onPress={this.onSubmitSearch} title="Search" color="goldenrod"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: text => {
      dispatch(setSearch(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchScreen)