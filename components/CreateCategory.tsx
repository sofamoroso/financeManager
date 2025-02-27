import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useCategoriesFunctions } from "../context/CategoryContext";

const CreateCategory: React.FC = () => {
  const [newCategory, setNewCategory] = useState("");
  const { addCategory, categories } = useCategoriesFunctions(); // Get addCategory function from Context

  const onAddCategory = async () => {
    if (!newCategory.trim()) return; // Prevent empty categories
    await addCategory(newCategory); // Add category through Context API
    setNewCategory(""); // Clear input field after submission
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
