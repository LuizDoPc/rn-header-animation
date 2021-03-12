import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

const Card = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Card</Text>
    </TouchableOpacity>
  );
};

export default Card;
