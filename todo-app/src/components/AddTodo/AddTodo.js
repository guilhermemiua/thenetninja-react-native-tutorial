import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const inputHandler = item => {
    setText(item);
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="Add todo.." onChangeText={inputHandler} />
      <Button style={styles.button} onPress={() => addTodo(text)} title="Add todo" color="coral" />
    </View>
  );
}

export default AddTodo;
