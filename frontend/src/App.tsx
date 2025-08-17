import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuthStore } from "./stores/useAuthStore";
const App = () => {
  const { setToken } = useAuthStore();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
    console.log(token);
    setHydrated(true);
  }, [setToken]);
  return (
    <>
      <ToastContainer />

      <RouterProvider router={router} />
    </>
  );
};

export default App;
