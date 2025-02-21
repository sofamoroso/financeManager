import React, { createContext, useContext, useState, useEffect } from "react";
import { CategoryEntity } from "../categories/CategoryEntity";
import { CategoryService } from "../categories/CategoryService";

interface CategoryContextType {
  categories: CategoryEntity[];
  fetchCategories: () => Promise<void>;
  addCategory: (title: string) => Promise<void>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);

  // Fetch categories from API when the app starts - calls the backend
  const fetchCategories = async () => {
    try {
      const data = await CategoryService.getCategories(); // .getCategories comes from CategoryService. Call API
      setCategories(data); // update states
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Add a new category, send a request to Service
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

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, addCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// Custom hook for easy access
export const useCategoriesFunctions = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
};
// it returns an object that looks like this
// {
//   categories: CategoryEntity[], // List of categories
//   fetchCategories: () => Promise<void>,
//   addCategory: (title: string) => Promise<void>,
// }
