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
    const nextPage = this.props.query.page + 1
    return (
      <View style={styles.container}>
        <Text>Number of Hits: {this.props.query.total}</Text>
      <FlatList
        style={{width: '100%'}}
        data={this.props.query.hits}
        keyExtractor={(item, index) => index}
        onEndReached={() => this.props.onLoadMoreResults(this.props.currentSearch, nextPage)}
        onEndReachedThreshold={0.9}
        renderItem={(info) => (
          <View>
            <TouchableOpacity style={styles.listItem} onPress={() => this.onImagePress(info.item.id)}>
              <View style={styles.imageItemContainer}>
                <Image resizeMode="contain" style={styles.imageItem} source={{uri:info.item.previewURL}}/>
              </View>
              <View style={styles.listItemInfoContainer}>
                <Text>Views: {info.item.views}</Text>
                <Text>Downloads: {info.item.views}</Text>
                <Text>Favorites: {info.item.favorites}</Text>
                <Text>Likes: {info.item.likes}</Text>
                <Text>User: {info.item.user}</Text>
              </View>
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
    flex: 1,
    margin:10
  },
  listItem:{
    flexDirection: "row",
    marginBottom: 5
  },
  imageItem:{
    width: 75,
    height: 50,
    padding: 10
  },
  imageItemContainer:{
    flex:1,
    backgroundColor:"#eee",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemInfoContainer: {
    flex:2,
    backgroundColor:"#ddd",
    padding: 10
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