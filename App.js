import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles/style';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = key => {
    //Delete a previous state that the key is not equal to the presState key
    setTodos(prevState => {
      return prevState.filter(todo => todo.key !== key)
    });
  }
 

  return (
    <View style={styles.container}>
        <Header />
        
        <View style={styles.content}>

          {/* Todo component  */}
          <View style={styles.list}>
              <FlatList
                data={todos}
                //Render the TodoItemComponent with the props of the item
                renderItem={props => (
                  <TodoItem item={props.item} pressHandler={pressHandler}/>
                )}
              />
          </View>

        </View>

    </View>
  )
};


export default App;
