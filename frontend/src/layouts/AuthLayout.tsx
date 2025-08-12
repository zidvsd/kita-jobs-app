import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="h-screen w-full custom-container flex flex-col items-center justify-center">
      <h1>Auth layout</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
