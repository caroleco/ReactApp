import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import api from '../src/services/api'


export default class Principal extends React.Component {

  state = {
    counter : 0
  };

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () =>{
    const response = await api.get('/products');
    
    const { docs } = response.data;

    this.setState({ counter: docs.length});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>PRINCIPAL: {this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
