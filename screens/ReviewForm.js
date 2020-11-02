import React from 'react';
import { StyleSheet, Button, TextInput, View, } from 'react-native';
import { styles } from '../styles/globalStyles.js';
import { Formik } from 'formik';
import * as yup from 'yup';

// The validation for each oinput 
const reviewValidationSchema = yup.object({
    // Check the title if its a string and has a length four and above and its required
    title: yup.string()
      .required()
      .min(4),
    // Check the body if its a string and has a length four and above and its required
    body: yup.string()
      .required()
      .min(8),
    // Check the if the rating is a number that is less than 6 and greater than 0
    rating: yup.string()
      .required()
      .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

export default function ReviewForm(props) {

  return (
    
    <View style={styles.container}>
        {/* Formik component */}
        {/* initialValues are the states that is passed in the form to have a value */}

      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewValidationSchema}
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