import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./components/Todo";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import CategoryList from "./components/CategoryList";
import CreateCategory from "./components/CreateCategory";
import { CategoryProvider } from "./context/CategoryContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <CategoryProvider>
        <SafeAreaView style={styles.container}>
          <Text>Hello, this is my first App</Text>
          <CreateCategory></CreateCategory>
          <CategoryList></CategoryList>
          <StatusBar style="auto" />
        </SafeAreaView>
      </CategoryProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
  },
});
