import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    position: 'relative',
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: 'grey',
  },
  text1: {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text2: {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <TextInput placeholder="Search" style={styles.txt} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.black}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.black}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.black}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
