import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [Visited, setVisited] = useState(false);
  const [visitedFlags, setVisitedFlags] = useState(false);
  // console.log(country.currencies);
  const {
    name: { common },
    population: { population },
    flags: {
      flags: { png },
    },
    flags: {
      flags: { alt },
    },
    region: { region },
    area: { area },
    currencies: { currencies },
  } = country;

  const handleVisited = () => {
    // Visited ? setVisited(false) : setVisited(true); //1
    // setVisited(Visited ? false : true);  //2
    setVisited(!Visited);
    handleVisitedCountries(country);
  };

  const handleVisitedFlagsBtn = () => {
    setVisitedFlags(!visitedFlags)
    handleVisitedFlags(country?.flags?.flags?.png);
  };

  return (
    <div className="m-5 rounded-2xl p-6 flex flex-col items-center justify-between gap-5 glass-card hover:glass-card-hover transition-all duration-300">
      <img
        src={png}
        alt={alt}
        className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
      />

      <h3 className="text-2xl font-bold text-white text-center">
        Name: {common}
      </h3>

      <div className="w-full space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-300">Population:</span>
          <span className="font-medium text-white">
            {population.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Region:</span>
          <span className="font-medium text-white">{region}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Area:</span>
          <span className="font-medium text-white">
            {area.toLocaleString()} km²{" "}
            {area > 300000 ? "🏔️ Big Country" : "🔍 Small Country"}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-300">Currencies:</span>
          <span className="font-medium text-white">
            {Object.values(currencies).map((currency, index) => (
              <span key={index}>
                {index > 0 && ", "}
                {currency.name} ({currency.symbol})
              </span>
            ))}
          </span>
        </div>
      </div>

      <button
        className={`btn w-full mt-4 transition-all duration-300 btn-visited ${
          Visited
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-rose-500 hover:bg-rose-600"
        } text-white border-none`}
        onClick={handleVisited}
      >
        {Visited ? "✅ Visited" : "✈️ Not Visited"}
      </button>
      <button
        className={`btn w-full mt-4 transition-all duration-300 btn-visited ${
          visitedFlags
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-rose-500 hover:bg-rose-600"
        } text-white border-none`}
        onClick={handleVisitedFlagsBtn}
      >
        {visitedFlags ? "✅ Visited" : "✈️ Not Visited"}
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
