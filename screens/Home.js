import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles/globalStyles";
//Import the card component
import Card from "../layouts/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

export default function Home(props) {
  //Modal State
  const [modal, setModal] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  //Action in adding new data in the reviews
  const addReview = (review) => {
    // review parameter are the data passed in the function

    //Generate a new key for the review
    review.key = Math.random().toString();

    // Get the current data and add new incoming data
    setReviews((prevState) => {
      return [review, ...prevState];
    });

    // close the modal after submition
    setModal(false);
  };

  // Better way to render components. My Style
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={(_) => props.navigation.navigate("ReviewDetails", item)}
      >
        <Card>
          <Text style={styles.titleText}>{item.title}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Modal Component here */}
      <Modal visible={modal} animationType="fade">
        {/* Dismiss the keyboard if wanted */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles2.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={styles2.modalClose}
              onPress={() => setModal(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Toggle to open the */}
      <MaterialIcons
        name="add"
        size={24}
        style={styles2.modalToggle}
        onPress={() => setModal(true)}
      />

      {/* <Text style={styles.titleText}>Home Screen </Text> */}
      <FlatList data={reviews} renderItem={renderItem} />
    </View>
  );
}

const styles2 = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "right",
    marginRight: 10,
    color: "red",
  },
  modalContent: {
    flex: 1,
  },
});
