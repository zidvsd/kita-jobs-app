import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuthStore();

  if (!token) {
    // Redirect unauthenticated users to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
