import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles/style';

export default function App(props) {
  const [name, setName] = useState('gab');
  const [person, setPerson] = useState({ name: 'mario', age: 40 });

  const clickHandler = () => {
    setName('angge');
    setPerson({ name: 'gavee', age: 45 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>

      <Text>His name is {person.name} and his age is {person.age}</Text>

      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />  
      </View>

    </View>
  );
}