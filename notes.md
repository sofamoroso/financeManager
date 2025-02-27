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

---------------------------------------------------------------------------------------

📌 FLOW OF DATA: 

Component calls Context function when a button is pressed.
Context function updates state and calls Service function.
Service function sends an API request to the backend.
Backend processes the request and returns data.
Context updates state, causing UI to refresh automatically

---------------------------------------------------------------------------------------

📌 WHY USING THIS APPROACH?

✅ Separation of Concerns → Each layer has a clear responsibility:
 - Component → UI logic and user interactions.
 - Context → Manages state and calls the service.
 - Service → Handles backend communication.
 - Backend → Stores and retrieves data.

✅ Scalability → If you need to add new features, you only modify one layer without breaking the others.

✅ Reusability → You can call createCategory() from any component without duplicating logic.

---------------------------------------------------------------------------------------


