import { View, StyleSheet } from "react-native";
import CategoryList from "../components/CategoryList";
import CreateCategory from "../components/CreateCategory";

function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <CreateCategory />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
  },
});

export default CategoriesScreen;
