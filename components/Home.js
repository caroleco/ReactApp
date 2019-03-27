import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
     
        <Text>Usuário</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text>Senha</Text>
        <TextInput style={styles.textInput} password={true} style={styles.default}></TextInput>
        <Button 
          title="Entrar"
          onPress={
            () => this.props.navigation.navigate( 'Principal' )
          }
        />

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
  textInput: {
    height: 10,
    width:40,
    borderColor : 'gray',
    borderWidth:1,
  },
  reposiveImg: {
    width: 70,
    height: 50
  }
});
