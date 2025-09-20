import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const contriesPromise = async () => {
  const url = "https://openapi.programming-hero.com/api/all";
  const res = await fetch(url);
  return res.json();
};
const countriesData = contriesPromise();

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen gap-5">
            <span className="loading loading-spinner text-primary w-20"></span>
            <span className="loading loading-spinner text-secondary w-20"></span>
            <span className="loading loading-spinner text-accent w-20"></span>
            <span className="loading loading-spinner text-neutral w-20"></span>
            <span className="loading loading-spinner text-info w-20"></span>
            <span className="loading loading-spinner text-success w-20"></span>
            <span className="loading loading-spinner text-warning w-20"></span>
            <span className="loading loading-spinner text-error w-20"></span>
          </div>
        }
      >
        <Countries countriesData={countriesData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
