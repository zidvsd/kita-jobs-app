import { useParams } from "react-router-dom";
const JobDetailsPage = () => {
  const { id } = useParams();
  return <div>JobDetailsPage Job: {id}</div>;
};

export default JobDetailsPage;
