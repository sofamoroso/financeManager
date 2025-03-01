import { View, Text, StyleSheet } from "react-native";
// import { useNavigation, NavigationProp } from "@react-navigation/native";
// import { RootStackParamList } from "../App";
import CategoryList from "../components/CategoryList";
import CreateCategory from "../components/CreateCategory";

function CategoriesScreen() {
  //   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Add a new category</Text>
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
