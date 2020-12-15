import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
 
export default class BlueScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Customers Screen </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: 0,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
});