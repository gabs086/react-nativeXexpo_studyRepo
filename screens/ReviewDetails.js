import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { styles } from '../styles/globalStyles';
import Card from '../layouts/Card';

const imageUrl = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }  
}

export default function ReviewDetails(props) {

  // Rating data 
  const { rating } = props.route.params;
  
  return (
    <View style={styles.container}>
      {/* Use a props.route.params.title to get a specific data in the parameter in the main screen  */}
        <Card>
          <Text>{props.route.params.title}</Text>
          <Text>{props.route.params.body}</Text>
          {/* Get ratings and show images by rate */}
            <View style={styles2.rating}>
                 <Text>GameZone Rating</Text>
                  <Image 
                  // Image source cannot have concatinations of strings in require 
                  // to include images dynamically, use a string that will dynamically import images base on the rating 

                  // The array bracket will depend what rating data has been passed through the route 
                    source={imageUrl.ratings[rating]}
                  />
            </View>
        </Card>
    </View>
  );
}

const styles2 = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
})