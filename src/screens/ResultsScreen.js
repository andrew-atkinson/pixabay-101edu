import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import {getMoreImageQueryResults} from '../store/reducers/getImageQuery'

class ResultsScreen extends Component {
  constructor(props) {
    super(props)
  }

  onImagePress = id => {
    this.props.navigator.push({
      screen: "pixabay.ImageDetailScreen",
      title: "Image Detail",
      passProps: {
        currentImage: this.props.query.hits.filter(hit => hit.id === id)
      }
    })
  }

  render() {
    return (
      <View>
        <Text>Number of Hits: {this.props.query.total}</Text>
      <FlatList
        style={{width: '100%'}}
        data={this.props.query.hits}
        keyExtractor={(item, index) => index}
        onEndReached={() => this.props.onLoadMoreResults(this.props.currentSearch, ++this.props.query.page)}
        onEndReachedThreshold={0.9}
        renderItem={(info) => (
          <View>
            <TouchableOpacity onPress={() => this.onImagePress(info.item.id)}>
              <Image style={{width: 50, height: 50}} source={{uri:info.item.previewURL}}/>
              <View>
              <Text>Views: {info.item.views}</Text>
              <Text>Downloads: {info.item.views}</Text>
              <Text>Favorites: {info.item.favorites}</Text>
              <Text>Likes: {info.item.likes}</Text>
              </View>
              <Text>User: {info.item.user}</Text>
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
  return {
    onLoadMoreResults: (text, page) => {
      dispatch(getMoreImageQueryResults({text, page}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen)