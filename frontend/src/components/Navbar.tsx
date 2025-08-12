import appLogo from "/app-logo.svg";
const Navbar = () => {
  return (
    <div className="custom-container w-full flex flex-row items-center justify-between">
      <img src={appLogo} alt="" />
      <h1>
        Kita<span className="text-primary">Jobs</span>{" "}
      </h1>
    </div>
  );
};

export default Navbar;
