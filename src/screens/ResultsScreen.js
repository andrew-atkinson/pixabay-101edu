import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import {setSearch} from '../store/reducers/currentSearch'
import {getImageQueryResults} from '../store/reducers/getImageQuery'

class ResultsScreen extends Component {
  constructor(props) {
    super(props)
  }

  onChangeTextHandler = currentSearch => {
    this.props.onTextChange(currentSearch)
  }

  render() {
    return (
      <View>
      <FlatList
        style={{width: '100%'}}
        data={this.props.query.hits}
        renderItem={(info) => (
          <View>
            <TouchableOpacity>
              <Text>{info.item.id}</Text>
              <Image style={{width: 50, height: 50}} source={{uri:info.item.previewURL}}/>
            </TouchableOpacity>
          </View>
        )}
      />
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
  return {currentSearch: state.currentSearch, query: state.query}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen)