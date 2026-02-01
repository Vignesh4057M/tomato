import axios from "axios";

// baseURL points to your backend
const API = axios.create({
  baseURL: "http://localhost:3000/api/",
});

// Get all food items
export const getFoods = () => API.get("/");

// Add new food item (for admin use)
export const addFood = (foodData) => API.post("/", foodData);

// Update existing food item
export const updateFood = (id, updatedData) => API.put(`/${id}`, updatedData);

// Delete food item
export const deleteFood = (id) => API.delete(`/${id}`);
