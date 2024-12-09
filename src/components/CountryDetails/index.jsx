import React from 'react';
import './styles.css';

const CountryDetails = ({ selectedCountry }) => {
  if (!selectedCountry) return null;

  const { name, capital, region, languages, tld, authorities } = selectedCountry;
  const firstLanguage = languages ? Object.values(languages)[0] : 'N/A';

  return (
    <div className="country-details">
      <h1>{name.common}</h1>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Language:</strong> {firstLanguage}</p>
      <p><strong>TLD:</strong> {tld ? tld[0] : 'N/A'}</p>

     
      {authorities && authorities.length > 0 ? (
        <div>
          <h3>Authorities:</h3>
          <ul>
            {authorities.map((authority, index) => (
              <li key={index}>
                {authority.name} - {authority.role}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p><strong>Authorities:</strong> N/A</p>
      )}
    </div>
  );
};

export default CountryDetails;
