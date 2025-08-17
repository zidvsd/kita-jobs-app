import { Eye, EyeOff, ArrowBigUpDash } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { toast } from "react-toastify";
import { signInUser } from "../api/api";
import { handleCapsLock } from "../utils/utils";
const SignUpForm = () => {
  const {
    username,
    email,
    password,
    role,
    setEmail,
    setUsername,
    setPassword,
    setRole,
    reset,
  } = useAuthStore();
  const [showUserNameCapsLock, setUserNameShowCapsLock] =
    useState<boolean>(false);
  const [showEmailCapsLock, setEmailShowCapsLock] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
    try {
      const data = await signInUser();
      toast.success("You have successfully created an account!");
      console.log(data);
      reset();
    } catch (error) {
      toast.error("Unable to create account. Try Again.");
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Create an account</h1>
      <div className="flex items-center justify-center w-full bg-white">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg border border-neutral-200 shadow-md w-full md:w-4/5 lg:w-1/2"
        >
          {/* Username */}
          <label
            htmlFor="username"
            className="block text-sm font-medium text-black"
          >
            Username
          </label>
          <div className="mt-2">
            <div
              className="relative flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-300
                            has-[input:focus-within]:outline-2
                            has-[input:focus-within]:-outline-offset-2
                            has-[input:focus-within]:outline-secondary"
            >
              <input
                id="username"
                type={showUserNameCapsLock ? "text" : "text"}
                placeholder="e.g., guest_account"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyUp={(e) => handleCapsLock(e, setUserNameShowCapsLock)}
                className="block min-w-0 grow bg-transparent py-2 pr-10 pl-1 text-black placeholder:text-neutralCustomLight focus:outline-none rounded-md"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutralCustomLight"
                onClick={() => setUserNameShowCapsLock(!showUserNameCapsLock)}
              >
                {showUserNameCapsLock ? (
                  <ArrowBigUpDash className="text-customNeutral" />
                ) : null}
              </span>
            </div>
          </div>

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black mt-4"
          >
            Email
          </label>
          <div className="mt-2">
            <div
              className="relative flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-300
                            has-[input:focus-within]:outline-2
                            has-[input:focus-within]:-outline-offset-2
                            has-[input:focus-within]:outline-secondary"
            >
              <input
                id="email"
                type={showEmailCapsLock ? "text" : "email"}
                placeholder="e.g., guest_account@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => handleCapsLock(e, setEmailShowCapsLock)}
                className="block min-w-0 grow bg-transparent py-2 pr-10 pl-1 text-black placeholder:text-neutralCustomLight focus:outline-none rounded-md"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutralCustomLight"
                onClick={() => setEmailShowCapsLock(!showEmailCapsLock)}
              >
                {showEmailCapsLock ? (
                  <ArrowBigUpDash className="text-customNeutral" />
                ) : null}
              </span>
            </div>
          </div>

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black mt-4"
          >
            Password
          </label>
          <div className="mt-2">
            <div
              className="relative flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-300
                            has-[input:focus-within]:outline-2
                            has-[input:focus-within]:-outline-offset-2
                            has-[input:focus-within]:outline-secondary"
            >
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="e.g., ********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block min-w-0 grow bg-transparent py-2 pr-10 pl-1 text-black placeholder:text-neutralCustomLight focus:outline-none rounded-md"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutralCustomLight"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="text-customNeutral" />
                ) : (
                  <EyeOff className="text-customNeutral" />
                )}
              </span>
            </div>
          </div>
          {/* Role */}
          <label
            htmlFor="role"
            className="block text-sm font-medium text-black mt-4"
          >
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value as "recruiter" | "user")}
            className="block w-full mt-2 py-2 px-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          >
            <option value="">Select your role</option>
            <option value="recruiter">Recruiter</option>
            <option value="user">Job Seeker</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-secondary text-white py-2 rounded-md hover:bg-primary transition mt-6 hover-utility"
          >
            Sign in
          </button>

          <Link
            to={"/login"}
            className="hover-utility hover:underline mt-4 block text-center text-secondary"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
