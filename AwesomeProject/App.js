import React from 'react';
import { StyleSheet, View } from 'react-native';
import PizzaTranslator from './PizzaTranslator'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <PizzaTranslator />
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
