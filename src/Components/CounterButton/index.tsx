import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ICounterButton} from './CounterButton';

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },

  symbol: {
    fontSize: 18,
    color: '#FFF',
  },
});

const CounterButton = ({symbol, onPress}: ICounterButton) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.symbol}>{symbol}</Text>
  </TouchableOpacity>
);

export default CounterButton;
