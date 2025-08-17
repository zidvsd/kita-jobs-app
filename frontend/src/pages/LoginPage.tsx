import { Eye, EyeOff, ArrowBigUpDash } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { toast } from "react-toastify";
import { logInUser } from "../api/api";
import { handleCapsLock } from "../utils/utils";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const nav = useNavigate();
  const { email, password, setEmail, setPassword, reset, setToken } =
    useAuthStore();
  const [showEmailCapsLock, setEmailShowCapsLock] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const data = await logInUser();

      if (data && data.token) {
        toast.success("You have successfully logged in!");
        localStorage.setItem("token", data.token);
        setToken(data.token);
        console.log(data.token);
        nav("/");
        reset();
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <div className="flex items-center justify-center w-full bg-white">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg border border-neutral-200 shadow-md w-full md:w-4/5 lg:w-1/2"
        >
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
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutralCustomLight">
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

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-secondary text-white py-2 rounded-md hover:bg-primary transition mt-6 hover-utility"
          >
            Log in
          </button>
          <div className="w-full flex flex-row items-center justify-between">
            <Link
              to={"/"}
              className="hover-utility hover:underline mt-4 block text-center text-black"
            >
              Forgot password?
            </Link>
            <Link
              to={"/signin"}
              className="hover-utility hover:underline mt-4 block text-center text-secondary"
            >
              Sign Up for KitaJobs
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
