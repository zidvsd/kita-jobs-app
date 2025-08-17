import { Link } from "react-router-dom";
const SignUpButton = () => {
  return (
    <Link
      to={"/signin"}
      className="hover-utility hover:bg-secondary text-white px-4 py-2    bg-primary font-light rounded-lg"
    >
      Sign up
    </Link>
  );
};

export default SignUpButton;
