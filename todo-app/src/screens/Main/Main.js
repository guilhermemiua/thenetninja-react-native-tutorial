import React, { useState } from 'react';
import { StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { registerRootComponent } from 'expo';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import AddTodo from '../../components/AddTodo/AddTodo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
});

function Main() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy coffee' },
    { id: 2, text: 'Pay the bills' },
    { id: 3, text: 'Go to the gym' },
  ]);

  const addTodo = text => {
    if (text.length <= 0) {
      Alert.alert('OOPS!', 'Text cannot be empty', [
        {
          text: 'Understood',
        },
      ]);

      return;
    }

    setTodos(prevTodos => {
      return [...prevTodos, { id: prevTodos.length + 1, text }];
    });
  };

  const deleteTodo = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <List todos={todos} deleteTodo={deleteTodo} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default registerRootComponent(Main);
