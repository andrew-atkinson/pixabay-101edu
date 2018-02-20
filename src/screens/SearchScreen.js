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
    if (this.props.currentSearch.trim() === '') return;
    this.props.onQuerySubmit(this.props.currentSearch, this.props.query.page++)
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
  return {
    currentSearch: state.currentSearch, 
    query: state.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: text => {
      dispatch(setSearch(text))
    },
    onQuerySubmit: (text, page) => {
      dispatch(getImageQueryResults({text, page}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)