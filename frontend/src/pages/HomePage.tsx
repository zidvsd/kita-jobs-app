import { useState, useEffect } from "react";
import SideFilterJobs from "../components/SideFilterJobs";
import BrowseJobs from "../components/buttons/BrowseJobs";
import PostJob from "../components/buttons/PostJob";
import LogOutButton from "../components/buttons/LogOutButton";
import { useAuthStore } from "../stores/useAuthStore";
import { ChevronDown } from "lucide-react";
import useResponsiveToggle from "../hooks/useResponsiveToggle";
import JobCards from "../components/JobCards";
import useFetch from "../hooks/useFetch";

// Skeleton UI component
const SkeletonCard = () => (
  <div className="p-6 border rounded-2xl shadow-md animate-pulse space-y-4">
    <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
    <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
    <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
    <div className="h-10 w-32 bg-gray-300 rounded"></div>
  </div>
);

const HomePage = () => {
  const { isToggled, setIsToggled } = useResponsiveToggle(1440);
  const { token } = useAuthStore();
  const dropDownFilters = ["Newest First", "Oldest First", "Most Relevant"];
  // use custom fetch hook
  const { data, loading, error, fetchData } = useFetch<any[]>();
  const [sortOrder, setSortOrder] = useState("Newest First");

  // 🔥 fetch jobs on mount
  useEffect(() => {
    fetchData("http://localhost:8000/api/jobs");
  }, []);

  return (
    <>
      <section className="py-48 hero-bg-gradient">
        <div className=" items-center text-center gap-12 text-white flex flex-col justify-center custom-container">
          <h1 className="lg:text-5xl text-4xl font-bold">
            Find Your Dream Job
          </h1>
          <h1 className="text-2xl font-light">
            Discover opportunities that match your skills and passion
          </h1>
          <div className="w-full flex flex-row justify-center items-center gap-x-7">
            <BrowseJobs />
            <PostJob />
          </div>
          {token ? <LogOutButton /> : null}
        </div>
      </section>

      <section className="grid gap-8  grid-cols-1 xl:grid-cols-[20%_80%] custom-container">
        {/* Sidebar - only visible on XL screens */}
        <div className="hidden xl:flex order-1 xl:order-0">
          <SideFilterJobs isToggled={isToggled} />
        </div>

        {/* Job Listings */}
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Latest Job Openings</h1>
            <div className="flex flex-row justify-between w-full items-center">
              <p className="text-customNeutral">
                {data ? data.length : 0} jobs found
              </p>
              <button className="text-lg flex flex-row gap-x-8 cursor-pointer">
                <span>{sortOrder}</span>
                <ChevronDown />
              </button>
            </div>
          </div>

          {/* Show Filters Button - only on small/medium */}
          <button
            onClick={() => setIsToggled(!isToggled)}
            className="w-sm self-center px-4 py-2 bg-secondary hover-utility hover:bg-primary text-white rounded-lg shadow-md cursor-pointer xl:hidden"
          >
            {isToggled ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Sidebar - appears right after the button on small/medium */}
          {isToggled && (
            <div className="xl:hidden">
              <SideFilterJobs isToggled={isToggled} />
            </div>
          )}

          {/* Content */}
          {loading ? (
            <div className="grid gap-4">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <p className="text-red-500">Failed to load jobs.</p>
          ) : (
            data && <JobCards jobs={data} />
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
