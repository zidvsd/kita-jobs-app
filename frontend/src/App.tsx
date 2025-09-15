import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { initUser } from "./api/api";
import { useAuthStore } from "./stores/useAuthStore";
import useFetch from "./hooks/useFetch";
const App = () => {
  const {fetchData} = useFetch()
  const { setToken } = useAuthStore();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      // ✅ safely init user
      initUser().catch((err) => {
        console.error("Failed to initialize user:", err);
      });
    }

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
