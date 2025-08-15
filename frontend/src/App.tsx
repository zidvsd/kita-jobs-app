import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAuthStore } from "./stores/useAuthStore";
const App = () => {
  const { setToken } = useAuthStore();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
    console.log(token);
  }, [setToken]);
  return (
    <>
      <ToastContainer />

      <RouterProvider router={router} />
    </>
  );
};

export default App;
