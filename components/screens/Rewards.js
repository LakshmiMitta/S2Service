import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Rewards = () => {
  return (
    <View style={styles.container}>
      <Text>Rewards Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Rewards;