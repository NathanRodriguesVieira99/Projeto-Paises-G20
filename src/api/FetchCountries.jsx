import { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar } from '../components/Sidebar';
import CountryDetails from '../components/CountryDetails';
import RegionSelector from '../components/RegionSelector';
import NameFilter from '../components/NameFilter';
// import AuthoritiesForm from '../components/AuthoritiesForm';  

const g20Countries = [
  "South Africa", "Germany", "Saudi Arabia", "Argentina", "Australia", "Brazil",
  "Canada", "China", "South Korea", "United States", "France", "India", "Indonesia",
  "Italy", "Japan", "Mexico", "United Kingdom", "Russia", "Turkey",
];

export default function FetchCountries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [authorities, setAuthorities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const filteredCountries = response.data
          .filter((country) => g20Countries.includes(country.name.common))
          .sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(filteredCountries);
        setIsLoading(false);
      } catch (error) {
        setError("Falha ao buscar países: " + error.message);
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const fetchAuthorities = async (countryName) => {
    try {
      const response = await axios.get(`https://example.com/authorities/${countryName}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar autoridades:", error);
      return [];
    }
  };

  const handleCountryClick = async (country) => {
    setSelectedCountry(country);
    
    const authorities = await fetchAuthorities(country.name.common);
    
    setSelectedCountry(prevState => ({
  ...prevState,
  authorities: authorities,
}));
  };

  const addAuthority = (authority) => {
    if (authorities.some((a) => a.role === authority.role && a.country === authority.country)) {
      return false;
    }
    
    setAuthorities((prevAuthorities) => [...prevAuthorities, authority]);
    return true; 
  };

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(country.region);
    const matchesName = filterName === '' || country.name.common.toLowerCase().includes(filterName.toLowerCase());
    return matchesRegion && matchesName;
  });

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading ? <p>Loading...</p> : (
        <div>
          <RegionSelector
            countries={countries}
            selectedRegions={selectedRegions}
            onRegionChange={(newRegions) => setSelectedRegions(newRegions)}
          />
          <NameFilter
            filterName={filterName}
            onFilterChange={setFilterName}
          />
          <div>
            <Sidebar
              countries={filteredCountries}
              onCountryClick={handleCountryClick}
              selectedCountry={selectedCountry}
            />
            <CountryDetails selectedCountry={selectedCountry} />
          </div>
        </div>
      )}
      
      {/* <AuthoritiesForm addAuthority={addAuthority} /> */}
    </div>
  );
}
