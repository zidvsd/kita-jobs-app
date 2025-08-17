import { useEffect, useState } from "react";
interface User {
  name: string;
  email: string;
  role: string;
}
import SideFilterJobs from "../components/SideFilterJobs";
import BrowseJobs from "../components/buttons/BrowseJobs";
import PostJob from "../components/buttons/PostJob";
import LogOutButton from "../components/buttons/LogOutButton";
import { useAuthStore } from "../stores/useAuthStore";
import { ChevronDown } from "lucide-react";
import useResponsiveToggle from "../hooks/useResponsiveToggle";
const HomePage = () => {
  const { isToggled, setIsToggled } = useResponsiveToggle(1440);
  const [data, setData] = useState<User[] | null>(null);

  const [setLatest, setIsLatest] = useState("Newest First");
  const { token } = useAuthStore();
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
    <>
      <section className="py-48 hero-bg-gradient">
        <div className=" items-center text-center gap-12 text-white flex flex-col justify-center custom-container">
          <h1 className="lg:text-5xl text-4xl font-bold">
            Find Your Dream Job
          </h1>
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

      <section className="grid gap-8 grid-cols-1 xl:grid-cols-[20%_80%] custom-container">
        <div
          className={`${isToggled ? "flex" : "hidden"} w-full xl:w-auto xl:flex order-1 xl:order-0`}
        >
          <SideFilterJobs />
        </div>
        <div className="flex flex-col gap-y-4 ">
          <div className="flex flex-col ">
            <h1 className="font-bold text-2xl">Latest Job Openings</h1>
            <div className="flex flex-row justify-between w-full items-center">
              <p className="text-customNeutral">6 Jobs Found</p>
              <button className="text-lg flex flex-row gap-x-8 cursor-pointer">
                <span>Newest First</span>
                <ChevronDown />
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsToggled(!isToggled)}
            className="xl:hidden"
          >
            Show Filters
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
