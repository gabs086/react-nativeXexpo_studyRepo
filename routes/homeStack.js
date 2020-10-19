import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

//other components
import Header from '../layouts/Header';

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
    // To register the header component to be part of the navigation
    options = {({ navigation }) => ({
      headerTitle: _ => <Header title="Game Zone" navigation={navigation} />,
    })}
    //  options={{
    //           headerTitle: props => <Header />
    //      }}
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