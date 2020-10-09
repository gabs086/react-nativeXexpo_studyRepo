import React, { useState } from "react";
import {
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles/style";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    //Delete a previous state that the key is not equal to the presState key
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => {
        return [
          // saves another data in the array state

          { text: text, key: Math.random().toString() },

          ...prevState,
        ];
      });
    } else {
      // Alert component takes the 1st parameter as the title and the message of the alert
      // 2nd parameter is the button title and its callback function (onPress, etc.)
      Alert.alert(
        "ERROR",
        "Your todos must be 3 characters long",
        [
          { text: "Understood", onPress: () => console.log("alert closed") },
          // Cancelled is the option that you can click outside the alert
        ],
        { cancelable: true }
      );
    }
  };

  return (
    // TouchableWithoutFeedback enables you to click in anypart of the screen to 
    // dismiss or do something. Ex: dismissig a keyboard  
    <TouchableWithoutFeedback onPress={ _ => {
        Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          {/* Form to add new todos  */}
          <AddTodo submitHandler={submitHandler} />

          {/* Todo component  */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              //Render the TodoItemComponent with the props of the item
              renderItem={(props) => (
                <TodoItem item={props.item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
