import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    // flex :1 takes all the space inside a component 
    container: {
      paddingTop: 40,
      backgroundColor: '#ddd',
      flexDirection: 'row',
      //takes all the content inside to center
      justifyContent: "space-around", //determines how to display different component on the main axis
      alignItems: 'flex-end'
    },
    boxOne: {
      flex: 1,
      backgroundColor: 'violet',
      padding: 10,
    },
    boxTwo: {
      flex: 2,
      backgroundColor: 'gold',
      padding: 20,
    },
    boxThree: {
      flex: 3,
      backgroundColor: 'coral',
      padding: 30,
    },
    boxFour: {
      flex: 4,
      backgroundColor: 'skyblue',
      padding: 40,
    }
  });