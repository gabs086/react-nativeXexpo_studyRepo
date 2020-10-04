import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles/style';

export default function App(props) {
    const [people, ] = useState([
      {person: 'gab', key: '1'},
      {person: 'angge', key: '2'},
      {person: 'nellie', key: '3'},
      {person: 'cielo', key: '4'},
      {person: 'hammer', key: '5'},
      {person: 'dennis', key: '6'},
      {person: 'jerome', key: '7'},
      {person: 'shayne', key: '8'},
    ]);

  return (
    <View style={styles.container}>
      {/* Scrollviewing if items is longer and need to scrolldown */}
      <ScrollView>
      {
        people.map(person =>  (
            <View key={person.key}>
                <Text style={styles.item}>
                   {person.person}
                </Text>
              </View>
          ))
      }
      </ScrollView>
    </View>
  );
}