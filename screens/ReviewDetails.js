import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function ReviewDetails(props) {

  const backToHome = _ => {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="Back to home screen" onPress={backToHome} />
    </View>
  );
}