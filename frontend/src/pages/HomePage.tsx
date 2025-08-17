import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import appLogo from "/app-logo.svg";
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
  const [count, setCount] = useState(0);

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
    <div className="flex flex-col justify-center custom-container">
      <div className="flex flex-col">
        {data?.map((user) => (
          <div className="flex flex-col">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.role}</h1>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="text-accent ">hi</p>
      <h1 className="text-tertiary text-xl font-inter">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {token ? <LogOutButton /> : null}
    </div>
  );
};

export default HomePage;
