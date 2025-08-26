import { SquarePen, Star } from "lucide-react";
import LogOutButton from "../components/buttons/LogOutButton";
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Briefcase,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const ProfilePage = () => {
  useEffect(() => {}, []);
  const { fetchData } = useFetch();
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="custom-container p-6">
      {/* Profile Header */}
      <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Avatar + Info */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200"></div>
            <div>
              <h2 className="text-xl font-bold">Sarah Johnson</h2>
              <p className="text-gray-600">Senior Frontend Developer</p>
              <p className="text-sm text-gray-500">📍 San Francisco, CA</p>
            </div>
          </div>
          {/* Edit + Logout */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="flex flex-row border border-neutral-200 hover-utility hover:bg-gray-300 cursor-pointer items-center gap-x-4 px-4 py-2 bg-gray-100  rounded-lg ">
              <SquarePen className="size-6" />
              Edit Profile
            </button>
            <LogOutButton />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6 text-center bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="text-lg font-bold">45</p>
            <p className="text-gray-600 text-sm">Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-x-2">
              <Star className="stroke-yellow-400 fill-yellow-400 size-4 " />
              <p className="text-lg font-bold flex justify-center items-center gap-1">
                4.9
              </p>
            </div>

            <p className="text-gray-600 text-sm">Rating</p>
          </div>
          <div>
            <p className="text-lg font-bold">$125,000+</p>
            <p className="text-gray-600 text-sm">Earned</p>
          </div>
          <div>
            <p className="text-lg font-bold">$75-100</p>
            <p className="text-gray-600 text-sm">Hourly</p>
          </div>
        </div>
      </div>

      <div className=" grid mt-8 justify-start  lg:grid-cols-[65%_32%] gap-8">
        {/* Left Side */}
        {/* About Me */}
        <div className="space-y-8 ">
          <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6">
            <h2 className="font-bold text-xl mb-2">About Me</h2>
            <p className="text-gray-600">
              Passionate frontend developer with 6+ years of experience building
              scalable web applications. Specialized in React ecosystem and
              modern UI frameworks.
            </p>
          </div>
          {/* Skills */}
          <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6">
            <h2 className="font-bold text-xl mb-3">Skills</h2>
            <div className="">
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "Node.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
                <button className="px-3 py-1 border rounded-full text-sm hover:bg-gray-100">
                  + Add Skill
                </button>
              </div>
            </div>
          </div>
          {/* Work Experience */}
          <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6">
            <h2 className="font-bold text-xl mb-3">Work Experience</h2>
            <div>
              <p className="font-medium">Senior Frontend Developer</p>
              <p className="text-gray-500">TechCorp Inc. • 2022 - Present</p>
              <p className="text-gray-600 text-sm mt-1">
                Lead frontend development for enterprise web applications.
              </p>
            </div>
            <button className="mt-3 px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
              + Add Experience
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6">
            <h2 className="font-bold  text-xl mb-3">Contact Information</h2>
            <ul className="space-y-2 text-gray-600 text-sm flex flex-col gap-y-2">
              <li className="flex flex-col gap-y-1">
                Email
                <span className="flex flex-row gap-x-2 items-center">
                  <Mail className="text-customNeutral size-5" />
                  sarah.johnson@email.com
                </span>
              </li>
              <li className="flex flex-col gap-y-1">
                Phone
                <span className="flex flex-row gap-x-2 items-center">
                  <Phone className="text-customNeutral size-5" />
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex flex-col gap-y-1">
                Website
                <span className="flex flex-row gap-x-2 items-center">
                  <Globe className="text-customNeutral size-5" />
                  sarah.johnson.dev
                </span>
              </li>
              <li className="flex flex-col gap-y-1">
                Email
                <span className="flex flex-row gap-x-2 items-center">
                  <Mail className="text-customNeutral size-5" />
                  sarah.johnson@email.com
                </span>
              </li>
              <li className="pt-4 border-t-gray-200 border-t flex flex-col gap-y-1">
                Github
                <span className="flex flex-row gap-x-2 items-center">
                  <Mail className="text-customNeutral size-5" />
                  sarahjdev
                </span>
              </li>{" "}
              <li className="flex flex-col gap-y-1">
                LinkedIn
                <span className="flex flex-row gap-x-2 items-center">
                  <Linkedin className="text-customNeutral size-5" />
                  sarahjohnson
                </span>
              </li>
            </ul>
          </div>
          {/* Profile Status */}
          <div className="bg-white shadow-md border border-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">Profile Status</h3>
            <p className="text-gray-600">Availability</p>
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`${isAvailable ? "text-white  bg-secondary hover:bg-primary" : "bg-gray-200 hover:bg-gray-300 text-black"} cursor-pointer hover-utility mt-2 border-none w-full px-4 font-semibold py-2  rounded-lg `}
            >
              {isAvailable ? "Available Now" : "Not Available"}
            </button>
            <p className="text-center text-gray-500 text-sm ">
              Click to toggle availability
            </p>

            <div className="mt-4 border-t border-t-gray-200 pt-4 flex flex-row gap-x-2 items-center justify-center">
              <Calendar className="text-customNeutral size-4" />
              <p className="text-gray-500 text-sm ">Member since March 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
