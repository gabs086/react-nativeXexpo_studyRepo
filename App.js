import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles/style';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum <Text style={styles.boldText}>dolor</Text> sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>
      
    </View>
  );
}