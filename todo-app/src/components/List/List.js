import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Todo from '../Todo/Todo';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
});

function List({ todos, deleteTodo }) {
  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <Todo item={item} deleteTodo={deleteTodo} />}
      />
    </View>
  );
}

export default List;
