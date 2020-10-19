import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

//other components
import Header from '../layouts/Header';

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
    // To register the header component to be part of the navigation
    options = {({ navigation }) => ({
      headerTitle: props => <Header title="About Game Zone" navigation={navigation} />,
    })}
  //   options={{ 
  //     headerTitle: props => <Header /> 
  // }}
     />
  </Stack.Navigator> 
    )
} 