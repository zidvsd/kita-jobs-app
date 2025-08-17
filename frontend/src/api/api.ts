import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
const API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 5000,
});

export const signInUser = async () => {
  const { username, email, password, role } = useAuthStore.getState();
  try {
    const res = await api.post("auth/signup", {
      username,
      email,
      password,
      role,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logInUser = async () => {
  const { email, password } = useAuthStore.getState();
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
