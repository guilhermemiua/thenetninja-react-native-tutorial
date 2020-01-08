import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    borderColor: '#bbb',
    marginTop: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  todoText: {
    flex: 2,
  },
});

function Todo({ item, deleteTodo }) {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
      <View style={styles.todo}>
        <Text style={styles.todoText}> {item.text} </Text>
        <MaterialIcons name="check" size={18} color="coral" />
      </View>
    </TouchableOpacity>
  );
}

export default Todo;
