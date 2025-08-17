import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <Link to={"/login"} className="hover-utility hover:opacity-80 text-black">
      Login
    </Link>
  );
};

export default LoginButton;
