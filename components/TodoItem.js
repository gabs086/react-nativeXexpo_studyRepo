import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../styles/todoItem';
//Expo Icons
import { MaterialIcons } from '@expo/vector-icons';

//Passing the component with props in the App.js
export default function TodoItem(props) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={_ => props.pressHandler(props.item.key)}>
                 <MaterialIcons name="delete" size={24} color="#FF0000"/>
            </TouchableOpacity>

             <Text style={styles.itemText}>{props.item.text}</Text>
        </View>

    );
}
