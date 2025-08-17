import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <Link
      to={"/login"}
      className=" hover-utility border border-neutral-200 hover:bg-neutral-300 bg-neutral-100 rounded-md  px-4 py-2  hover-utility hover:opacity-80 text-black"
    >
      Sign in
    </Link>
  );
};

export default LoginButton;
