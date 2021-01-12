import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  imprimirDatos = () => {
    //console.log(`Hola, ${this.state.username}, ${this.state.password}`);
    //alert(`${this.state.username}, ${this.state.password}`);
    Actions.home();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={[styles.box, styles.imagen]}
          source={{uri: 'https://www.bbva.com/wp-content/uploads/2018/03/datos-BBVA-e1521471248593.jpg'}}
        />
        <TextInput
          style={[styles.box, styles.usuario]}
          onChangeText={(t) => this.setState({username: t})}
          value={this.state.username}
        />
        <TextInput
          style={[styles.box, styles.contrasena]}
          onChangeText={(t) => this.setState({password: t})}
          value={this.state.password}
        />
        <Button
          style={[styles.box]}
          onPress={this.imprimirDatos}
          title="Iniciar sesión"
          color="#7C869E"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1F5F5',
  },
  box: {
    width: 250,
    height: 100,
    marginTop: 30
  },
  imagen: {
    backgroundColor: '#9C2917',
    height: 150,
    marginTop: 50
  },
  usuario: {
    height: 40,
    marginTop: 40,
    borderColor: '#CC9C35',
    borderWidth: 3
  },
  contrasena: {
    height: 40,
    borderColor: '#CC9C35',
    borderWidth: 3, 
    marginBottom: 20
  },
  
});