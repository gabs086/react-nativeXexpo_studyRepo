import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();
//  About Page Stack 
export default function AboutStack () {
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
    name="About" 
    component={About}
    options={{ 
      title: 'About Game Zone',
     
  }}
     />
  </Stack.Navigator> 
    )
} 