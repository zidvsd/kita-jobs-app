import { Link } from "react-router-dom";
interface ApplyButtonProps {
  id: string;
}
const ViewButton = ({ id }: ApplyButtonProps) => {
  return (
    <Link
      className="hover-opacity rounded-lg max-w-sm   text-black"
      to={`/jobs/view/${id}`}
    >
      View Details
    </Link>
  );
};

export default ViewButton;
