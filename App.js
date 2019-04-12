import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    const onPress = () => this.setState({counter: this.state.counter + 1 })
    const theTruth = `Your life sucked ${ this.state.counter } time(s).`
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>How's life?</Text>
        <Button color="#841584" title="Click here if life sucks at the moment" onPress={onPress} />
        <Text style={styles.welcome}> {theTruth} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
