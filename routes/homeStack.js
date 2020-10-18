import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();
// Home and Review Details Stack 
export default function HomeStack () {
    return (
<Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
    }}
  >
    <Stack.Screen 
    name="Home" 
    component={Home}
    options={{ 
      title: 'Game Zone',
     
  }}
     />
    <Stack.Screen 
    name="ReviewDetails" 
    component={ReviewDetails}
    options={{ 
      title: 'Game Review',

    }}
     />
  </Stack.Navigator> 
    )
} 