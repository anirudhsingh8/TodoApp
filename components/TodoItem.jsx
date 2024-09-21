import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default TodoItem = ({ title, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#FDFAD9",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginVertical: 8,
  },
  text: {
    flex: 1,
  },
});
