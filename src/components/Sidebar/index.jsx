import React, { useState } from 'react';
import './styles.css';

export const Sidebar = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleCountryInfo = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <>
      <div className="sidebar">
        <h3>Países participantes</h3>
        <ul>
          {countries.map((country) => (
            <li
              key={country}
              className={selectedCountry === country ? 'selected' : ''}
              onClick={() => toggleCountryInfo(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
