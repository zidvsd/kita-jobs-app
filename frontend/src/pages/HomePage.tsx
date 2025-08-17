import { useEffect, useState } from "react";
import BrowseJobs from "../components/buttons/BrowseJobs";
import PostJob from "../components/buttons/PostJob";
import LogOutButton from "../components/buttons/LogOutButton";
import { useAuthStore } from "../stores/useAuthStore";
interface User {
  name: string;
  email: string;
  role: string;
}
const HomePage = () => {
  const { token } = useAuthStore();

  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // run once on mount
  return (
    <section className="py-48 hero-bg-gradient">
      <div className=" items-center text-center gap-12 text-white flex flex-col justify-center custom-container">
        <h1 className="lg:text-5xl text-4xl font-bold">Find Your Dream Job</h1>
        <h1 className="text-2xl font-light">
          Discover opportunities that match your skiils and passion
        </h1>
        <div className="w-full flex flex-row justify-center items-center gap-x-7">
          <BrowseJobs />
          <PostJob />
        </div>
        {token ? <LogOutButton /> : null}
      </div>
    </section>
  );
};

export default HomePage;
