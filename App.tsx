import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./components/Todo";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import CategoryList from "./components/CategoryList";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Helloooo</Text>
        <CategoryList></CategoryList>
        <Todo></Todo>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
});
