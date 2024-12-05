import { useEffect, useState } from "react";
import { fetchCountries } from "../api/FetchCountries";


export const useFetchG20Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const g20Countries = await fetchCountries();
      setCountries(g20Countries);
      setLoading(false)
    };

    getCountries()
  }, [])

  return { countries, loading }
}