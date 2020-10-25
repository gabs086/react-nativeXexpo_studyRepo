import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import { styles } from '../styles/globalStyles';
//Import the card component
import Card from '../layouts/Card';

export default function Home(props) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  // Better way to render components. My Style 
  const renderItem = ({ item }) => {
    return (

            <TouchableOpacity onPress={_ => props.navigation.navigate('ReviewDetails', item)}>
                <Card>
                   <Text style={styles.titleText}>{item.title}</Text>
                </Card>
            </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titleText}>Home Screen </Text> */}
          <FlatList 
            data={reviews}
            renderItem={renderItem}
          />
    </View>
  );
}


