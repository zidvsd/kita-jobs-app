import { useState } from "react";
import reactLogo from "../assets/react.svg";
import appLogo from "/app-logo.svg";
const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center custom-container">
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
    </div>
  );
};

export default HomePage;
