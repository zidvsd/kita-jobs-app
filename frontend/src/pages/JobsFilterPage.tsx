import { useParams } from "react-router-dom";

const JobsFilterPage = () => {
  const { id } = useParams();
  return <div>job filter: {id}</div>;
};

export default JobsFilterPage;
