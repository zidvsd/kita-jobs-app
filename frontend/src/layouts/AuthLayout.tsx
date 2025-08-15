import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
const AuthLayout = () => {
  return (
    <div className="h-screen w-full custom-container flex flex-col items-center justify-center">
      <Logo textSize="2xl" textIcon={12} />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
