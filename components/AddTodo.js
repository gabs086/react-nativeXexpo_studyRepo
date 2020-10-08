import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo(props) {
    const [text, setText] = useState('');

    return (
        <View>
            {/* TextInput component for adding todos */}
            <TextInput 
                style={styles.input}
                placeholder='new todo...'
                onChangeText={val => setText(val)}
                value={text}
            />
            <Button color='coral' onPress={() => props.submitHandler(text)} title='add todo' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
  });
