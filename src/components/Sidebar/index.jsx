import React from 'react';

import './styles.css'

export const Sidebar = ({ countries, onCountryClick, selectedCountry }) => {
  return (
    <div className="odinSidebar">
      <div className="sidebar">
        <ul>
          {countries.map((country) => (
            <li
              key={country.cca3}
              onClick={() => onCountryClick(country)}
              className={selectedCountry?.cca3 === country.cca3 ? 'selected' : ''}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
