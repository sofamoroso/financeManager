import React, { createContext, useContext, useState, useEffect } from "react";
import { CategoryEntity } from "../categories/CategoryEntity";
import { CategoryService } from "../categories/CategoryService";

interface CategoryContextType {
  categories: CategoryEntity[];
  fetchCategories: () => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  removeCategory: (id: number) => Promise<void>;
}

// 1. Create the context with an initial empty state
const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

// 2. CategoryProvider component that will provide the context to the rest of the app
export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);

  // 2.1 Function to fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const data = await CategoryService.getCategories(); // Fetch categories from service
      // console.log("Categories fetched inside provider:", data); // Debugging log
      setCategories(data); // Update states
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // 2.2 Call fetchCategories on component mount
  useEffect(() => {
    fetchCategories();
  }, []); // Empty dependency array means this runs only once on mount

  // 2.3 Function to add a new category and refresh data
  const addCategory = async (name: string) => {
    try {
      await CategoryService.createCategory(new CategoryEntity(name));
      const updatedCategories = await CategoryService.getCategories(); // Re-fetch all categories
      setCategories(updatedCategories); // Update state with fresh data
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category. Please try again.");
    }
  };

  // 2.4 Function to delete a category
  const removeCategory = async (id: number) => {
    try {
      await CategoryService.deleteCategory(id);
      const updatedCategories = await CategoryService.getCategories(); // Re-fetch all categories
      setCategories(updatedCategories); // Update state with fresh data
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  };

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, addCategory, removeCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// 3. Custom hook for easy access
// it returns an object that looks like this
// {
//   categories: CategoryEntity[], // List of categories
//   fetchCategories: () => Promise<void>,
//   addCategory: (title: string) => Promise<void>,
// }
export const useCategoriesFunctions = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
};
