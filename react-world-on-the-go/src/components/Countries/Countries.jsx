import { use } from "react";
import Country from "./Country";

const Countries = ({ countriesData }) => {
  const countries = use(countriesData).countries;
  console.log(countries);
  return (
    <>
      {countries.map((country) => (
        <Country key={Math.random()} country={country}></Country>
      ))}
    </>
  );
};

export default Countries;
