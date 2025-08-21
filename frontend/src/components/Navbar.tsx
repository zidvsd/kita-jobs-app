import {
  AlignJustify,
  Briefcase,
  UsersRound,
  Bell,
  UserRound,
} from "lucide-react";
import { useAuthStore } from "../stores/useAuthStore";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SignUpButton from "./buttons/SignUpButton";
import LoginButton from "./buttons/LoginButton";
import useResponsiveToggle from "../hooks/useResponsiveToggle";
const Navbar = () => {
  const { token } = useAuthStore();
  const { isToggled, setIsToggled } = useResponsiveToggle(768);
  return (
    <div className="bg-white sticky top-0  overflow-hidden shadow-md">
      <div className="custom-container w-full flex   flex-col gap-y-8 md:flex-row md:items-center md:justify-between text-customNeutral">
        {/* Left: Logo + Mobile Menu Button */}
        <div className="flex flex-row justify-between items-center md:w-auto">
          <Link to={"/"} className="flex flex-row select-none">
            <Logo textSize="3xl" textIcon={12} />
          </Link>
          <AlignJustify
            onClick={() => setIsToggled(!isToggled)}
            className="cursor-pointer md:hidden"
          />
        </div>
        {/* Middle: Search Bar */}
        <div
          className={`${
            isToggled ? "flex" : "hidden"
          } md:flex justify-center md:w-[320px] md:max-w-[320px]  lg:max-w-md xl:max-w-lg md:flex-1`}
        >
          <SearchBar />
        </div>
        {/* Right: Nav Links */}
        <div
          className={`${
            isToggled ? "flex" : "hidden"
          } md:flex flex-row items-center justify-between md:justify-end gap-8 md:gap-8 lg:gap-10 w-full md:w-auto`}
        >
          <Link
            to={"/jobs"}
            className="hover-light flex flex-col md:flex-row items-center gap-x-2"
          >
            <Briefcase />
            <p className="md:hidden xl:block">Jobs</p>
          </Link>
          <Link
            to={"/users"}
            className="hover-light flex flex-col md:flex-row items-center gap-x-2"
          >
            <UsersRound />
            <p className="md:hidden xl:block">Network</p>
          </Link>
          <Link
            to={"/"}
            className="hover-light flex flex-col md:flex-row items-center gap-x-2"
          >
            <Bell />
            <p className="md:hidden xl:block">Notifications</p>
          </Link>
          <Link
            to={`${token ? "/profile" : "/login"}`}
            className={`hover-light flex flex-col md:flex-row items-center gap-x-2 ${token ? "xl:flex" : "xl:hidden"}`}
          >
            <UserRound />
            <p className="md:hidden xl:block">{token ? "Me" : "Guest"}</p>
          </Link>
          {!token ? (
            <div className="hidden xl:flex flex-row items-center gap-x-8">
              <LoginButton />
              <SignUpButton />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
