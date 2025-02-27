// I'm abstracting the logic for fetching categories from the backend using an HTTP request.
// This makes the code modular and reusable.

import axios from "axios";
import { CategoryEntity } from "../categories/CategoryEntity"; // This model has to match the backend entity

const BASE_URL = "http://10.59.162.92:3000/category"; // Backend API endpoint
// ipconfig

export class CategoryService {
  // GET
  static async getCategories(): Promise<CategoryEntity[]> {
    try {
      const response = await axios.get<CategoryEntity[]>(BASE_URL); // Sending a GET request to the API endpoint using axios

      console.log("Service - Categories fetched successfully:", response.data);

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
