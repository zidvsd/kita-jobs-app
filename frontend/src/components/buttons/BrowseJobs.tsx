import { Link } from "react-router-dom";
const BrowseJobs = () => {
  return (
    <Link
      to={"/jobs"}
      className="hover-utility hover:bg-accent/90 bg-accent text-xl py-2 px-4  font-bold rounded-lg"
    >
      Browse All Jobs
    </Link>
  );
};

export default BrowseJobs;
