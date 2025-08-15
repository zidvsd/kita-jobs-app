import { useParams } from "react-router-dom";
const UserDetailsPage = () => {
  const { id } = useParams();
  return <div>UserDetailsPage Job: {id}</div>;
};

export default UserDetailsPage;
