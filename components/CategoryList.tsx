import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useEffect } from "react";
import { CategoryEntity } from "../categories/CategoryEntity";
import { RootStackParamList } from "../App";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchCategories, deleteCategory } from "../categories/categorySlice";

const CategoryList: React.FC = () => {
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const dispatch = useDispatch<AppDispatch>();

  // fetch categories on component mount
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]); //Runs only once on mount (without this I get infinite logs from the fetch)

  const handleDelete = (categoryId: number) => {
    dispatch(deleteCategory(categoryId));
  };

  // Render each category
  const renderCategories = ({ item }: { item: CategoryEntity }) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Button
        onPress={() => handleDelete(item.id)} //arrow functions for event handlers
        title="X"
        color="#841584"
        accessibilityLabel="delete category"
      ></Button>
    </View>
  );

  return (
    <View style={styles.container}>
      {categories && categories.length > 0 ? (
        <FlatList
          data={categories}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text>You don't have any categories yet. Add one!</Text>
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
});

export default CategoryList;
