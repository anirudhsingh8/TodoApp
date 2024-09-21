import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  if (todos.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text>Nothing added yet 🥲</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.todos}>
        <FlatList
          data={todos}
          keyExtractor={(todo, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TodoItem title={item} onDelete={() => onDelete(index)} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  emptyState: {
    flex: 1,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  todos: {
    flex: 1,
    marginTop: 12,
  },
});

export default TodoList;
