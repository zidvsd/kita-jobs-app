import { useAuthStore } from "../../stores/useAuthStore";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const LogOutButton = () => {
  const { setToken, token, reset } = useAuthStore();
  const handleLogOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    console.log(token);
    reset();
    toast.success("You have successfully logged out!");
  };
  return (
    <Link
      to={"/login"}
      onClick={handleLogOut}
      className="rounded-lg cursor-pointer bg-red-500 hover-utility hover:opacity-80 w-fit text-white flex  flex-row gap-x-2 items-center py-2 px-6  "
    >
      <LogOut />
      <h1>Log out</h1>
    </Link>
  );
};

export default LogOutButton;
