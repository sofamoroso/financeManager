import axios from "axios";
import { CategoryEntity } from "../categories/CategoryEntity"; // This model has to match the backend entity

const BASE_URL = "http://192.168.0.189:3000/category"; // Backend API endpoint
// ipconfig

export class CategoryService {
  // GET
  static async getCategories(): Promise<CategoryEntity[]> {
    try {
      const response = await axios.get<CategoryEntity[]>(BASE_URL); // Sending a GET request to the API endpoint using axios

      // console.log("Service - Categories fetched successfully:", response.data);

      return response.data; // Axios' response is typically in the form { data: [...] }
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch categories"); // Return an empty array in case of error
    }
  }

  // POST
  // Service - Create category
  static async createCategory(
    category: CategoryEntity
  ): Promise<CategoryEntity> {
    try {
      const response = await axios.post<CategoryEntity>(
        BASE_URL,
        {
          name: category.name, // Send only the name (NOT the id)
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw new Error("Failed to create category");
    }
  }

  // DELETE
  static async deleteCategory(categoryId: number): Promise<number> {
    try {
      await axios.delete(`${BASE_URL}/${categoryId}`);
      console.log("Category deleted:", categoryId);
      return categoryId; // if i Promise<number> then i have to return a value, so redux can use it
    } catch (error) {
      console.error("Error deleting category:", error);
      throw new Error("Failed to delete category");
    }
  }
}
