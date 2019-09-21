import React from "react";
import { Link } from "react-router-dom";

const CountryItem = props => {
  const { name, native, languages, continent, code } = props.country;
  return (
    <div className="card">
      <li>
        <strong>Country: </strong> {name}
      </li>
      <li>
        <strong>Language: </strong> {languages}
      </li>
      <li>
        <strong>Native Language: </strong> {native}
      </li>
      <li>
        <strong>Continent: </strong> {continent}
      </li>
      <Link to={`/countries/${code}`}>
      <button className="btn">View Details</button>
      </Link>
      
    </div>
  );
};

export default CountryItem;
