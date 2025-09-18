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
      <h1 className="text-4xl font-bold"> Countries...</h1>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <Countries countriesData={countriesData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
