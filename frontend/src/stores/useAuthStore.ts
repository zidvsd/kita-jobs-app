import { create } from "zustand";

interface AuthState {
  username: string;
  email: string;
  password: string;
  role: string;
  token: string | null;
  setToken: (token: string | null) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRole: (role: "recruiter" | "user") => void;
  reset: () => void;
}
export const useAuthStore = create<AuthState>((set) => ({
  username: "",
  email: "",
  role: "",
  password: "",
  token: null,
  setToken: (token) => set({ token }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setRole: (role) => set({ role }),
  setPassword: (password) => set({ password }),
  reset: () => set({ username: "", email: "", password: "" }),
}));
