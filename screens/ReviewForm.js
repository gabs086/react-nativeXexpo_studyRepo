import React from 'react';
import { StyleSheet, Button, TextInput, View, } from 'react-native';
import { styles } from '../styles/globalStyles.js';
import { Formik } from 'formik';

export default function ReviewForm(props) {

  return (
    
    <View style={styles.container}>
        {/* Formik component */}
        {/* initialValues are the states that is passed in the form to have a value */}

      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          console.log(values);
          props.addReview(values)
        }}
      >
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput 
              style={styles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}