import { Link } from "react-router-dom";
const PostJob = () => {
  return (
    <Link
      to={"/post-job"}
      className=" hover:bg-secondary/50 hover-utility bg-secondary rounded-lg text-xl py-2 px-8 font-bold"
    >
      Post a Job
    </Link>
  );
};

export default PostJob;
