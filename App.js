import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles/style';

export default function App(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState('');

  const clickHandler = () => {
    setNameValue(name);
    setAgeValue(age);
  };

  return (
    <View style={styles.container}>

      <Text>Enter name:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        value={name}
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        value={age}
        placeholder='e.g. 99' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <View style={styles.buttonContainer}>
        <Button title='submit button' onPress={clickHandler} />  
      </View>        
      
      <Text style={styles.result}>name: {nameValue}, age: {ageValue}</Text>
    </View>
  );
}