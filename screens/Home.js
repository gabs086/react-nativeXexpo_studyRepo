import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function Home(props) {

    const navigateToDetails = _ => {
      // props.navigation.navigate('ReviewDetails');
      //Other way of going to another screen
      props.navigation.push('ReviewDetails')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen </Text>
      <Button title="Review Page" onPress={navigateToDetails}/>
    </View>
  );
}


