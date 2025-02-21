📌 CategoryContext.tsx (State Management & Global Store)

- It manages the application's state for categories.
- Stores the category list in React state so UI updates immediately.
- Provides functions (fetchCategories, addCategory) to update state when API changes happen.
- Components subscribe to this context instead of fetching data themselves.
- All components that use useCategories() will re-render with the latest data

📌 CategoryService.ts (Handles API Calls)

- It’s a utility file that contains functions to interact with the backend API.
- It's only responsible for talking to the backend. (separation of concerns)
- It fetches data from the server (getCategories) and sends new data (createCategory).
- It does not store data — it just provides functions to make HTTP requests.

📌 CategoryList.ts (Display the Categories)

- It gets the latest category list from context instead of calling the API directly.

🔹 When the App Starts (Fetching Categories)

🔹 When a User Adds a New Category
