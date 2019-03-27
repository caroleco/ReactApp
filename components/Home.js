import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Usuário</Text>
        <TextInput></TextInput>
        <Text>Senha</Text>
        <TextInput></TextInput>

        <Button 
          title="Go To Profile"
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
});
