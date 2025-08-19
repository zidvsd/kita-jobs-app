import { Instagram, X, Github, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-customNeutral border-t-2">
      <div className="w-full custom-container">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About */}
          <div className="space-y-4">
            <Link to={"/"} className="flex flex-row select-none">
              <Logo textSize="3xl" textIcon={12} />
            </Link>
            <p className="text-sm text-customNeutral leading-relaxed">
              Connecting talented professionals with amazing opportunities
              nationwide.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <Link to="https://x.com/zidvsd" target="_blank">
                <X className="h-5 w-5 hover:text-customNeutral hover-light cursor-pointer" />
              </Link>
              <Link to="https://www.instagram.com/zidvsd" target="_blank">
                <Instagram className="h-5 w-5 hover:text-customNeutral hover-light cursor-pointer" />
              </Link>
              <Link to="https://github.com/zidvsd" target="_blank">
                <Github className="h-5 w-5 hover:text-customNeutral hover-light cursor-pointer" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/rashid-visda/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5 hover:text-customNeutral hover-light cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-sm font-bold text-black">For Job Seekers</h3>
            <ul className="mt-4 space-y-3 text-sm text-customNeutral">
              <li>
                <Link className="hover-light" to="/jobs">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="/users">
                  Browse Network
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-sm font-bold text-black">For Employers</h3>
            <ul className="mt-4 space-y-3 text-sm text-customNeutral">
              <li>
                <Link className="hover-light" to="post-job">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Browse Resumes
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Recruiting Solutions
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Employer Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-black">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-customNeutral">
              <li>
                <Link className="hover-light" to="#">
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover-light" to="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
      </div>
      <div className="pt-8">
        <p className="text-center text-xs text-customNeutral">
          © 2025 KitaJobs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
