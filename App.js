import React, { useState } from "react";
import Home from "./screens/Home";
//To Load exoo-fonts
import * as Font from "expo-font";
import { AppLoading } from "expo";

let customFont = {
  "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
};

//function to load asynchronously the font
const getFonts = (_) => Font.loadAsync(customFont);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={(_) => setFontsLoaded(true)}
      />
    );
  }
}
