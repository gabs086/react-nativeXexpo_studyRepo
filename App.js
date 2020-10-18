import React, { useState } from "react";
//pages 
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";

//To Load exoo-fonts
import * as Font from "expo-font";
import { AppLoading } from "expo";

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Creating a stack in the app.js
const Stack = createStackNavigator();

let customFont = {
  "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
};

//function to load asynchronously the font
const getFonts = () => Font.loadAsync(customFont);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      //STack of the screens/ (Like react-router-dom)
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#eee',
              // height: 60
            },
            headerTintColor: '#444',
          }}
        >

          <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            title: 'Game Zone',
            // headerStyle: {
            //   backgroundColor: '#eee'
            // }
        }}
           />
           
           <Stack.Screen 
          name="ReviewDetails" 
          component={ReviewDetails}
          options={{ 
            title: 'Game Review',
            // headerStyle: {
            //   backgroundColor: '#eee'
            // }
          }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={(_) => setFontsLoaded(true)}
      />
    );
  }
}
