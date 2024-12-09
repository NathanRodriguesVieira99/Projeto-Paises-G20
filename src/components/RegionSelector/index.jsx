import { useState, useEffect } from "react";

import './styles.css'

const RegionSelector = ({ countries, selectedRegions, onRegionChange }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    if (countries && Array.isArray(countries)) {
      const uniqueRegions = Array.from(
        new Set(countries.map((country) => country.region))
      ).filter((region) => region);
      setRegions(uniqueRegions);
    }
  }, [countries]);

  const handleRegionToggle = (region) => {
    if (selectedRegions.includes(region)) {
      onRegionChange(selectedRegions.filter((r) => r !== region));
    } else {
      onRegionChange([...selectedRegions, region]);
    }
  };

  return (
    <div className="odinRegionSelector">
      <h4>Select Region</h4>
      {regions.length === 0 && <p>Carregando regiões...</p>}
      {regions.map((region) => (
        <div key={region}>
          <label>
            <input
              type="checkbox"
              checked={selectedRegions.includes(region)}
              onChange={() => handleRegionToggle(region)}
            />
            {region}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RegionSelector;
