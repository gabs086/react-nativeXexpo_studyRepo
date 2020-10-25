import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/globalStyles';
import Card from '../layouts/Card';

export default function ReviewDetails(props) {
  return (
    <View style={styles.container}>
      {/* Use a props.route.params.title to get a specific data in the parameter in the main screen  */}
        <Card>
          <Text>{props.route.params.title}</Text>
          <Text>{props.route.params.body}</Text>
          <Text>{props.route.params.rating}</Text>
        </Card>
    </View>
  );
}