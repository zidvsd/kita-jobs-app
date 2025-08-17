import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full rounded-xl border   md:border-customNeutral px-3 py-2 shadow-sm focus-within:border-transparent focus-within:ring-1 focus-within:ring-secondary">
      <Search className="size-5 text-customNeutral mr-2" />
      <input
        type="text"
        placeholder="Search jobs, companies, skills..."
        className="w-full bg-transparent outline-none text-black placeholder-customNeutral"
      />
    </div>
  );
};

export default SearchBar;
