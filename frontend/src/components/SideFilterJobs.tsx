import { useState } from "react";

const SideFilterJobs = ({ isToggled }: any) => {
  const [filters, setFilters] = useState({
    jobType: [] as string[],
    experience: [] as string[],
    companySize: [] as string[],
    salaryRange: [30000, 300000],
  });

  const handleCheckboxChange = (category: string, value: string) => {
    setFilters((prev) => {
      const current = prev[category as keyof typeof prev] as string[];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  return (
    <>
      <aside
        className={`
        p-4 space-y-6
        w-full xl:w-auto
        ${isToggled ? " h-full bg-white  overflow-auto" : ""}
      `}
      >
        {/* Filter Header */}
        <h2 className="font-bold text-2xl text-center xl:text-left mb-4">
          Filter
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 xl:flex">
          {/* Job Type */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm space-y-2">
            <h3 className="font-semibold mb-2">Job Type</h3>
            {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.jobType.includes(type)}
                  onChange={() => handleCheckboxChange("jobType", type)}
                  className="accent-primary"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>

          {/* Experience Level */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm space-y-2">
            <h3 className="font-semibold mb-2">Experience Level</h3>
            {["Entry Level", "Mid Level", "Senior Level", "Executive"].map(
              (level) => (
                <label key={level} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.experience.includes(level)}
                    onChange={() => handleCheckboxChange("experience", level)}
                    className="accent-primary"
                  />
                  <span>{level}</span>
                </label>
              ),
            )}
          </div>

          {/* Company Size */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm space-y-2">
            <h3 className="font-semibold mb-2">Company Size</h3>
            {[
              "Startup (1-50)",
              "Small (51-200)",
              "Medium (201-1000)",
              "Large (1000+)",
            ].map((size) => (
              <label key={size} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.companySize.includes(size)}
                  onChange={() => handleCheckboxChange("companySize", size)}
                  className="accent-primary"
                />
                <span>{size}</span>
              </label>
            ))}
          </div>

          {/* Salary Range */}
          <div className="md:col-span-3 bg-gray-50 p-2 xl:py-8 rounded-md shadow-sm space-y-2 flex flex-col items-center">
            <h3 className="font-semibold mb-2">Salary Range</h3>
            <input
              type="range"
              min={30000}
              max={150000}
              step={5000}
              value={filters.salaryRange[0]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  salaryRange: [Number(e.target.value), prev.salaryRange[1]],
                }))
              }
              className="w-full md:w-2/3 xl:w-full   accent-primary hover:accent-secondary hover-utility active:accent-primary"
            />
            <div className="flex flex-row justify-between w-full md:w-2/3 text-sm">
              <span>${filters.salaryRange[0] / 1000}k</span>
              <span>${filters.salaryRange[1] / 1000}k</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideFilterJobs;
