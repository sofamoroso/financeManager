import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { CategoryEntity } from "../categories/CategoryEntity";
import { useCategoriesFunctions } from "../context/CategoryContext";

const CategoryList: React.FC = () => {
  const { categories } = useCategoriesFunctions(); // Get categories from Context (we are destructing here)

  // Render each category
  const renderCategories = ({ item }: { item: CategoryEntity }) => (
    <View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Categories</Text>
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
    justifyContent: "center",
    padding: 16,
  },
  list: {
    paddingBottom: 16,
  },
  item: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 8,
    marginVertical: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CategoryList;
