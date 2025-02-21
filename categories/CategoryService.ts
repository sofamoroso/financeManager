// I'm abstracting the logic for fetching categories from the backend using an HTTP request.
// This makes the code modular and reusable.

import axios from "axios";
import { CategoryEntity } from "../categories/CategoryEntity"; // This model has to match the backend entity

const BASE_URL = "http://10.58.131.50:3000/category"; // Backend API endpoint
// ipconfig

export class CategoryService {
  // GET
  static async getCategories(): Promise<CategoryEntity[]> {
    try {
      // Sending a GET request to the API endpoint using axios
      const response = await axios.get<CategoryEntity[]>(BASE_URL);

      // Returning the fetched categories from the response
      return response.data; // Axios' response is typically in the form { data: [...] }
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch categories"); // Return an empty array in case of error
    }
  }

  // POST
  static async createCategory(
    category: CategoryEntity
  ): Promise<CategoryEntity> {
    try {
      const response = await axios.post<CategoryEntity>(BASE_URL, category, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw new Error("Failed to create category");
    }
  }

  // DELETE
}
