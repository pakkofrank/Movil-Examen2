import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, FlatList, ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux'

export default class ArtistList extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false
    }
  }

  renderRefreshControl() {
    this.setState({ isLoading: true })
  }

  render() {
    const Item = ({ image, name }) => (
      <View style={styles.item} onTouchEnd={() => Actions.details({ image, name })}>
        <Image style={styles.imagen} source={{uri: image}}/>
        <View style={styles.nombreContainer}>
          <Text style={styles.nombre}>{name}</Text>
        </View>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item name={item.name} image={item.image} />
    )

    return (
      <FlatList
        data={this.props.data.artists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={() => this.renderRefreshControl()}
        refreshing={this.state.isLoading}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5
  },
  imagen: {
    height: 140,
    width: 140
  },
  nombreContainer: {
    flex: 1,
    alignItems: 'center'
  },
  nombre: {
    fontSize: 16
  }
});