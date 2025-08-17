import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="h-screen w-full custom-container flex flex-col items-center justify-center">
      <Link to={"/"}>
        <Logo textSize="3xl" textIcon={12} />
      </Link>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
