import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header(props) {

    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");
    
    //Get the current width automatically
    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
      setDimensions({ window, screen });
    };
    
  const openMenu = (_) => {
    props.navigation.openDrawer();
  };

//   Keepp the width automaticall adjust
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });


  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
    //Get the width base in the dimension of the screen of the mobile phone
      style={{...styles.header, width: dimensions.screen.width}}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImg}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: -15,
  },
  headerTitle: {
    //Default of view is column must change to realign them at one row
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
  headerImg: {
    width: 26,
    height: 26,
    //so the iamge have margin to other elements beside it
    marginHorizontal: 10,
  },
});
