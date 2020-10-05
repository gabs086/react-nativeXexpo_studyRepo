import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles/style';
import Header from './components/Header';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const renderItem = ({ item }) => (
    <Text>{item.text}</Text>
  );
  

  return (
    <View style={styles.container}>
        <Header />
        
        <View style={styles.content}>

          {/* Todo component  */}
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={renderItem}
              />
          </View>

        </View>

    </View>
  )
};


export default App;
