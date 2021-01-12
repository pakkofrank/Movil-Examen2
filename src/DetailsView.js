import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'

export default class ArtistList extends Component {
  constructor(props){
    super(props)
    this.state = {
      artist: props.navigation.state.params
    }
    console.log(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.imagen} source={{uri: this.state.artist.image}}/>
          <View style={styles.nombreContainer}>
            <Text style={styles.nombre}>{this.state.artist.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F1F5F5'
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5
  },
  imagen: {
    height: 140,
    width: 140
  },
  nombreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nombre: {
    fontSize: 16
  }
});