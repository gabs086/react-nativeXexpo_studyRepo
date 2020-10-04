import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from './styles/style';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
//Component for each item
//Style prop is the for the render of background color and color when the onpress function is executed, it will change the font ang background color
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title, style}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Rendering item in the flatlist 
  const renderItem = ({ item }) => {
  // if the item id is not selected it will have a pink bgcolor else if its id is selected it will be violet color
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // Same as the color of font  if the id is not selected it will be white, else black
    const color = item.id === selectedId ? "black": "white";

    return (
      <Item
        item={item}
        onPress={_ => setSelectedId(item.id)}
        style={{ backgroundColor, color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      {/*
      data prop: array of datas
      renderItem props: what component will the flatlist render
      keyExtractor: key id in the array of data
      extraData: for rerendering the component if the state indicated in the prop changes 
       */}

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};


export default App;
