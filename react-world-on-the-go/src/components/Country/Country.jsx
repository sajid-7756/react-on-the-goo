import React from "react";

const Country = ({ country }) => {
  return (
    <>
      <ul>
        <li>{country.name.common}</li>
      </ul>
    </>
  );
};

export default Country;
