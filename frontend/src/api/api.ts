import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000,
});

export const signInUser = async () => {
  const { username, email, password, role } = useAuthStore.getState();
  try {
    const res = await api.post("/auth/signup", {
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
