import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/todoItem';

//Passing the component with props in the App.js
export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={_ => props.pressHandler(props.item.key)}>
                    <Text style={styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    );
}
