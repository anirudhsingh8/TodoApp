import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import TodoList from "../components/TodoList";

const TodoAppScreen = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTodoTextChange(val) {
    setTodoText(val);
  }

  function addTodo() {
    if (todoText.trim() === "") return;

    setTodos((old) => [todoText, ...old]);
    setTodoText("");
  }

  function handleDelete(index) {
    setTodos((old) => {
      old.splice(index, 1);
      return [...old];
    });
  }

  return (
    <>
      <Text style={styles.header}> Todos</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Start adding here"
          style={styles.textInput}
          value={todoText}
          onChangeText={handleTodoTextChange}
        />
        <Button title="ADD" onPress={addTodo} />
      </View>
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#C1E2A4",
    height: 50,
    fontSize: 24,
    color: "white",
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default TodoAppScreen;
