import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
import { useUserStore } from "../stores/useUserStore";
import { decodeToken, isTokenExpired } from "../utils/jwt";

const API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 5000,
});

export const signInUser = async () => {
  const { username, email, password, role } = useAuthStore.getState();
  try {
    const res = await api.post("auth/signup", {
      email,
      password,
      role,
      profile: {
        username,
      },
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
    const { token } = res.data;
    localStorage.setItem("token", token);

    const decoded = decodeToken(token);
    if (decoded && !isTokenExpired(token)) {
      await getUserData(decoded.id);
    }
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserData = async (id: string) => {
  try {
    const res = await api.get(`/users/${id}`);
    const userData = res.data;

    useUserStore.setState({
      email: userData.email,
      role: userData.role,
      skills: userData.skills,
      profile: userData.profile,
    });
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const initUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  const decoded = decodeToken(token);
  if (decoded && !isTokenExpired(token)) {
    await getUserData(decoded.id);
  } else {
    localStorage.removeItem("token"); // clear expired/invalid tokens
  }
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
