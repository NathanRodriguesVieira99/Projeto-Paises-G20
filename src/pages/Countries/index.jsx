import React from 'react';
import './styles.css';
import FetchCountries from '../../api/FetchCountries.jsx'
import CountryDetails from '../../components/CountryDetails';

const CountriesPage = () => {
  return (
    <div className="odinCountries">
      <FetchCountries />
      <CountryDetails />
    </div>
  );
};

export default CountriesPage;
