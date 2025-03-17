import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryService } from "./CategoryService";
import { CategoryEntity } from "./CategoryEntity";

//create the thunk
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (thunkAPI) => {
    const categories = await CategoryService.getCategories();
    return categories;
  }
);

export const createCategory = createAsyncThunk(
  "categories/create",
  async (category: CategoryEntity, thunkAPI) => {
    return await CategoryService.createCategory(category);
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (categoryId: number, thunkAPI) => {
    return await CategoryService.deleteCategory(categoryId);
  }
);

interface CategoryState {
  categories: CategoryEntity[];
  errormessage: string;
}

const initialState: CategoryState = {
  categories: [],
  errormessage: "",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log(action.payload);
      state.categories = action.payload;
    }),
      builder.addCase(createCategory.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.categories.push(action.payload);
      }),
      builder.addCase(deleteCategory.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;
