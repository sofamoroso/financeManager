import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import React from "react";
import { CategoryEntity } from "../categories/CategoryEntity";
import { useCategoriesFunctions } from "../context/CategoryContext";

const CategoryList: React.FC = () => {
  const { categories } = useCategoriesFunctions(); // Get categories from Context (we are destructuring here)

  // Render each category
  const renderCategories = ({ item }: { item: CategoryEntity }) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  // const onTest = async () => {
  //   console.log("test console log", categories);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CATEGORIES</Text>
      {/* <Button
        onPress={onTest}
        title="test"
        color="#841584"
        accessibilityLabel="test"
      /> */}
      {categories.length > 0 ? (
        <FlatList
          data={categories}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 16,
  },
  categoryContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  header: {
    fontWeight: "bold",
  },
});

export default CategoryList;
