import {
  MapPin,
  Building2,
  Clock4,
  PhilippinePeso,
  Bookmark,
} from "lucide-react";
import ViewButton from "./buttons/ViewButton";
import ApplyButton from "./buttons/ApplyButton";
import { firstCharToUpper } from "../utils/utils";
import { parseDate } from "../utils/utils";
import { Job } from "../stores/useJobsStore";
import { useState } from "react";

const JobCards = ({ jobs }: { jobs: Job[] }) => {
  if (!jobs || jobs.length === 0) {
    return <p className="text-gray-500">No jobs available.</p>;
  }

  // individual favorite state per job
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Job Listings</h1>
      <ul className="space-y-4">
        {jobs.map((job) => {
          const isFavorite = favorites[job._id] || false;

          return (
            <li
              key={job._id}
              className="p-4 border-neutral-200 border rounded-lg shadow space-y-2"
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-x-4">
                  <Building2 className="text-white bg-primary rounded-md size-12 p-2" />
                  <div className="flex flex-col gap-0">
                    <h1 className="font-bold text-xl">{job.title}</h1>
                    <h2 className="text-customNeutral text-lg ">
                      {job.company?.name}
                    </h2>
                  </div>
                </div>

                <Bookmark
                  className={`select-none cursor-pointer lg:flex hidden ${
                    isFavorite
                      ? "text-accent fill-accent"
                      : "text-customNeutral fill-transparent"
                  }`}
                  onClick={() => toggleFavorite(job._id)}
                />
              </div>

              <div className="flex flex-col gap-2 text-customNeutral">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <MapPin />
                    <p>{job.company?.location}</p>
                  </div>
                  <Bookmark
                    className={`select-none cursor-pointer lg:hidden ${
                      isFavorite
                        ? "text-accent fill-accent"
                        : "text-customNeutral fill-transparent"
                    }`}
                    onClick={() => toggleFavorite(job._id)}
                  />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <PhilippinePeso />
                  <p>
                    ₱{job.salaryRange.min} - ₱{job.salaryRange.max}{" "}
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Clock4 />
                  <p>{parseDate(job.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>

              <p className="font-bold text-lg">
                {firstCharToUpper(job.employmentType)}
              </p>
              <p className="text-customNeutral">{job.description}</p>

              <div className="px-8 flex flex-col md:flex-row gap-2 items-center justify-center md:justify-between">
                <ViewButton id={job._id} />
                <ApplyButton id={job._id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobCards;
