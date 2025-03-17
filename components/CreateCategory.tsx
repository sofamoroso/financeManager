import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../categories/categorySlice";
import { CategoryEntity } from "../categories/CategoryEntity";

const CreateCategory: React.FC = () => {
  const [newCategory, setNewCategory] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: RootState) => state.category.errormessage);

  const onAddCategory = async () => {
    if (!newCategory.trim()) return; // Prevent empty categories
    const categoryName = new CategoryEntity(newCategory);
    dispatch(createCategory(categoryName));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CREATE A NEW CATEGORY</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewCategory}
        value={newCategory}
        placeholder="Enter category name"
      />
      <Button
        onPress={onAddCategory}
        title="Add category"
        color="#841584"
        accessibilityLabel="Add category"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontWeight: "bold",
  },
});

export default CreateCategory;
