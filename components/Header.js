import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/header';

export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>
    );
  }