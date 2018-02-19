import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {setSearch} from '../store/reducers/currentSearch'
import {getImageQueryResults} from '../store/reducers/getImageQuery'


class SearchScreen extends Component {
  constructor(props) {
    super(props)
  }

  onSubmitSearch = () => {
    console.log("here it is...", this.props.currentSearch)
    this.props.onQuerySubmit(this.props.currentSearch)
  }

  onChangeTextHandler = currentSearch => {
    console.log(this.state)
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

const mapStateToProps = state => {
  console.log('state', state)
  return {
    currentSearch: state.currentSearch,
    query: state.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: text => {dispatch(setSearch(text))},
    onQuerySubmit: text => {dispatch(getImageQueryResults(text))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)