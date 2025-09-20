import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesData }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  const countries = use(countriesData).countries;
  return (
    <div className="max-w-[1120px] mx-auto">
      <h1 className="text-4xl font-bold text-center my-4">
        In the Countries {countries.length}
      </h1>
      <h3 className="text-2xl font-bold text-center my-4">
        Countries We Visited: {visitedCountries.length}
      </h3>
      <h3 className="text-2xl font-bold text-center my-4">
        Flags Visited:{visitedFlags.length}
      </h3>
      <ol className="list-decimal text-2xl font-bold text-center my-4">
        {visitedCountries.map((c) => (
          <li key={c.cca3.cca3}>{c.name.common}</li>
        ))}
        <div className="flex gap-5 justify-center">
          {visitedFlags.map((flag, index) => (
            <img key={index} className="h-5" src={flag}></img>
          ))}
        </div>
      </ol>
      <div className="grid grid-cols-3 ">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
