import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TodoAppScreen from './screens/TodoAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView />
      <TodoAppScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
});
