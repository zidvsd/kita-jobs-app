import { Link } from "react-router-dom";
interface ApplyButtonProps {
  id: string;
}
const ApplyButton = ({ id }: ApplyButtonProps) => {
  return (
    <Link
      className="rounded-lg text-center w-full md:max-w-fit px-8 py-2 hover-opacity font-semibold  bg-accent text-white"
      to={`/jobs/view/${id}`}
    >
      Apply Now
    </Link>
  );
};

export default ApplyButton;
