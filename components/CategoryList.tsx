import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryService } from "../categories/CategoryService";
import { CategoryEntity } from "../categories/CategoryEntity";

export default function CategoryList() {
  const [categoryList, setCategoryList] = React.useState(
    [] as CategoryEntity[] // Initial state is an empty array
  );

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await CategoryService.getCategories(); // Call service to fetch categories
      setCategoryList(categories);
    };

    fetchCategories(); // Call fetchCategories when the component is mounted
  }, []);

  // Render each category
  const renderCategory = ({ item }: { item: CategoryEntity }) => (
    <View>
      <Text style={styles.text}>{item.title}</Text>{" "}
      {/* Display category name */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <FlatList
        data={categoryList}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        style={{ flexGrow: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "honeydew",
    backgroundColor: "cornflowerblue",
    padding: 10,
    marginBottom: 5,
  },
});
