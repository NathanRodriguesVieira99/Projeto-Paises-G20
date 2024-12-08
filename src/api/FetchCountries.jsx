import axios from 'axios';

const g20Countries = [
  'South Africa', 'Germany', 'Saudi Arabia', 'Argentina', 'Australia', 'Brazil',
  'Canada', 'China', 'South Korea', 'United States', 'France', 'India',
  'Indonesia', 'Italy', 'Japan', 'Mexico', 'United Kingdom', 'Russia', 'Turkey'
];

// puxando todos os paises da api e filtrando os do g20
export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const allCountries = response.data;

    const filtredCountries = allCountries
      .filter(country => g20Countries.includes(country.name.common))
      .map(country => country.name.common)
      .sort();

    return filtredCountries;
  } catch (error) {
    console.error('Erro ao buscar os países', error);
    return [];
  }
};
