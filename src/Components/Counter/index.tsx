import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CounterButton from '../CounterButton';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <CounterButton symbol="-" onPress={() => setCounter(counter - 1)} />
      <Text>{counter}</Text>
      <CounterButton symbol="+" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

export default Counter;
