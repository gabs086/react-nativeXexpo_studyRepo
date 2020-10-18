import React, { useState } from "react";
//pages 
import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';

//To Load exoo-fonts
import * as Font from "expo-font";
import { AppLoading } from "expo";

//React Navigation
import { NavigationContainer } from '@react-navigation/native';

// Drawer for screens
import { createDrawerNavigator } from '@react-navigation/drawer';

//Creating a stack and drawer in the app.js

const Drawer = createDrawerNavigator();

let customFont = {
  "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
};

//function to load asynchronously the font
const getFonts = () => Font.loadAsync(customFont);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  
  //Create Stack for 

  if (fontsLoaded) {
    return (
      //STack of the screens/ (Like react-router-dom)
      <NavigationContainer>

         {/* Drawer Stack */}
         <Drawer.Navigator>
           {/* Created a component for returning the stack screen of Home and Review Details Stack */}
            <Drawer.Screen name="Home" children={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack}
              options={{
                title: 'About Game Zone'
              }}
            />
         </Drawer.Navigator>

        

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
